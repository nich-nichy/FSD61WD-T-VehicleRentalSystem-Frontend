import React, { useState } from 'react'
import '../index.css'
import CustomNavbar from '../components/CustomNavbar';


const GetStarted = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [modelState, setModelState] = useState(false);

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const handleModel = (flag) => {
        setModelState(flag);
    }

    const handleBookingForm = (data) => {

    }

    return (
        <div className="font-opensans">
            <div>
                <CustomNavbar />
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
                            {/* FIXME: Pass id as well */}
                            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={() => handleModel(true)}>
                                Rent now
                            </button>
                        </div>
                    ))}
                </div>
                <article class="mb-4 break-inside rounded-xl bg-white flex flex-col bg-clip-border">
                    <div class="flex p-6 items-center justify-between">
                        <div class="flex">
                            <img src="" alt="Car" className="w-full h-40 bg-gray-200" />
                        </div>
                    </div>
                    <div class="p-6 bg-violet-500">
                        <h2 class="text-3xl font-extrabold text-white">
                            Web Design templates Selection
                        </h2>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-center">
                            <a class="inline-flex items-center" href="#">
                                <span class="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                                    <img class="w-6" src="https://cdn.iconscout.com/icon/free/png-256/like-2387659-1991059.png" />
                                </span>
                                <span class="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                                    <img class="w-6" src="https://cdn.iconscout.com/icon/free/png-256/love-2387666-1991064.png" />
                                </span>
                                <span class="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                                    <img class="w-6 bg-yellow-300 rounded-full" src="/Rocket.png" />
                                </span>
                                <span class="text-lg font-bold ml-3">237</span>
                            </a>
                            <a class="ml-auto" href="#">1 Comments</a>
                        </div>
                        <div class="mt-6 mb-6 h-px bg-slate-200"></div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default GetStarted;
