function makeUciMoves(variantKey, fenOpt, uciMoves){
	let result = makeUciMovesScala(variantKey, fenOpt, uciMoves)	
	
	let [fen, legalMovesUcis, sanMoves] = result
	
	if(fen) return {		
		success: true,
		fen: fen,
		legalMovesUcis: legalMovesUcis,
		sanMoves: sanMoves
	}
	
	return {		
		success: false,
		errors: sanMoves
	}
}

function storeLocal(id, blob){	
	localStorage.setItem(id, JSON.stringify(blob))
}

function getLocal(id){
	let content = localStorage.getItem(id)
	if(!content){		
		return null
	}
	try{
		let blob = JSON.parse(content)		
		return blob
	}catch(err){}
	return null
}

class GameNode_{
	constructor(parentGame, props){
		this.fromblob(parentGame, props)
	}
	
	getNodeById(id){
		return this.parentGame.getNodeById(id)
	}
	
	makeUciMove(uci, fen, san, legalMovesUcis){
		let newId = this.id + "_" + uci
		let node
		if(this.childIds.includes(newId)){
			node = this.getNodeById(newId)
		}else{
			this.childIds.push(newId)
			
			node = GameNode(this.parentGame, {id: newId, fen: fen, uci: uci, san: san, legalMovesUcis: legalMovesUcis})			
			node.parentId = this.id
		}		
		this.parentGame.addNode(node)
		this.parentGame.currentNode = node
	}
	
	fullmoveNumber(){
		return parseInt(this.fen.split(" ")[5])
	}
	
	turn(){
		return this.fen.split(" ")[1]
	}
	
	getParent(){
		if(!this.parentId) return null
		return this.parentGame.getNodeById(this.parentId)
	}
	
	pgn(){		
		let parent = this.getParent()
		if(!parent) return ""
		let number = ""		
		if(!parent.parentId) number = `${(this.fullmoveNumber() - 1)}..`		
		if(this.turn() == "b") number = `${this.fullmoveNumber()}.`				
		if(number) return number + " " + this.san
		return this.san
	}
	
	serialize(){
		return {
			id: this.id,
			parentId: this.parentId,
			fen: this.fen,
			uci: this.uci,
			san: this.san,
			legalMovesUcis: this.legalMovesUcis,
			childIds: this.childIds
		}
	}
	
	fromblob(parentGame, blob){		
		if(!parentGame) return this
		if(!blob) return this
		this.parentGame = parentGame
		this.id = blob.id || "root"
		this.parentId = blob.parentId
		this.fen = blob.fen
		this.uci = blob.uci
		this.san = blob.san
		this.legalMovesUcis = blob.legalMovesUcis
		this.childIds = blob.childIds || []
		return this
	}
}
function GameNode(parentGame, props){return new GameNode_(parentGame, props)}

class Game_{
	constructor(variantKey, fen, id){				
		this.variantKey = variantKey || "standard"
		let result = makeUciMoves(this.variantKey, fen, [])
		this.currentNode = null
		this.nodes = null
		if(result.success){
			this.currentNode = GameNode(this, {fen: result.fen, legalMovesUcis: result.legalMovesUcis})
			this.nodes = {root: this.currentNode}	
		}		
		this.id = id
	}
	
	serialize(){
		let nodesSerialized = {}
		for(let id in this.nodes){			
			nodesSerialized[id] = this.getNodeById(id).serialize()
		}
		return {
			id: this.id,
			variantKey: this.variantKey,
			currentNode: this.currentNode.serialize(),
			nodes: nodesSerialized,
			flip: !!this.flip
		}
	}
	
	fromblob(blob){
		if(!blob) return
		this.id = blob.id
		this.variantKey = blob.variantKey
		this.currentNode = GameNode().fromblob(this, blob.currentNode)
		this.nodes = {}
		for(let id in blob.nodes){
			this.nodes[id] = GameNode().fromblob(this, blob.nodes[id])
		}
		this.nodes[this.currentNode.id] = this.currentNode
		this.flip = !!blob.flip
		return this
	}
	
	save(){
		if(this.id){			
			storeLocal(this.id, this.serialize())
		}else{
			
		}
	}
	
	load(){		
		if(this.id){
			this.fromblob(getLocal(this.id))
		}else{
			
		}
	}
	
	makeUciMove(uci){		
		let result = makeUciMoves(this.variantKey, this.currentNode.fen, [uci])
		
		if(result.success){			
			this.currentNode.makeUciMove(uci, result.fen, result.sanMoves[0], result.legalMovesUcis)
			return true
		}else{
			console.log(result)
			return false
		}
	}
	
	getNodeById(id){
		return this.nodes[id]
	}
	
	addNode(node){
		this.nodes[node.id] = node
	}
	
	line(){
		let cn = this.currentNode
		let nodes = []
		while(cn && cn.parentId){
			nodes.unshift(cn)			
			cn = this.getNodeById(cn.parentId)
		}
		return nodes
	}
	
	lineSan(){
		return this.line().map(node => node.san).join(" ")
	}
	
	linePgn(){
		return this.line().map(node => node.pgn()).join(" ")
	}
	
	fen(){
		return this.currentNode.fen
	}
	
	legalMovesUcis(){
		return this.currentNode.legalMovesUcis
	}
	
	back(){
		if(this.currentNode.parentId){
			this.currentNode = this.currentNode.getParent()
			return true
		}
		return false
	}
	
	forward(){
		if(this.currentNode.childIds.length){
			this.currentNode = this.getNodeById(this.currentNode.childIds[0])
			return true
		}
		return false
	}
	
	tobegin(){
		while(this.back());
	}
	
	toend(){
		while(this.forward());
	}
	
	del(){
		if(!this.currentNode.parentId) return false
		let delId = this.currentNode.id
		this.back()
		this.currentNode.childIds = this.currentNode.childIds.filter(id => (id != delId))		
		for(let id in this.nodes){
			if(id.match(delId)){				
				delete this.nodes[id]
			}
		}
		return true
	}
}
function Game(variantKey, fen, id){return new Game_(variantKey, fen, id)}

function newGame(variantKey, fen){
	let result = makeUciMoves(variantKey, fen, [])
	if(result.success) return Game(variantKey, fen)
	return null
}

// test
//console.log("test", makeUciMovesScala("standard", undefined, []))
