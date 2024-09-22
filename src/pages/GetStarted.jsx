import React from 'react'
import DateRangeSelector from '../components/DateRangeSelector';

const GetStarted = () => {
    const onChange = (ranges) => {
        console.log(ranges);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="shadow-lg rounded-lg overflow-hidden flex flex-col p-6 bg-white">
                <p>Location</p>
                <input placeholder='Enter Location' className='border-2 border-gray-300 rounded-lg p-2' />
                <p>Calender</p>
                <DateRangeSelector />
            </div>
        </div>

    )
}

export default GetStarted