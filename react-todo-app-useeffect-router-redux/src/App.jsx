import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Todos from "./pages/Todos.jsx"

import './App.css'

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/todos" element={<Todos/>}/>
        </Routes>
     </BrowserRouter>
        
    </>
  )
}

export default App
