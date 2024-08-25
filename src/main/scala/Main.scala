import ThreeMeshUI.{BlockArgs, TextArgs}
import org.tesseractrealm.threejsfacade.three.*
import org.tesseractrealm.threejsfacade.three.light.*

import scala.scalajs.js
import scala.scalajs.js.annotation.{JSExportTopLevel, JSImport}
import org.scalajs.dom
import org.scalajs.dom.raw.{HTMLDivElement, Node}
import org.scalajs.dom.{CanvasRenderingContext2D, Event, KeyboardEvent, document, window}
import org.tesseractrealm.threejsfacade.three.math.Vector2
//import org.tesseractrealm.dexiejsfacade.Dexie
import org.tesseractrealm.threejsfacade.three.cameras.PerspectiveCamera
import org.tesseractrealm.threejsfacade.three.core.Object3D
import org.tesseractrealm.threejsfacade.three.scenes.{FogExp2, Scene}
import org.tesseractrealm.threejsfacade.three.examples.jsm.controls.OrbitControls
import org.tesseractrealm.threejsfacade.three.examples.jsm.renderers.{CSS2DObject, CSS2DRenderer}
import org.tesseractrealm.threejsfacade.three.geometries.{ConeGeometry, PlaneGeometry}
import org.tesseractrealm.threejsfacade.three.loaders.Cache
import org.tesseractrealm.threejsfacade.three.materials.MeshStandardMaterial
import org.tesseractrealm.threejsfacade.three.math.{Color, Vector3}
import org.tesseractrealm.threejsfacade.three.objects.Mesh

import scala.scalajs.js.{Dictionary, JSON}
import scala.scalajs.js.Math.atan2
import scala.scalajs.js
import scala.scalajs.js.annotation.*

//@js.native
//@JSImport("dexie", JSImport.Default)
//class Dexie(name: String) extends js.Object:
//  def version(versionNumber: Int): Version = js.native
//  def open(): js.Promise[Unit]             = js.native
//  def close(): Unit                        = js.native
//  def table(tableName: String): Table      = js.native
//
//@js.native
//trait Version extends js.Object:
//  def stores(schema: js.Dictionary[String]): Unit = js.native
//
//@js.native
//trait Table extends js.Object:
//  def add(item: js.Any): js.Promise[Double]                                         = js.native
//  def get(key: js.Any): js.Promise[js.Dynamic]                                      = js.native
//  def put(item: js.Any, key: js.UndefOr[js.Any] = js.undefined): js.Promise[Double] = js.native
//  def delete(key: js.Any): js.Promise[Unit]                                         = js.native
//  def clear(): js.Promise[Unit]                                                     = js.native
//
//@js.native
//@JSGlobalScope
//object DexieGlobals extends js.Object:
//  def dexieSampleUsage(): Unit = js.native

@js.native
trait Block extends js.Object {

  // Properties
  var isBlock: Boolean = js.native
  var size: Vector2 = js.native
//  var frame: Frame = js.native

  // Methods
  def parseParams(): Unit = js.native
  def updateLayout(): Unit = js.native
  def updateInner(): Unit = js.native

}

@js.native
@JSGlobal("Block")
class BlockImplementation(options: js.Any) extends Block

@js.native
@JSImport("three-mesh-ui", JSImport.Namespace)
object ThreeMeshUI extends js.Object:
  trait BlockArgs extends Object3D:
    var width: Double
    var height: Double
    var padding: Double
    var fontFamily: String
    var fontTexture: String

  trait TextArgs extends Object3D:
    var content: String

  @js.native
  trait Block extends Object3D:
    def add(text: Text): Unit = js.native

  @js.native
  trait Text extends Object3D

  def Block(args: BlockArgs): Block = js.native

  def Text(args: TextArgs): Text = js.native

  def update(): Unit = js.native

object JsUtils:
  def jsObjectToString(obj: js.Object): String =
    JSON.stringify(obj)

object Main:
  def main(args: Array[String]): Unit =
    Cache.enabled = true
//    val dexie = new Dexie("friends")

    val scene = new Scene()
    scene.background = new Color(0xcccccc)
    scene.fog = new FogExp2(0xcccccc, 0.002)

    // Test cache
    val result     = Cache.get("test")
    val jsonString = JsUtils.jsObjectToString(result)
    println(s"JSON String: $jsonString")

    val exampleObject: js.Object = new js.Object:
      val name  = "example"
      val value = 42
    Cache.add("test", exampleObject)

//    dexie
//      .version(1)
//      .stores(
//        Dictionary(
//          "friends" -> "++id, name, age"
//        )
//      )

    import scala.concurrent.ExecutionContext.Implicits.global
//    dexie.open().toFuture.onComplete {
//      case scala.util.Success(_) =>
//        println("Database opened successfully")
//
//        // Add an item to the 'friends' table
//        val friendsTable = dexie.table("friends")
//        val friend = new js.Object:
//          val id   = 1
//          val name = "John"
//          val age  = 30
//
//        friendsTable.add(friend).toFuture.onComplete {
//          case scala.util.Success(_) => println("Friend added successfully")
//          case scala.util.Failure(e) => println(s"Failed to add friend: ${e.getMessage}")
//        }
//
//        // Get an item from the 'friends' table
//        friendsTable.get(1).toFuture.onComplete {
//          case scala.util.Success(item) =>
//            println(s"Retrieved item: ${JSON.stringify(item)}")
//          case scala.util.Failure(e) =>
//            println(s"Failed to retrieve item: ${e.getMessage}")
//        }
//
//      case scala.util.Failure(e) =>
//        println(s"Failed to open database: ${e.getMessage}")
//    }

//    val camera = new OrthographicCamera(
//      window.innerWidth / -2,
//      window.innerWidth / 2,
//      window.innerHeight / 2,
//      window.innerHeight / 2,
//      1,
//      1000
//    )

    val camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.x = 400
    camera.position.y = 200

    val renderer = new Three.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)

//    val geometry = new Three.BoxGeometry(1, 1, 1)
//    val material =
//      new Three.MeshBasicMaterial(js.Dynamic.literal(color = 0x00ff00))
//    val cube = new Three.Mesh(geometry, material)
//    scene.add(cube)

    val geometry = new ConeGeometry(10, 30, 4, 1);
    val material = new MeshStandardMaterial(js.Dynamic.literal(color = 0xffffff));

    (0 until 500).foreach { i =>
      val mesh = new Mesh(geometry, material)
      mesh.position.x = Math.random() * 1600 - 800
      mesh.position.y = 0
      mesh.position.z = Math.random() * 1600 - 800
      mesh.updateMatrix()
      mesh.matrixAutoUpdate = false
      scene.add(mesh)
    }

    val characterPlane = new PlaneGeometry(10.0, 10.0)
    val characterMesh  = new Mesh(characterPlane, material)
    scene.add(characterMesh)

    val dirLight1 = new DirectionalLight(0xffffff, 3);
    dirLight1.position.set(1, 1, 1);
    scene.add(dirLight1)

    val dirLight2 = new DirectionalLight(0x002288, 3);
    dirLight2.position.set(-1, -1, -1);
    scene.add(dirLight2)

    val ambientLight = new AmbientLight(0x555555, 1.0);
    scene.add(ambientLight)

    dom.document.body
      .appendChild(renderer.domElement.asInstanceOf[dom.Node])

    // Text rendering
    val textDiv = dom.document.createElement("div").asInstanceOf[HTMLDivElement]
    textDiv.className = "label"
    textDiv.textContent = "My Text test"
    textDiv.style.backgroundColor = "transparent"

    val textLabel = new CSS2DObject(textDiv.asInstanceOf[js.Dynamic])
    textLabel.position.set(0, 0, 0)
    textLabel.center.set(0, 1)
    characterMesh.add(textLabel)
//    textLabel.layers.set(0)

    val textRenderer = new CSS2DRenderer()
    textRenderer.setSize(window.innerWidth.toInt, window.innerHeight.toInt)
    val style = textRenderer.domElement.selectDynamic("style")
    style.updateDynamic("position")("absolute")
    style.updateDynamic("top")("0px")
    document.body.appendChild(textRenderer.domElement.asInstanceOf[dom.Node])

    // Plugin ???
//    val container = ThreeMeshUI.Block(new BlockArgs:
//      val width: Double       = 1.2
//      val height: Double      = 0.7
//      val padding: Double     = 0.2
//      val fontFamily: String  = "./assets/Roboto-msdf.json"
//      val fontTexture: String = "./assets/Roboto-msdf.png"
//    )
//
//    val text = ThreeMeshUI.Text(
//      new TextArgs:
//        val content: String = "Some text to be displayed"
//    )
//
//    container.add(text)
//    scene.add(container)

    val controls = new OrbitControls(camera, textRenderer.domElement)
    //    controls.listenToKeyEvents(window)
    controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05
    controls.screenSpacePanning = false
    controls.minDistance = 100
    controls.maxDistance = 500
    controls.maxPolarAngle = Math.PI / 2

    def onKeyDown[T <: Event](event: T): Unit =
      event match
        case ke: KeyboardEvent =>
          ke.key match
            case "w"    => camera.position.x += 0.1
            case "s"    => camera.position.x -= 0.1
            case "a"    => camera.position.y += 0.1
            case "d"    => camera.position.y -= 0.1
            case "z"    => camera.position.z += 0.1
            case "x"    => camera.position.z -= 0.1
            case "q"    => camera.rotation.x += 0.1
            case "e"    => camera.rotation.x -= 0.1
            case "r"    => camera.rotation.y += 0.1
            case "f"    => camera.rotation.y -= 0.1
            case "c"    => camera.rotation.z += 0.1
            case "v"    => camera.rotation.z -= 0.1
            case anyKey => println(s"Undefined key [$anyKey]")
        case _ => println("Event: [" + event.toString + "]")

    dom.document.addEventListener("keydown", onKeyDown, false)

    def animate(): Unit =
      dom.window.requestAnimationFrame((_: Double) => animate())
      val cameraPos = new Vector3(camera.position.x, 0, camera.position.z)
      val planePos  = new Vector3(characterMesh.position.x, 0, characterMesh.position.z)
      val angle     = atan2(cameraPos.x - planePos.x, cameraPos.z - planePos.z)
      characterMesh.rotation.set(0, angle, 0)
      controls.update()
      renderer.render(scene, camera)
      textRenderer.render(scene, camera)

    animate()
