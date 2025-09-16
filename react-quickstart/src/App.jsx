import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const myInfo = {
    name: "Garrell Macarilay",
    age: 21,
    hobbies: ["Coding", "Cycling", "Sleeping"],
    quote: "Triple D: Diligent, Determined, Dedicated"
  };

  function handleClick() {
    setIsInfoVisible(true);
  }

  let content;
  if (isInfoVisible) {
    content = (
      <div className='info'>
        <span>{`My name is ${myInfo.name}`}</span><br />
        <span>{`I am ${myInfo.age} years old`}</span><br />
        <span>{`I like ${myInfo.hobbies[0]}`}</span><br />
        <span>{`I believe in ${myInfo.quote}`}</span>
      </div>
    );
  }

  return (
    <>
      <h1 className='title'>WELCOME TO MY PORTFOLIO</h1>
      <button onClick={handleClick}>About Me</button>
      {content}
    </>
  );
}

export default App;