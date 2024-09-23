import React from 'react';
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from "react-icons/fa";
import '../index.css'
import GameLikeButton from '../components/Mins/GameLikeButton';

const Pricing = () => {
    return (
        <>
            {/* <div>
                <CustomNavbar />
            </div> */}
            <div className="min-h-screen bg-sky-600 text-white flex flex-col items-center p-6 font-opensans">
                {/* Title */}
                <h1 className="text-3xl font-bold text-white mb-6 text-center">
                    We have the best Pricing for Vehicle Rentals
                </h1>
                <p className="text-lg text-white mb-12 text-center">
                    Choose the best fit for you
                </p>
                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                    {/* Classic Vehicle Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Classic Vehicles</h2>
                        <p className="text-gray-600 mb-4">Includes Sedan, SUV, Coupe, MPV, Hatchback</p>
                        <p className="text-2xl font-bold text-gray-800 mb-6">₹1500 / Day</p>
                        <div className="text-sm text-gray-500">
                            <ul className="list-disc text-left space-y-2">
                                <li>Best for family and business trips</li>
                                <li>Comfortable and spacious options</li>
                                <li>Well-maintained and regularly serviced</li>
                            </ul>
                        </div>
                    </div>

                    {/* Sports Vehicle Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Sports Vehicles</h2>
                        <p className="text-gray-600 mb-4">Premium high-performance cars</p>
                        <p className="text-2xl font-bold text-gray-800 mb-6">₹3500 / Day</p>
                        <div className="text-sm text-gray-500">
                            <ul className="list-disc text-left space-y-2">
                                <li>For those who seek thrill and speed</li>
                                <li>Top-notch performance and design</li>
                                <li>Ideal for special occasions or luxury trips</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex items-center justify-center md:flex-1 lg:w-0">
                    <GameLikeButton buttonText={"Explore"} routeTo={"vehicles"} />
                </div>
            </div>
        </>
    );
};

export default Pricing;
