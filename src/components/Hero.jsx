import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
    return (
        <div className="">
            {/* https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 */}
            <section className="">
                <div>
                    <div className="bg-white relative pt-5 -mb-14">
                        <div className="text-center">
                            <p
                                className="font-semibold mb-2 space-y-5"
                                style={{ fontSize: "40px", fontWeight: "" }}
                            >
                                Want to {""}
                                <span className="antialiased underline underline-offset-2 decoration-green-500">Cruise</span>
                            </p>
                            <p
                                className="text-base font-bold text-center antialiased"
                                style={{ fontSize: "45px" }}
                            >
                                #TryORS
                            </p>
                        </div>
                    </div>
                    <img src="/Car-banner-2.png" alt="" />
                </div>
            </section>
        </div>
    )
}

export default Hero