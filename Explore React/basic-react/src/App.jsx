import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

//main launch pad
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <DisplayName></DisplayName>

        </div>
      </section>
    </>
  )
}

//component create
function DisplayName(){
  return(
    <div>
      <h2>Developer Name:</h2>
      <p>Dev Tech</p>
    </div>
  )
}

export default App
