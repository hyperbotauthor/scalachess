function makeUciMoves(variantKey, fen, uciMoves){
	let result = makeUciMovesScala(variantKey, fen, uciMoves)	
	
	fen = result.T3__f__1
	let legalMovesUcis = result.T3__f__2
	let sanMoves = result.T3__f__3
	
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

class GameNode_{
	constructor(parentGame, props){
		this.parentGame = parentGame
		this.id = props.id || "root"
		this.parentId = props.parentId
		this.fen = props.fen
		this.uci = props.uci
		this.san = props.san
		this.childIds = props.childIds || []
	}
	
	getNodeById(id){
		return this.parentGame.getNodeById(id)
	}
	
	makeUciMove(uci, fen, san){
		let newId = this.id + "_" + uci
		let node
		if(this.childIds.includes(newId)){
			let node = this.getNodeById(newId)
		}else{
			this.childIds.push(newId)
			node = GameNode(this.parentGame, {id: newId, fen: fen, uci: uci, san: san})			
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
}
function GameNode(parentGame, props){return new GameNode_(parentGame, props)}

class Game_{
	constructor(variantKey, fen){
		this.variantKey = variantKey
		let result = makeUciMoves(this.variantKey, fen)
		this.currentNode = GameNode(this, {fen: result.fen})
		this.nodes = {root: this.currentNode}
	}
	
	makeUciMove(uci){
		let result = makeUciMoves(this.variantKey, this.currentNode.fen, [uci])
		
		if(result.success){			
			this.currentNode.makeUciMove(uci, result.fen, result.sanMoves[0])
			return true
		}else return false
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
}
function Game(variantKey, fen){return new Game_(variantKey, fen)}

function newGame(variantKey, fen){
	let result = makeUciMoves(variantKey, fen, [])
	if(result.success) return Game(variantKey, fen)
	return null
}

console.log(makeUciMoves("atomic", undefined, []))