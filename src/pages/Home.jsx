import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Explainer from '../components/Explainer'

const Home = () => {
    return (
        <div className='bg-sky-700'>
            <Navbar />
            <Hero />
            <Explainer />
        </div>
    )
}

export default Home