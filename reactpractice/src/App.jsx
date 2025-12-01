import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [title ,setTitle] = useState('')
   function submitHandler(e){
    e.preventDefault()
    console.log(title+" submitted")
    setTitle('')
   }

  return (
    <form onSubmit={submitHandler} >
      <input type="text" placeholder='Username' value={title} className='design' onChange={(e)=>{
        setTitle(e.target.value)
      }}/>
      <input type="email" placeholder='Email' className='design'/>
      <button className='design'>Submit</button>
    </form>
  )
}



export default App
