import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentTime , setCurrentTime] = useState(new Date().toLocaleString());

  // useEffect(()=>{
  //   const interval = setInetrval(()=>{
  //     setCurrentTime(new Date().toLocaleDateString());
  //   },1000)

  //   return ()=> clearInterval(interval); // cleanup unmount
  // },[]);

  return (
      <div>
        <h1>Example of funcitonal component</h1>
        <h2>{currentTime}</h2>
      </div>
  )
}



export default App
