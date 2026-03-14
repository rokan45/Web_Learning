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
        </div>
      </section>
      <section className='DevP'>
        <div>
           <DisplayName name='Rokan' tech='React' ></DisplayName>
           <DisplayName name='Alif' tech='Node' ></DisplayName>
           <DisplayName name='Tonmoy' tech='Next.js' ></DisplayName>
        </div>
      </section>
    </>
  )
}

//component create
function DisplayName(prep){

  console.log(prep);

  const headStyle={
    font:'bold',
  }
  return(
    <div className='student'>
      <h2 style={headStyle}>Developer Name : {prep.name}</h2>
      <p style={headStyle}>Dev Tech : {prep.tech}</p>
    </div>
  )
}

export default App
