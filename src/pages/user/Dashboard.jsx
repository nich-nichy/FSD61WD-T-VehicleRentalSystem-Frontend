import React from 'react';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            {/* Page Header */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h1 className="text-2xl font-semibold text-gray-800">User Dashboard</h1>
                <p className="text-gray-600">Manage your bookings, payments, and reviews</p>
            </div>

            {/* Grid Layout for Dashboard Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Current Bookings */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Current Bookings</h2>
                    <ul className="space-y-4">
                        {/* Example booking */}
                        <li className="p-4 bg-gray-100 rounded-md">
                            <p className="text-lg font-medium text-gray-800">Booking #1234</p>
                            <p className="text-sm text-gray-600">Vehicle: Sedan | Start Date: 12 Sep 2024 | End Date: 15 Sep 2024</p>
                            <button className="mt-2 bg-sky-500 text-white px-4 py-2 rounded-md text-sm">Manage Booking</button>
                        </li>
                        {/* Add more bookings here */}
                    </ul>
                </div>

                {/* Past Bookings */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Past Bookings</h2>
                    <ul className="space-y-4">
                        {/* Example booking */}
                        <li className="p-4 bg-gray-100 rounded-md">
                            <p className="text-lg font-medium text-gray-800">Booking #1203</p>
                            <p className="text-sm text-gray-600">Vehicle: SUV | Date: 05 Aug 2024 - 10 Aug 2024</p>
                            <button className="mt-2 bg-gray-500 text-white px-4 py-2 rounded-md text-sm">View Details</button>
                        </li>
                        {/* Add more past bookings */}
                    </ul>
                </div>

                {/* Payment History */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Payment History</h2>
                    <ul className="space-y-4">
                        {/* Example payment */}
                        <li className="p-4 bg-gray-100 rounded-md">
                            <p className="text-lg font-medium text-gray-800">Payment #876</p>
                            <p className="text-sm text-gray-600">Amount: ₹4500 | Date: 10 Sep 2024</p>
                            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm">View Receipt</button>
                        </li>
                        {/* Add more payment records */}
                    </ul>
                </div>

                {/* Reviews */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Reviews</h2>
                    <ul className="space-y-4">
                        {/* Example review */}
                        <li className="p-4 bg-gray-100 rounded-md">
                            <p className="text-lg font-medium text-gray-800">Review #567</p>
                            <p className="text-sm text-gray-600">Vehicle: Sedan | Rating: 4/5</p>
                            <p className="text-sm text-gray-600">Comment: Great experience!</p>
                            <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-md text-sm">Edit Review</button>
                        </li>
                        {/* Add more reviews */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
