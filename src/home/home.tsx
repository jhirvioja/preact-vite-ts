import preactLogo from './../assets/preact.svg'
import viteLogo from '/vite.svg'
import pureCssLogo from '/purecss.svg'
import typeScriptLogo from '/typescript.svg'
import './home.css'
import { Counter } from '../components/counter'

export function Home() {
  return (
    <>
      <div class="container">
        <h1>Vite + Preact + TS + Pure CSS</h1>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} class="logo" alt="Vite logo" />
          </a>
          <a href="https://preactjs.com" target="_blank">
            <img src={preactLogo} class="logo preact" alt="Preact logo" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <img src={typeScriptLogo} class="logo" alt="TypeScript logo" />
          </a>
          <a href="https://purecss.io/" target="_blank">
            <img src={pureCssLogo} class="logo" alt="Pure CSS logo" />
          </a>
        </div>
      </div>
      <div class="container">
        <Counter />
      </div>
    </>
  )
}
