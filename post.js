function makeUciMoves(variantKey, fen, uciMoves){
	let result = makeUciMovesScala(variantKey, fen, uciMoves)	
	
	fen = result.T2__f__1
	let sanMoves = result.T2__f__2
	
	if(fen) return {		
		success: true,
		fen: fen,
		sanMoves: result.T2__f__2
	}
	
	return {		
		success: false,
		errors: sanMoves
	}
}

let result = makeUciMoves("atomic", undefined, ["e2e3", "e7e6", "g1f3"])

console.log(result)
