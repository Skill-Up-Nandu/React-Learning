import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Router } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/home'
import Contact from './pages/Contact'

const App=()=>{

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
