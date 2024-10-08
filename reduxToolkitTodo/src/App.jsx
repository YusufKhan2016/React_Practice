import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <div>
        <h1>Learn About REDUX TOOLKIT</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
