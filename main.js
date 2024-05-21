import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <h1>Hello ScalaJS and ThreeJS</h1>
    <script>
        window.THREE = await import("node_modules/three/build/three.module.min");
        window.Stats = await import("node_modules/stats/index");
    </script>
    <script src="target/scala-3.4.1/scala-threejs-vite-template-opt/main.js"></script>
  </div>
`

setupCounter(document.querySelector('#counter'))
