import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

function App() {
  let [count , setCount] = useState(10)


  const addValue = ()=> {
    if (count <20){
        setCount(count+1);
    }
    // return
  }

  const removeValue = ()=>{
    if ( count > 0 ){
      setCount(count-1);
    }

  }
  return (
    <>
    <h1>NANDINI PURANCHAND</h1>
    <h2>Counter Project</h2>
    <h3>Counter Value: {count}</h3>
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
