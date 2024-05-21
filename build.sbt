val scala3Version = "3.4.1"

resolvers += ("Sonatype Nexus Repository Manager" at
  "http://192.168.50.83:8081/nexus/content/groups/public")
  .withAllowInsecureProtocol(true)

lazy val root = project
  .in(file("."))
  .enablePlugins(ScalaJSPlugin)
  .settings(
    name := "Scala ThreeJs Vite Template",
    version := "0.1.0-SNAPSHOT",
    scalaVersion := scala3Version,
    libraryDependencies ++= Seq(
      "org.scala-js" %%% "scalajs-dom" % "2.4.0",
      // Intern
      "org.tesseractrealm" %%% "scala-statsjs-facade" % "0.1.0-SNAPSHOT",
      "org.tesseractrealm" %%% "scala-threejs-facade" % "0.1.0-SNAPSHOT",
      // Test
      "org.scalameta" %% "munit" % "0.7.29" % Test
    ),
    scalaJSUseMainModuleInitializer := true,
    scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.ESModule) },
    scalacOptions ++= Seq("-deprecation", "-feature", "-unchecked"),
  )
