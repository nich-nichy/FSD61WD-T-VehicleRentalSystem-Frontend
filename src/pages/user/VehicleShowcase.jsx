import React, { useState } from 'react'
import '../../index.css'
import CustomNavbar from '../../components/CustomNavbar';


const GetStarted = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [modelState, setModelState] = useState(false);
    const [showPromo, setShowPromo] = useState(true);
    const [vehicleModel, setVehicleModel] = useState(false);

    // Function to handle close button click
    const handleClose = () => {
        setShowPromo(false);
    };

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const handleModel = (flag) => {
        setModelState(flag);
    }

    const handleBookingForm = (data) => {

    }

    const setShowVehicleModel = () => {
        setVehicleModel(true);
    }

    const handleSearch = () => {
        e.preventDefault();
        // Handle search logic here
        console.log("Searching for:", searchTerm);
    }
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="font-opensans">
            <div>
                <CustomNavbar />
            </div>
            <div className="min-h-screen flex bg-gray-100">

                {/* Filters Section */}
                <div className="w-1/4 bg-white shadow-lg rounded-lg p-6 space-y-8">
                    <div>
                        <form onSubmit={handleSearch} className="max-w-md mx-auto">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-white-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 19l-4-4m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50"
                                    placeholder="Search for a Car"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <svg className="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 19l-4-4m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
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
                <div className="w-full m-3 mb-0">
                    {/* Show Promo div only if showPromo is true */}
                    {showPromo && (
                        <div className='relative mb-6 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row w-full'>
                            {/* Close Button */}
                            <button
                                className="absolute top-3 right-3 border hover:border-black text-white bg-gray-600 hover:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center"
                                onClick={handleClose}
                            >
                                &times;
                            </button>
                            <div className="flex-1">
                                <img src="/PromoCar.png" alt="Car Promo" className="w-full h-60 rounded-l-xl object-cover" />
                            </div>
                            <div className="flex-1 p-6 rounded-r-lg bg-gradient-to-r from-violet-500 to-purple-700 text-white">
                                <h2 className="text-5xl font-extrabold mb-4">Find Your Perfect Ride!</h2>
                                <p className="text-lg mb-6">
                                    Discover the best deals for your next adventure. Select a car today and enjoy unbeatable offers! <br /> Let's <span className="bg-yellow-500 text-white px-1 font-bold transition" style={{ paddingTop: '2px', paddingBottom: '2px' }}>#ChooseACar</span> now!
                                </p>

                                <div className="mt-6">
                                    <p className="italic text-gray-200 mt-2">"Best car rental service! Highly recommend."</p>
                                    <span className="block text-right text-gray-200">- by Anonymous Amaran</span>
                                </div>

                                <div className="flex items-center space-x-3 mt-2">
                                    <div className="flex">
                                        <img className="w-6" src="https://cdn.iconscout.com/icon/free/png-256/like-2387659-1991059.png" />
                                        <img className="w-6" src="https://cdn.iconscout.com/icon/free/png-256/love-2387666-1991064.png" />
                                        <img className="w-6 bg-yellow-300 rounded-full" src="/Rocket.png" />
                                    </div>
                                    <span className="text-base">See All comments</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Car Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 px-1 pt-0 mx-auto">
                        {/* Car div */}
                        {Array(12).fill().map((_, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                                <h2 className="text-2xl font-bold text-gray-800">Konigsegg</h2>
                                <p className="text-sky-500 mb-2">Sport</p>
                                <img src="" alt="Car" className="w-full h-40 bg-gray-200 mb-4" />
                                <p className="text-lg font-semibold mb-4">$1500 / day</p>
                                <div className="flex justify-between text-gray-600 mb-4">
                                    <p>90L</p>
                                    <p>Manual</p>
                                    <p>2 People</p>
                                </div>
                                <button className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={() => setShowVehicleModel()}>
                                    Rent now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
