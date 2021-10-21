var logEngine = console.log

function setLogEngine(le){
    logEngine = le
}

class UciEngine{
    constructor(path){
        this.path = path

        this.process = null

        this.spawn()
    }

    spawn(){
        if(this.process) this.process.kill()

        this.process = require('child_process').spawn(this.path)

        this.buffer = ""

        this.process.stdout.on('data', data =>{
            let content = data.toString()

            //logEngine(`out: ${content}`)

            this.buffer += content

            if(this.buffer.match(/\n/)){
                let lines = this.buffer.split("\n")
                this.buffer = lines.pop()
                for(let line of lines) this.processLine(line)
            }
        })

        this.process.stderr.on('data', data =>{
            let content = data.toString()

            logEngine(`err: ${content}`)
        })

        this.initInfo()

        this.running = false
        this.pondering = false
        this.ponderAfter = false
        this.onbestmove = null

        logEngine(`spawned engine ${this.path} pid ${process.pid}`)
    }

    processLine(line){
        if(this.logProcessLine) logEngine(`processing ( ${line.length} ): ${line}`)

        if(line.match(/^info string/)) return

        let m
        if(m=line.match(/depth (-?\d+)/)){
            this.currentDepth = parseInt(m[1])
        }

        while(this.info.depthInfos.length <= this.currentDepth){
            this.info.depthInfos.push({})
        }

        this.info.depthInfos[this.currentDepth].depth = this.currentDepth

        if(m=line.match(/time (\d+)/)){
            this.info.depthInfos[this.currentDepth].time = parseInt(m[1])
        }

        if(m=line.match(/score cp (-?\d+)/)){
            this.info.depthInfos[this.currentDepth].score = {unit: "cp", value: parseInt(m[1])}
        }

        if(m=line.match(/score mate (-?\d+)/)){
            this.info.depthInfos[this.currentDepth].score = {unit: "mate", value: parseInt(m[1])}
        }

        if(m=line.match(/ pv (.*)$/)){
            this.info.depthInfos[this.currentDepth].pv = m[1]
            this.info.depthInfos[this.currentDepth].pvMoves = m[1].split(" ")
        }

        if(line.match(/^bestmove/)){            
            this.running = false
            this.pondering = false
            if(m=line.match(/^bestmove ([^\s]+) ponder ([^\s]+)/)){
                this.info.bestmove = m[1]
                this.info.ponder = m[2]
            }else if(m=line.match(/^bestmove ([^\s]+)/)){
                this.info.bestmove = m[1]
                this.info.ponder = null
            }
            let elapsed = Math.floor(new Date().getTime() - this.startedThinkingAt) + 1
            logEngine(`thinking took ${elapsed}, bestmove ${this.info.bestmove}, onbestmove ${this.onbestmovereason}`)            
            if(this.onbestmove){                
                this.onbestmove()
            }            
            if(this.ponderAfter){
                if(this.info.ponder){
                    if(this.positionSet.moves.length % 2){
                        this.timecontrol.btime -= elapsed                        
                    }else{
                        this.timecontrol.wtime -= elapsed
                    }                
                    this.position(this.positionSet.specifier, this.positionSet.moves.concat([this.info.bestmove, this.info.ponder]))
                    this.go({wtime: this.timecontrol.wtime, winc: this.timecontrol.winc, btime: this.timecontrol.btime, binc: this.timecontrol.binc, ponder: true})
                }                
            }
        }
    }

    issueCommand(command){
        this.process.stdin.write(`${command}\n`)
        logEngine(`issue command: ${command}`)
        return this
    }

    quit(){
        logEngine(`quitting engine`)
        return this.issueCommand("quit")
    }

    setoption(key, value){
        if(this.pondering){
            logEngine(`refused to set option ${key} to ${value} during pondering`)
            return this
        }
        return this.issueCommand(`setoption name ${key} value ${value}`)
    }

    position(specifier, moves){
        let command = `position ${specifier}`
        if(moves) command += ` moves ${moves.join(" ")}`
        this.positionSet = {
            specifier: specifier,
            moves: moves || []
        }
        if(this.pondering) return this
        return this.issueCommand(command)
    }

    initInfo(){
        this.currentDepth = 0
        this.info = {
            bestmove: null,
            ponder: null,
            depthInfos: [{}]
        }
    }

    setonbestmove(onbestmove, reason){
        logEngine(`set onbestmove ${reason}`)
        this.onbestmove = onbestmove
        this.onbestmovereason = reason
    }

    go(props){
        this.ponderAfter = props.ponderAfter

        if(this.pondering){
            if((this.positionSet.specifier == this.pondering.specifier)&&(this.positionSet.moves.join(" ") == this.pondering.moves.join(" "))){
                this.pondering = false                
                this.ponderhit()
            }else{
                logEngine(`pondermiss`)
                this.pondering = false                
                let currentonbestmove = this.onbestmove
                this.setonbestmove(_=>{                                    
                    this.position(this.positionSet.specifier, this.positionSet.moves)                    
                    this.setonbestmove(currentonbestmove, "resolve pondermiss")
                    this.go(props)
                }, "pondermiss")
                this.stop()
            }
            return
        }

        if(this.running){
            logEngine(`fatal trying to go while running`)
            return
        }

        let command = `go`
        const keys = ["depth", "wtime", "winc", "btime", "binc"]
        this.timecontrol = {}
        for(let key of keys){
            if(typeof props[key] != "undefined"){
                command += ` ${key} ${props[key]}`            
                this.timecontrol[key] = props[key]
            }
        }
        this.pondering = false
        if(props.ponder){
            command += ` ponder`            
            this.pondering = this.positionSet
        }
        this.initInfo()        
        this.startedThinkingAt = new Date().getTime()
        this.running = true
        return this.issueCommand(command)
    }

    ponderhit(){                
        logEngine(`ponderhit`)
        return this.issueCommand(`ponderhit`)        
    }

    stop(){                        
        if(!this.running){
            logEngine(`engine already stopped`)
            return
        }
        return this.issueCommand(`stop`)        
    }

    gothen(props){        
        return new Promise(resolve=>{
            this.setonbestmove(_=>resolve(this.info), "gothen")
            this.go(props)
        })
    }
}

if(typeof module != "undefined"){
    module.exports = {
        setLogEngine: setLogEngine,
        UciEngine: UciEngine
    }    
}
