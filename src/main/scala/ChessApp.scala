package chess

import scala.scalajs.js.annotation.JSExportTopLevel
import scala.scalajs.js
import js.JSConverters._

object ChessApp {
	val DEFAULT_VARIANT = variant.Standard
	@JSExportTopLevel("parsePgn")
	def parsePgn(
		pgn: String
	):js.Tuple2[
		js.Array[js.Tuple2[String, String]],
		js.Array[js.Tuple2[String, String]]
	] = {
		val emptyResult = js.Array[js.Tuple2[String, String]]()
		
		chess.format.pgn.Parser.full(pgn) match {
			case cats.data.Validated.Valid(parsedPgn) => {
				val tags = parsedPgn.tags.value.map(tag => js.Tuple2(tag.name.lowercase, tag.value)).toJSArray												
				Replay.games(parsedPgn.strMoves, None, variant.Variant("standard").get) match {
			case cats.data.Validated.Valid(games) => {													
				val fens = games.map(g => js.Tuple2(g.genUci, (chess.format.Forsyth >> g).toString)).toJSArray
				return js.Tuple2(tags, fens)
			}
			case cats.data.Validated.Invalid(_) => {													
				println("replay error")
				return js.Tuple2(emptyResult, emptyResult)
			}
		}
			}
			case cats.data.Validated.Invalid(_) => {
				println("parse error")
				return js.Tuple2(emptyResult, emptyResult)
			}
		}
	}	
	@JSExportTopLevel("makeSanMovesScala")
	def makeSanMovesScala(
		variantKeyOptJs: js.UndefOr[String],
		fenOptJs: js.UndefOr[String],
		sans: js.Array[String]
	): js.Tuple2[
		js.Array[String],
		js.Array[String]
	] = {				
		val variantKey = variantKeyOptJs.getOrElse(DEFAULT_VARIANT.key)
		val variantOpt = variant.Variant(variantKey)	
		if(variantOpt.isEmpty) return js.Tuple2(List().toJSArray, List("invalid variant key").toJSArray)
		val fenOpt : Option[chess.format.FEN] = fenOptJs.toOption match {
			case Some(fen) => Some(chess.format.FEN(fen));
			case None => None
		}
		if(!fenOptJs.toOption.isEmpty){
			val fen = format.FEN(fenOptJs.get)
			val parsed = format.Forsyth.<<<@(variantOpt.get, fen)
			if(parsed.isEmpty) return js.Tuple2(List().toJSArray, List("invalid fen").toJSArray)
		}
		Replay.games(sans, fenOpt, variantOpt.get) match {
			case cats.data.Validated.Valid(games) => {													
				return js.Tuple2(games.map(g => g.genUci).toJSArray, (games.map(g => (chess.format.Forsyth >> g).toString)).toJSArray)
			}
			case cats.data.Validated.Invalid(why) => {									
				return js.Tuple2(List().toJSArray, List(why).toJSArray)
			}
		}
	}
	@JSExportTopLevel("makeUciMovesScala")
	def makeUciMovesScala(
		variantKeyOptJs: js.UndefOr[String],
		fenOptJs: js.UndefOr[String],
		ucisJs: js.UndefOr[js.Array[String]]
	): js.Tuple3[
		js.UndefOr[String],
		js.Array[String],
		js.Array[String]
	] = {				
		val variantKey = variantKeyOptJs.getOrElse(DEFAULT_VARIANT.key)
		val variantOpt = variant.Variant(variantKey)	
		if(variantOpt.isEmpty) return js.Tuple3("", List[String]().toJSArray, List("invalid variant key").toJSArray)
		val fenOpt : Option[chess.format.FEN] = fenOptJs.toOption match {
			case Some(fen) => Some(chess.format.FEN(fen));
			case None => None
		}
		if(!fenOptJs.toOption.isEmpty){
			val fen = format.FEN(fenOptJs.get)
			val parsed = format.Forsyth.<<<@(variantOpt.get, fen)
			if(parsed.isEmpty) return js.Tuple3("", List[String]().toJSArray, List("invalid fen").toJSArray)
		}
		var g = Game(variantOpt, fenOpt)		
		var errors = Array[String]()
		ucisJs.getOrElse(js.Array[String]()).foreach(uci => {
			format.Uci.Move(uci) match {
				case Some(move) => {
					g(move) match {
						case cats.data.Validated.Valid((ng, _)) => {									
							g = ng
						}
						case cats.data.Validated.Invalid(why) => {									
							errors :+= (uci + " invalid move " + why)
						}
					}		
				}
				case None => {
					errors :+= ("ill formatted uci " + uci)
				}
			}			
		})
		
		if(errors.length > 0) return js.Tuple3("", List[String]().toJSArray, errors.toJSArray)
		
		val legalMoves = g.situation.moves
		
		var legalMovesUcis = (for((pos, moves) <- legalMoves) yield moves).flatten.map(move => move.toUci.uci).toList
		
		if(g.situation.end) legalMovesUcis = List[String]()
		
		return js.Tuple3((chess.format.Forsyth >> g).toString, legalMovesUcis.toJSArray, g.pgnMoves.toJSArray)
	}
	def main(args: Array[String]): Unit = {
		println("scalachess.js by hyperbotauthor")
	}
}
