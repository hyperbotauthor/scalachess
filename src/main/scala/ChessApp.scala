package chess

import scala.scalajs.js.annotation.JSExportTopLevel

object ChessApp {
	@JSExportTopLevel("exportFunc")
	def exportFunc(): Unit = {
		/*val p1 = Piece(White, King)
		val p2 = Piece(Black, King)
		val pos1 = Pos.A1
		val pos2 = Pos.E4
		val pm : PieceMap = Map(pos1 -> p1, pos2 -> p2)		
		val b = Board(pm, History(), variant.Atomic, None)
		val s = Situation(b, White)
		val g = Game(s)
		println(g)*/
		val ucis = List("e2e4", "e7e5", "g1f3", "b1c3")
		var g = Game(variant.Atomic)		
		ucis.foreach(uci => {
			val v = g(format.Uci.Move(uci).get)
			v match {
				case cats.data.Validated.Valid((ng, _)) => {									
					g = ng
				}
				case cats.data.Validated.Invalid(why) => {									
					println(uci + " invalid " + why)
				}
			}
		})
		
		println(g.pgnMoves)
	}
	def main(args: Array[String]): Unit = {
		println("Hello world!")				
		exportFunc()
	}
}
