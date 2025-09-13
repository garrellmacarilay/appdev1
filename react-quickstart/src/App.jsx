import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Button() {
  return (
    <button>About Me</button>
  )
}

function App() {
  const myInfo = {
  name: "Garrell Macarilay",
  age: 21,
  hobbies: ["Coding", "Cycling", "Sleeping"],
  quote:"Triple D: Diligent, Determined, Dedicated"
}
  return (
    <>
    <h1 className='title'>WELCOME TO MY PORFOLIO</h1>
    <Button/>
    <div>
      <span>{`My name is ${myInfo.name}`}</span>
      <span>{`I am ${myInfo.age} years old`}</span>
      <span>{`My favorite hobby is ${myInfo.hobbies[0]}`}</span>
    </div>

    </>
  )
}

export default App
