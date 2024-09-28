import React from "react";
import AdminNavbar from "./AdminNavbar";
const AdminDashboard = () => {

    return (
        <div className="poppins-regular">
            <AdminNavbar />
            <div className="min-h-screen bg-gray-100">
                {/* Header */}
                <header className="bg-sky-600 text-white py-4 shadow-md">
                    <div className="container mx-auto flex justify-between items-center px-4">
                        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                    </div>
                </header>

                <div className="container mx-auto px-4 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Vehicle Listings */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Vehicle Listings</h2>
                            <p className="text-gray-700">Manage all vehicle listings.</p>
                            <button className="bg-sky-600 text-white px-4 py-2 mt-4 rounded hover:bg-sky-500">
                                View Listings
                            </button>
                            <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded hover:bg-green-500 ml-2">
                                Approve/Reject
                            </button>
                        </div>

                        {/* User Accounts */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">User Accounts</h2>
                            <p className="text-gray-700">Manage all registered users.</p>
                            <button className="bg-sky-600 text-white px-4 py-2 mt-4 rounded hover:bg-sky-500">
                                View Users
                            </button>
                        </div>

                        {/* Bookings Management */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Bookings</h2>
                            <p className="text-gray-700">Monitor and manage vehicle bookings.</p>
                            <button className="bg-sky-600 text-white px-4 py-2 mt-4 rounded hover:bg-sky-500">
                                View Bookings
                            </button>
                        </div>

                        {/* Payment Transactions */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Payment Transactions</h2>
                            <p className="text-gray-700">Monitor all payment transactions.</p>
                            <button className="bg-sky-600 text-white px-4 py-2 mt-4 rounded hover:bg-sky-500">
                                View Transactions
                            </button>
                        </div>

                        {/* Support Inquiries */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Support Inquiries</h2>
                            <p className="text-gray-700">Handle all support inquiries from users.</p>
                            <button className="bg-sky-600 text-white px-4 py-2 mt-4 rounded hover:bg-sky-500">
                                View Inquiries
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AdminDashboard;
