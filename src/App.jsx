import React from 'react'
import Background from './components/Background'

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-800 relative">

     <Background />

     <div className='w-full h-full top-0 left-0 fixed z-[3] '>

     </div>

    </div>
  )
}

export default App
