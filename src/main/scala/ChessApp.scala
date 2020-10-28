package chess

//import scala.scalajs.js.annotation.JSExportTopLevel

object ChessApp {
	//@JSExportTopLevel("exportFunc")
	def exportFunc(): Unit = {
		val p = Piece(White, King)
		println(p)
	}
	def main(args: Array[String]): Unit = {
		println("Hello world!")		
		exportFunc()
	}
}
