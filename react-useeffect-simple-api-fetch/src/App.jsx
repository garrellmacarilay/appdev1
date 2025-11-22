import { useState } from 'react'
import UserFetch from './UserFetch'
import PostsFetchAsync from './PostsFetchAsync'
import TodosFetchAxios from './TodosFetchAxios'
import './App.css'

function App() {
  

  return (
    <>
      <UserFetch />
      <PostsFetchAsync />
      <TodosFetchAxios />
    </>
  )
}

export default App
