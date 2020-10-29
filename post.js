function makeUciMoves(variantKey, fen, uciMoves){
	let result = makeUciMovesScala(variantKey, fen, uciMoves)	
	
	return {
		fen: result.T2__f__1,
		sanMoves: result.T2__f__2
	}
}

let result = makeUciMoves("atomic", undefined, ["e2e3", "e7e6", "g1f3"])

console.log(result)
