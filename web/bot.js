const IS_BROWSER = ( typeof window != "undefined" )

const DEFAULT_REDUCE_THINKING_TIME      = 1

class LichessBotGame_{
    poweredBy(){
        this.writeBotChat(["player", "spectator"], `${this.botName} powered by https://easychess.herokuapp.com .`)
    }

    constructor(props){
        this.props = props

        this.parentBot = props.parentBot
        
        this.id = props.id        

        // TODO this.engine = 

        this.ratingDiff = 0

        this.gameStateReader = new NdjsonReader(LICHESS_STREAM_GAME_STATE_URL + "/" + this.id, this.processGameEvent.bind(this), this.parentBot.token, this.processTermination.bind(this))

        this.gameStateReader.stream()
    }

    writeBotChat(rooms, msg){
        return
        for(let room of rooms){
            writeLichessBotChat(this.id, room, msg, this.parentBot.token).then(result => {
                //
            })
        }
    }

    processGameEvent(event){
        if(event.type == "chatLine") return

        console.log(JSON.stringify(event, null, 2))

        if(event.type == "gameFull"){
            let gameFull = event
            this.gameFull = gameFull

            this.botTurn = chessboard.WHITE

            this.botRating = gameFull.white.rating || 1500
            this.oppRating = gameFull.black.rating || 1500

            this.botName = gameFull.white.name
            this.opponentName = gameFull.black.name

            if(gameFull.black.id == this.parentBot.userId){
                this.botTurn = chessboard.BLACK

                this.botRating = gameFull.black.rating || 1500
                this.oppRating = gameFull.white.rating || 1500

                this.botName = gameFull.black.name
                this.opponentName = gameFull.white.name
            }

            this.ratingDiff = this.oppRating - this.botRating

            this.variant = gameFull.variant.key

            this.testBoard = chessboard.ChessBoard().setfromfen(
                gameFull.initialFen == "startpos" ? null : gameFull.initialFen,
                this.variant
            )

            this.initialFen = this.testBoard.fen

            this.state = gameFull.state

            this.writeBotChat(["player", "spectator"], `Good luck, ${this.opponentName} !`)                
            
            this.poweredBy()
        }else if(event.type == "gameState"){
            this.state = event
        }

        if(this.gameFull && this.state){
            this.board = chessboard.ChessBoard().setfromfen(
                this.initialFen,
                this.variant
            )

            let allMovesOk = true

            this.moves = null

            if(this.state.moves){
                this.moves = this.state.moves.split(" ")
                for(let algeb of this.moves){
                    allMovesOk = allMovesOk && this.board.pushalgeb(algeb)
                }
            }                

            this.currentFen = this.board.fen

            console.log("allMovesOk", allMovesOk, this.board.toString())

            if(allMovesOk){
                if(this.board.turn == this.botTurn){
                    let lms = this.board.legalmovesforallpieces()

                    if(lms.length){
                        let reduceThinkingTime = this.parentBot.props.reduceThinkingTime || DEFAULT_REDUCE_THINKING_TIME

                        this.timecontrol = {
                            wtime:  this.state.wtime ? Math.floor(this.state.wtime / reduceThinkingTime) : 10000,
                            winc:   this.state.winc  || 0,
                            btime:  this.state.btime ? Math.floor(this.state.btime / reduceThinkingTime) : 10000,
                            binc:   this.state.binc  || 0,
                        }

                        if(this.timecontrol.wtime > HOUR) this.timecontrol.wtime = 10000
                        if(this.timecontrol.btime > HOUR) this.timecontrol.btime = 10000                            

                        if(this.parentBot.props.makeRandomMoves){
                            // TODO
                        }else{
                            let bookalgeb = null

                            if(this.parentBot.props.useOwnBook){
                                // TODO
                            }

                            ((
                                this.parentBot.props.useBotBook ||
                                ( this.parentBot.props.allowFallBackToBotBook && (!bookalgeb) )
                            ) ?
                                (requestLichessBook(
                                this.currentFen,
                                this.variant,
                                this.parentBot.props.lichessBookMaxMoves || LICHESS_BOOK_MAX_MOVES,
                                (this.parentBot.props.lichessBookAvgRatings || LICHESS_BOOK_AVG_RATINGS),
                                (this.parentBot.props.lichessBookTimeControls || LICHESS_BOOK_TIME_CONTROLS)
                            )) : RP({moves: null})).then(result => {
                                let bmoves = result.moves

                                if(bmoves && bmoves.length){
                                    let grandTotal = 0

                                    for(let bmove of bmoves){
                                        bmove.total = bmove.white + bmove.draws + bmove.black
                                        grandTotal += bmove.total
                                    }

                                    let rand = Math.round(Math.random() * grandTotal)

                                    let currentTotal = 0

                                    for(let bmove of bmoves){
                                        currentTotal += bmove.total                                            
                                        if(currentTotal >= rand){
                                            bookalgeb = bmove.uci
                                            break
                                        }                                            
                                    }
                                }

                                if(bookalgeb){
                                    this.playBotMove("book", {bestmove: bookalgeb, scorenumerical: null})
                                }
                                else{
                                    this.moveOverHead = parseInt(this.parentBot.props.moveOverHead || 500)
                                    
                                    // TODO this.playBotMove.bind(this, "engine")
                                }
                            })                                
                        }                            
                    }
                }
            }
        }
    }

    playBotMove(method, moveObj){
        let move = this.board.algebtomove(moveObj.bestmove)

        let offeringDraw = false

        if(move){
            let msg = `My ${method} move : ${this.board.movetosan(move)} .`

            let randPercent = Math.round(Math.random() * 100)

            if(!(moveObj.scorenumerical === null)){
                let scorenumerical = moveObj.scorenumerical
                msg += ` Score numerical cp : ${scorenumerical} .`                
                if(this.moves && this.moves.length > 40){
                    if(this.ratingDiff > -200){
                        if(scorenumerical == 0){
                            offeringDraw = true
                        }
                        if(scorenumerical < 200){
                            if(randPercent < 10) offeringDraw = true
                        }
                    }
                }
            }

            if(offeringDraw) msg += " I would agree to a draw ."            

            makeLichessBotMove(this.id, moveObj.bestmove, offeringDraw, this.parentBot.token).then(result => {
                //
            })

            this.writeBotChat(["player", "spectator"], msg)
        }else{
            // try to make move anyway
            makeLichessBotMove(this.id, moveObj.bestmove, offeringDraw, this.parentBot.token).then(result => {
                //
            })
        }
    }

    processTermination(){
        console.log(`Game ${this.id} terminated .`)

        this.writeBotChat(["player", "spectator"], `Good game, ${this.opponentName} !`)
        this.poweredBy()
        // TODO this.engine.terminate()
    }
}
function LichessBotGame(props){return new LichessBotGame_(props)}

class LichessBot_{
    constructor(props){
        this.props = props

        this.token = props.token

        this.userId = props.userId

        this.acceptVariant = props.acceptVariant

        if(props.acceptVariant){
            if(typeof props.acceptVariant == "string") this.acceptVariant = props.acceptVariant.split(" ")
        }

        this.minInitialClock = props.minInitialClock || 60
    }

    toString(){
        return `bot ${this.token}`
    }

    challengeRefused(msg){
        console.log("Challenge refused .", msg)
    }

    processBotEvent(event){
        console.log(JSON.stringify(event, null, 2))

        if(event.type == "challenge"){
            let challenge = event.challenge

            if(this.acceptVariant){
                if(!this.acceptVariant.includes(challenge.variant.key)){
                    return this.challengeRefused(`Wrong variant . Acceptable variant(s) : ${this.acceptVariant.join(" , ")} .`)            
                }
            }

            if(challenge.timeControl.limit < this.minInitialClock){
                return this.challengeRefused(`Initial clock too low . Minimum initial clock : ${this.minInitialClock} sec(s) .`)            
            }

            acceptLichessChallenge(event.challenge.id, this.token)
        }else if(event.type == "gameStart"){
            LichessBotGame({
                parentBot: this,
                id: event.game.id
            })
        }
    }

    stream(){
        this.challengeReader = new NdjsonReader(LICHESS_STREAM_EVENTS_URL, this.processBotEvent.bind(this), this.token)

        this.challengeReader.stream()
    }
}
function LichessBot(props){return new LichessBot_(props)}

const bot = LichessBot({
	token: "",
	userId: "normalbulletbot"
})

bot.stream()

