package chess

import scala.scalajs.js.annotation.JSExportTopLevel

object ChessApp {
	@JSExportTopLevel("exportFunc")
	def exportFunc(): Unit = {
		println("exportFunc!")
	}
	def main(args: Array[String]): Unit = {
		println("Hello world!")		
	}
}
