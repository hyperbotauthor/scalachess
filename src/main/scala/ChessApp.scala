package chess

import scala.scalajs.js.annotation.JSExportTopLevel
import scala.scalajs.js
import js.JSConverters._

object ChessApp {
	val DEFAULT_VARIANT = variant.Standard
	@JSExportTopLevel("exportFunc")
	def exportFunc(
		variantKeyOptJs: js.UndefOr[String],
		fenOptJs: js.UndefOr[String],
		ucisJs: js.UndefOr[js.Array[String]]
	): js.Array[String] = {		
		println(variantKeyOptJs, fenOptJs, ucisJs)
		val variantKey = variantKeyOptJs.getOrElse(DEFAULT_VARIANT.key)
		val variantOpt = variant.Variant(variantKey)				
		val fenOpt : Option[chess.format.FEN] = fenOptJs.toOption match {
			case Some(fen) => Some(chess.format.FEN(fen));
			case None => None
		}
		var g = Game(variantOpt, fenOpt)		
		ucisJs.getOrElse(js.Array[String]()).foreach(uci => {
			format.Uci.Move(uci) match {
				case Some(move) => {
					g(move) match {
						case cats.data.Validated.Valid((ng, _)) => {									
							g = ng
						}
						case cats.data.Validated.Invalid(why) => {									
							println(uci + " invalid move " + why)
						}
					}		
				}
				case None => {
					println("ill formatted uci " + uci)
				}
			}			
		})
		
		g.pgnMoves.toJSArray
	}
	def main(args: Array[String]): Unit = {
		println("Hello world!")
	}
}
