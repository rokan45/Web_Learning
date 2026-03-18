import { useState } from 'react'
import './App.css'

function App() {
  function HandleClick() {
    alert("Clicked!")
  }
  const Add5 = (Number) => {
    alert(Number + 5)
  }

  return (
    <>
      <section> <h1>React Core Concept</h1></section>
      <section>
        {/* //One way to handle click event */}
        <button onClick={HandleClick}>Click Here</button>

        {/* //2nd way to handle Click: Passing argument */}
        <button onClick={() => Add5(10)}>Add 5</button>

        {/* //3rd way to handle click: Not usual practice */}
        <button onClick={function ClickIt() {
          alert("Yeah click me!")
        }}>On click</button>

        {/* //4th way direct on arrow function */}
        <button onClick={()=>alert("Using asrrow")}>Using arrow</button>
      </section>

    </>
  )
}

export default App
