import { Suspense, useState } from 'react'
import './App.css'
import Counter from './counter'
import ScoreCount from './scoreCard'
import User from './user'

const fetchUser=async()=>{
    const user=await fetch('https://jsonplaceholder.typicode.com/users');
    return user.json();
  }

function App() {
  function HandleClick() {
    alert("Clicked!")
  }
  const Add5 = (Number) => {
    alert(Number + 5)
  }

  const userData=fetchUser();

  return (
    <>
      <section className='basic'>
        {/* style can be applied dynamically */}
        <h1 style={{ textAlign: 'center' }}>React Core Concept</h1>
      </section>
      
      <Suspense fallback={<h3>Loading...</h3>}>
         <User userData={userData}></User>
      </Suspense>

      <section className='basic'>
        <Counter></Counter>
      </section>

      <section className='basic'>
        <ScoreCount></ScoreCount>
      </section>

      <section className='basic'>
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
