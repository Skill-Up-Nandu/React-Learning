import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Button from './components/btn'

function App(btnText) {
  const [color, setColor] = useState('yellow');

  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex  flex-wrap gap-2 shadow-xl bg-white px-2 py-2 rounded-3xl' >
          <button onClick={()=> setColor('red')}  className='outline-none px-5 rounded-2xl text-white shadow-lg' style={{ backgroundColor: 'red' }}> Red</button>
          <button onClick={()=> setColor('green')} className='outline-none px-5 rounded-2xl text-white shadow-lg' style={{ backgroundColor: 'green' }}> Green</button>
          <button onClick={()=> setColor('blue')} className='outline-none px-5 rounded-2xl text-white shadow-lg' style={{ backgroundColor: 'blue' }}> Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
