import org.tesseractrealm.threejsfacade.*

import scala.scalajs.js
import scala.scalajs.js.annotation.{JSExportTopLevel, JSImport}
import org.scalajs.dom
import org.scalajs.dom.{document, window}

object Main {
//  @JSExportTopLevel("main")
  def main(args: Array[String]): Unit = {
    val scene = new Three.Scene()

    val camera = new Three.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    val renderer = new Three.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)

    val geometry = new Three.BoxGeometry(1, 1, 1)
    val material =
      new Three.MeshBasicMaterial(js.Dynamic.literal(color = 0x00ff00))
    val cube = new Three.Mesh(geometry, material)
    scene.add(cube)
    camera.position.z = 5

    val stats = new Stats()
    stats.showPanel(0)

    dom.document.body
      .appendChild(renderer.domElement.asInstanceOf[dom.raw.Node])
    dom.document.body
      .appendChild(stats.dom.asInstanceOf[org.scalajs.dom.raw.Node])

    def animate(): Unit = {
      dom.window.requestAnimationFrame((_: Double) => animate())

      stats.begin()
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      stats.end()

      renderer.render(scene, camera)
    }

    animate()
  }
}
