import React, { useState } from 'react'
import DateRangeSelector from '../components/DateRangeSelector';

const GetStarted = () => {
    const [hide, setHide] = useState();
    const states = ['California', 'Texas', 'Florida'];
    const cities = {
        'California': ['Los Angeles', 'San Francisco', 'San Diego'],
        'Texas': ['Houston', 'Dallas', 'Austin'],
        'Florida': ['Miami', 'Orlando', 'Tampa']
    };
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const [dateRange, setDateRange] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);
    return (
        <div className="min-h-screen flex items-center justify-center bg-sky-700">
            <div className="shadow-lg rounded-lg overflow-hidden flex flex-col p-6 bg-white">
                <p>Choose a pickup spot:</p>
                <div className="w-full lg:w-auto">
                    <p className="font-semibold mb-2 text-center lg:text-left">Select State</p>
                    <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="border-2 border-gray-300 rounded-lg p-2 w-full"
                    >
                        <option value="">Select State</option>
                        {states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div className="w-full lg:w-auto">
                    <p className="font-semibold mb-2 text-center lg:text-left">Select State</p>
                    <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="border-2 border-gray-300 rounded-lg p-2 w-full"
                    >
                        <option value="">Select City</option>
                        {cities['California']?.map((city) => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
                <p>Calender</p>
                { }
                Select Day
                <button>{Date()}</button>
                <DateRangeSelector />
            </div>
        </div>

    )
}

export default GetStarted