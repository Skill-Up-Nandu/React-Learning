import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Navbar2 from './components/Navbar2'
import DynamicPage from './pages/DynamicPage'

const App=()=>{

  return (
    <>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/about/:aboutId' element={<DynamicPage />} />
      </Routes>
    </>
  )
}

export default App
