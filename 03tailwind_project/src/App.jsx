import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [title , setTitle] = useState("My visiting card");
  
  return (
    <>
     <h1 className='bg-blue-700 text-white p-3 rounded-xl'>Tailwind</h1>
     <Card title={title} desc={"NANDINI PURANCHAND | MCA STUDENT | ASPIRANT"} btnText = {"Visit"} />
     <Card title = {title} desc={"ANAMIKA | MSc | TRAINER"} />
    </>
  )
}

export default App
