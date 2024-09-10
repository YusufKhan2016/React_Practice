import './App.css'
import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Let's Start by the name of ALLAH</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
