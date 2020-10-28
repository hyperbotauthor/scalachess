package chess

import scala.scalajs.js.annotation.JSExportTopLevel

object ChessApp {
	@JSExportTopLevel("exportFunc")
	def exportFunc(variantKey: scala.scalajs.js.UndefOr[String], ucisJs: scala.scalajs.js.Array[String]): Unit = {
		/*val p1 = Piece(White, King)
		val p2 = Piece(Black, King)
		val pos1 = Pos.A1
		val pos2 = Pos.E4
		val pm : PieceMap = Map(pos1 -> p1, pos2 -> p2)		
		val b = Board(pm, History(), variant.Atomic, None)
		val s = Situation(b, White)
		val g = Game(s)
		println(g)*/
		//val ucis = ucisJs.toList
		var g = Game(variant.Variant(variantKey.get).get)		
		ucisJs.foreach(uci => {
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
		
		println(g.pgnMoves)
	}
	def main(args: Array[String]): Unit = {
		println("Hello world!")
	}
}
