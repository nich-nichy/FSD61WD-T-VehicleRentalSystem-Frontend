import React from 'react'
import '../styles/Explainer.css'

const Explainer = () => {
    return (
        <>
            <div className='text-center p-1 text-white text-balance font-opensans hero'>
                <h2 className='text-5xl font-bold pb-1 font-montserrat'>Your Ride, Your Rules!</h2>
                <p className='text-2xl'>Find the Perfect Vehicle for Every Journey – From Cars to Trucks, We’ve Got You Covered</p>
            </div>
            {/* <div className="bg-white">
                <div className="text-gray-600 body-font">
                    <div className="container px-5 py-5 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">How ORS works ?</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed eum itaque omnis aspernatur impedit, fugit blanditiis voluptas dolores sunt iste dicta nisi eligendi sint quis commodi esse quia ipsum natus?</p>
                        </div>
                        <div className="flex flex-wrap -m-4 text-center">
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <img src="/choice.svg" alt="" />
                                    <h2 className="title-font font-medium text-2xl text-gray-900">Choose ORD</h2>
                                    <p className="leading-relaxed">Hope you are here</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <img src="/order.svg" alt="" />

                                    <h2 className="title-font font-medium text-2xl text-gray-900">Pick a Vehicle</h2>
                                    <p className="leading-relaxed">Choice is yours</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <img src="/booking.svg" alt="" />
                                    <h2 className="title-font font-medium text-2xl text-gray-900">Pre Book the vehicle</h2>
                                    <p className="leading-relaxed">No payment required check availability</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <img src="/adventure.svg" alt="" />

                                    <h2 className="title-font font-medium text-2xl text-gray-900">Here we go</h2>
                                    <p className="leading-relaxed">Once after payment take the vehicle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div>
                <div className="flex flex-col text-center w-full bg-white">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">How ORS works ?</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed eum itaque omnis aspernatur impedit, fugit blanditiis voluptas dolores sunt iste dicta nisi eligendi sint quis commodi esse quia ipsum natus?</p>
                    <div className="text-gray-600 body-font ">
                        <div className="container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-sky-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                    <div className="flex-shrink-0 w-60 h-60 bg-white text-sky-500 rounded-full inline-flex items-center justify-center">
                                        <img src="/choice.svg" alt="" />
                                    </div>

                                    <div className="flex-grow ml-20 sm:pl-6 mt-6 sm:mt-0">
                                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl text-start">Choose us, Choose <span className="underline">ORD</span></h2>
                                        <p className="leading-relaxed text-start">Hope you are here. We assume you choose</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-sky-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                    <div className="flex-shrink-0 w-60 h-60 bg-white text-sky-500 rounded-full inline-flex items-center justify-center">
                                        <img src="/order.svg" alt="" />

                                    </div>


                                    <div className="flex-grow ml-20 sm:pl-6 mt-6 sm:mt-0">
                                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl text-start">Pick a vehicle</h2>
                                        <p className="leading-relaxed text-start">Endless Possibilities. One Click Away.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex relative pb-10 w-72 sm:items-center md:w-2/3 mx-auto">
                                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-sky-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                    <div className="flex-shrink-0 w-60 h-60 bg-white text-sky-500 rounded-full inline-flex items-center justify-center">
                                        <img src="/booking.svg" alt="" />
                                    </div>


                                    <div className="flex-grow ml-20 sm:pl-6 mt-6 sm:mt-0">
                                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl text-start">Pre Book the vehicle</h2>
                                        <p className="leading-relaxed text-start">Book Your Dream Car. No Credit Card Needed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex relative pb-10 w-72 sm:items-center md:w-2/3 mx-auto">
                                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-sky-500 text-white relative z-10 title-font font-medium text-sm">4</div>
                                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                    <div className="flex-shrink-0 w-60 h-60 bg-white text-sky-500 rounded-full inline-flex items-center justify-center">
                                        <img src="/adventure.svg" alt="" />
                                    </div>


                                    <div className="flex-grow ml-20 sm:pl-6 mt-6 sm:mt-0">
                                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl text-start">Here we go</h2>
                                        <p className="leading-relaxed text-start"> Get Ready to Explore, Once after payment completetion booking process</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div className="w-full sm:p-4 px-4 mb-6">
                            <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                            <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                            <p className="leading-relaxed">Users</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                            <p className="leading-relaxed">Subscribes</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                            <p className="leading-relaxed">Downloads</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                            <p className="leading-relaxed">Products</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explainer