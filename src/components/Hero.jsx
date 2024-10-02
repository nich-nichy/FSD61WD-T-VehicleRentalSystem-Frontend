import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
    return (
        <div className="">
            <section className="">
                <div>
                    <div className="bg-white relative pt-5 -mb-20 hero-wrapper">
                        <div className="text-center poppins-regular ">
                            <p
                                className="font-semibold hero-rep"
                            >
                                Want to {""}
                                <span className="antialiased text-red-300">Cruise</span>{" "}on{" "}
                                <span className="antialiased text-green-300">Breeze</span>
                            </p>
                            <p
                                className="font-bold text-center antialiased underline underline-offset-3 decoration-sky-300 font-merienda mb-0 hero-tag"
                            >
                                #TryORS
                            </p>
                        </div>
                    </div>
                    <img src="/Car-banner-2.png" alt="" className="prevent-image h-30" />
                </div>
            </section>
        </div>
    )
}

export default Hero