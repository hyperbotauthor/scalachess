const fs = require('fs')

let sources = ["alpha"]
let pieceKinds = ["p", "n", "b", "r", "q", "k"]
let colors = ["w", "b"]

let blob = {}

for(let source of sources){
	blob[source] = {w:{},b:{}}
	let content = fs.readFileSync(`${source}.css`).toString()
	for(let color of colors) for(let pieceKind of pieceKinds){
		let re = new RegExp(`${source}piece${color=="w"?"w":""}${pieceKind}(.*)`)			
		let m = content.match(re)
		if(m){
			let parts = m[1].split("'")
			blob[source][color][pieceKind] = parts[1]
		}		
	}
}

fs.writeFileSync("pieces.js", "let PIECES_CSS = " + JSON.stringify(blob, null, 2))
