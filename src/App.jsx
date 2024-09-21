import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <p className='text-2xl text-gray-500'>Hello World</p>
      </div>
    </>
  )
}

export default App
