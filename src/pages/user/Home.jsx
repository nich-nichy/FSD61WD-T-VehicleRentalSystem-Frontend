import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Explainer from '../../components/Explainer'
import Footer from '../../components/Footer'
import { useVerifyToken } from '../../utils/VerifyRole';

const Home = () => {
    useVerifyToken();
    return (
        <div className='bg-sky-700 font-opensans'>
            <Navbar />
            <Hero />
            <Explainer />
            <Footer />
        </div>
    )
}

export default Home