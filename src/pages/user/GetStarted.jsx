import React, { useState } from 'react';
import DateRangeSelector from '../../components/DateRangeSelector';
import '../../styles/GetStarted.css'

const GetStarted = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [showModal, setShowModal] = useState(false); // Modal state
    const [dateRange, setDateRange] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);

    const states = ['California', 'Texas', 'Florida'];
    const cities = {
        California: ['Los Angeles', 'San Francisco', 'San Diego'],
        Texas: ['Houston', 'Dallas', 'Austin'],
        Florida: ['Miami', 'Orlando', 'Tampa']
    };

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity('');
    };

    const handleModalToggle = () => {
        setShowModal(!showModal);
    };

    const handleFormSubmit = () => {
        setShowModal(false);
        console.log('Date range selected:', dateRange);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-sky-700 font-opensans">
            <div className="shadow-lg rounded-lg overflow-hidden flex flex-col p-8 bg-white w-full max-w-lg">
                <h2 className="text-xl font-bold text-center mb-6">Book Your Rental Car</h2>

                {/* State Dropdown */}
                <div className="mb-4">
                    <label htmlFor="state" className="font-semibold mb-2 block">Select State</label>
                    <select
                        id="state"
                        value={selectedState}
                        onChange={handleStateChange}
                        className="border-2 border-gray-300 rounded-lg p-2 w-full"
                    >
                        <option value="">Select State</option>
                        {states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                </div>

                {/* City Dropdown */}
                <div className="mb-4">
                    <label htmlFor="city" className="font-semibold mb-2 block">Select City</label>
                    <select
                        id="city"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="border-2 border-gray-300 rounded-lg p-2 w-full"
                        disabled={!selectedState}
                    >
                        <option value="">Select City</option>
                        {selectedState && cities[selectedState]?.map((city) => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>

                {/* Calendar Selector */}
                <div className="mb-4">
                    <label htmlFor="calendar" className="font-semibold mb-2 block">Select Rental Dates</label>
                    <button
                        onClick={handleModalToggle}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
                    >
                        {showModal ? 'Hide Calendar' : 'Pick Dates'}
                    </button>
                </div>

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        {/* Overlay */}
                        <div
                            className="fixed inset-0 bg-black opacity-50"
                            onClick={handleModalToggle}
                        ></div>

                        {/* Modal content */}
                        <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-full m-80">
                            <h2 className="text-xl font-bold mb-4">Select Rental Date Range</h2>
                            <DateRangeSelector
                                dateRange={dateRange}
                                setDateRange={setDateRange}
                            />
                            <div className="flex justify-end mt-4">
                                <button
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
                                    onClick={handleModalToggle}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                                    onClick={handleFormSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Selected Date Range */}
                <div className="mb-4">
                    <p className="font-semibold mb-2">Selected Dates:</p>
                    <p>
                        From: {dateRange[0].startDate.toLocaleDateString()} -
                        To: {dateRange[0].endDate.toLocaleDateString()}
                    </p>
                </div>

                {/* Submit Button */}
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full mt-4">
                    Check available vehicles
                </button>
            </div>
        </div>
    );
};

export default GetStarted;
