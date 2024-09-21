import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <p className='text-2xl text-gray-500'>Hello World</p>
      </div>
    </>
  )
}

export default App
