import React, { useState } from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaTruck } from "react-icons/fa"
import { GiHeavyLightning } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { FaLock } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../index.css'


const GetStarted = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <div className="font-opensans">
            <div>
                <div className="max-w-full mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Logo to="#">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className=""
                                    src="/ORS-Logo.png"
                                    alt=""
                                    width={110}
                                    height={180}
                                />
                            </Logo>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            <a
                                href="#"
                                className="text-base font-medium text-sky-950 hover:text-sky-700"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-base font-medium text-sky-950 hover:text-sky-700"
                            >
                                Pricing
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex bg-gray-100">

                {/* Filters Section */}
                <div className="w-1/4 bg-white shadow-lg rounded-lg p-6 space-y-8">
                    <div>
                        <input
                            type="text"
                            placeholder="Search car"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* Rental Type */}
                    <div>
                        <p className="font-semibold mb-2">Rental Type</p>
                        <div className="flex space-x-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Day</button>
                            <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">Month</button>
                        </div>
                    </div>

                    {/* Vehicle Type */}
                    <div>
                        <p className="font-semibold mb-2">Vehicle Type</p>
                        <div className="flex space-x-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Car</button>
                            <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">Truck</button>
                        </div>
                    </div>

                    {/* Car Type (If car is selected) */}
                    <div>
                        <p className="font-semibold mb-2">Car Type</p>
                        <div className="space-y-2">
                            {["Sport", "Sedan", "SUV", "Coupe", "MPV", "Hatchback"].map((type) => (
                                <div key={type} className="flex items-center">
                                    <input type="radio" name="carType" id={type} className="mr-2" />
                                    <label htmlFor={type}>{type}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Capacity (If truck is selected) */}
                    <div>
                        <p className="font-semibold mb-2">Capacity</p>
                        {["2 Person", "4 Person", "6 Person", "8 Person or More"].map((capacity) => (
                            <div key={capacity} className="flex items-center space-x-2">
                                <input type="checkbox" id={capacity} className="mr-2" />
                                <label htmlFor={capacity}>{capacity}</label>
                                <span className="text-sm text-gray-500">{"Current vehicles"}</span>
                            </div>
                        ))}
                    </div>

                    {/* Car Brand */}
                    <div>
                        <p className="font-semibold mb-2">Car Brand</p>
                        <select
                            value={selectedValue}
                            onChange={handleChange}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg"
                        >
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </select>
                    </div>
                </div>

                {/* Car Cards Section */}
                <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {Array(6).fill().map((_, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-800">Konigsegg</h2>
                            <p className="text-blue-500 mb-2">Sport</p>
                            <img src="" alt="Car" className="w-full h-40 bg-gray-200 rounded-lg mb-4" />
                            <p className="text-lg font-semibold mb-4">$1500</p>
                            <div className="flex justify-between text-gray-600 mb-4">
                                <p>90L</p>
                                <p>Manual</p>
                                <p>2 People</p>
                            </div>
                            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                                Rent now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
