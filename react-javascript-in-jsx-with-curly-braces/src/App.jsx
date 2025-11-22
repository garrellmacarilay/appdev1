import { useState } from 'react'
import './App.css'

function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';

  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}

function App() {

  return (
    <>
      <Avatar />
    </>
  )
}

export default App
