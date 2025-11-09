import './App.css'

function App() 
  return (
    // HTML Declaration
      //  <h1>Hedy Lamarr's Todos</h1>
      //   <img 
      //     src="https://i.imgur.com/yXOvdOSs.jpg" 
      //     alt="Hedy Lamarr" 
      //     class="photo"
      //   >
      //   <ul>
      //       <li>Invent new traffic lights
      //       <li>Rehearse a movie scene
      //       <li>Improve the spectrum technology
      //   </ul>
    // Use React Fragment to wrap multiple elements
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        // Use camelCase for class attribute
        className="photo"
        // Use Closed Tag
      />
      <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
      </ul>

    </>

  )
}

export default App
