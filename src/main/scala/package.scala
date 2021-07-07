package object chess extends ornicar.scalalib.Common with ornicar.scalalib.OrnicarOption with ornicar.scalalib.OrnicarBoolean {

  val White = Color.White
  val Black = Color.Black

  type Direction  = Pos => Option[Pos]
  type Directions = List[Direction]

  type PieceMap = Map[Pos, Piece]

  type PositionHash = Array[Byte]

  type MoveOrDrop = Either[Move, Drop]
}
