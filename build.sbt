val scala3Version = "3.4.1"

credentials += Credentials(Path.userHome / ".sbt" / ".credentials")

resolvers += Resolver.file("local", file(Path.userHome.absolutePath + "/.ivy2/local"))(Resolver.ivyStylePatterns)

lazy val root = project
  .in(file("."))
  .enablePlugins(ScalaJSPlugin)
  .settings(
    name         := "Scala ThreeJs Template",
    version      := "0.1.0-SNAPSHOT",
    scalaVersion := scala3Version,
    libraryDependencies ++= Seq(
      "org.scala-js" %%% "scalajs-dom" % "2.4.0",
      // Intern
      "scala-threejs-facade" %%% "scala-threejs-facade" % "r165-s7",
//      "org.tesseractrealm" %%% "scala-dexiejs-facade" % "v4.0.7-s6",
      // Test
      "org.scalameta" %% "munit" % "0.7.29" % Test
    ),
    scalaJSUseMainModuleInitializer := true,
    scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.ESModule) },
    scalacOptions ++= Seq("-deprecation", "-feature", "-unchecked")
  )
