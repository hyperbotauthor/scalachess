enablePlugins(ScalaJSPlugin)

name := "scalachess"

organization := "org.lichess"

version := "10.2.5"

scalaVersion := "2.13.6"

libraryDependencies ++= List(
  "org.scala-lang.modules" %%% "scala-parser-combinators" % "1.1.2",
  "org.specs2"             %%% "specs2-core"              % "4.10.0" % Test,
  "org.specs2"             %%% "specs2-cats"              % "4.10.0" % Test,    
  "org.typelevel"          %%% "cats-core"                % "2.2.0"
)

resolvers ++= Seq(
  "lila-maven" at "https://raw.githubusercontent.com/ornicar/lila-maven/master"
)

scalacOptions ++= Seq(
  "-encoding",
  "utf-8",
  "-explaintypes",
  "-feature",
  "-language:higherKinds",
  "-language:implicitConversions",
  "-language:postfixOps",
  "-Ymacro-annotations",
  // Warnings as errors!
  // "-Xfatal-warnings",
  // Linting options
  "-unchecked",
  "-Xcheckinit",
  "-Xlint:adapted-args",
  "-Xlint:constant",
  "-Xlint:delayedinit-select",
  "-Xlint:deprecation",
  "-Xlint:inaccessible",
  "-Xlint:infer-any",
  "-Xlint:missing-interpolator",
  "-Xlint:nullary-unit",
  "-Xlint:option-implicit",
  "-Xlint:package-object-classes",
  "-Xlint:poly-implicit-overload",
  "-Xlint:private-shadow",
  "-Xlint:stars-align",
  "-Xlint:type-parameter-shadow",
  "-Wdead-code",
  "-Wextra-implicit",
  // "-Wnumeric-widen",
  "-Wunused:imports",
  "-Wunused:locals",
  "-Wunused:patvars",
  "-Wunused:privates",
  "-Wunused:implicits",
  "-Wunused:params",
  "-Wvalue-discard",
  "-Xmaxerrs",
  "12"
)

publishTo := Option(Resolver.file("file", new File(sys.props.getOrElse("publishTo", ""))))

scalaJSUseMainModuleInitializer := true