import { useState } from 'react'
import './App.css'
import Counter from './counter'

function App() {
  function HandleClick() {
    alert("Clicked!")
  }
  const Add5 = (Number) => {
    alert(Number + 5)
  }

  return (
    <>
      <section className='basic'> 
        {/* style can be applied dynamically */}
        <h1 style={{ textAlign: 'center' }}>React Core Concept</h1>
      </section>

      <section>
        <Counter></Counter>
      </section>


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
        <button onClick={() => alert("Using asrrow")}>Using arrow</button>
      </section>

    </>
  )
}

export default App
