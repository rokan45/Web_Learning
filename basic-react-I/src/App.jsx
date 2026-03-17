import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ToDo from './todo';
import Book from './book';

//main launch pad
function App() {

  const bookInfo = [{
    id: 1,
    name: 'Psychology of Money',
    genere: 'Self Improve',
  },
  {
    id: 2,
    name: 'Book Of Love',
    genere: 'Romance',
  }, {
    id: 3,
    name: 'Gost of the House',
    genere: 'Adventure',
  }]

  return (
    <>
      <section id="center">

        <section>
          <h1>React Core Concept</h1>
          {
            bookInfo.map(book =><Book key={book.id} book={book}></Book>)
          }
        </section>


        {/* <div>
          <h1>React Core Concept</h1>
          <ToDo task="Finish Module" isDone={true} time="50min"></ToDo>
          <ToDo task="Revise JS" isDone={false}></ToDo>
          <ToDo task="Project" isDone={true}></ToDo>
        </div> */}
      </section>
      {/* <section className='DevP'>
        <div>
           <DisplayName name='Rokan' tech='React' ></DisplayName>
           <DisplayName name='Alif' tech='Node' ></DisplayName>
           <DisplayName name='Tonmoy' tech='Next.js' ></DisplayName>
        </div>
      </section> */}
    </>
  )
}

//component create
function DisplayName(prep) {


  console.log(prep);

  const headStyle = {
    font: 'bold',
  }
  return (
    <div className='student'>
      <h2 style={headStyle}>Developer Name : {prep.name}</h2>
      <p style={headStyle}>Dev Tech : {prep.tech}</p>
    </div>
  )
}

export default App
