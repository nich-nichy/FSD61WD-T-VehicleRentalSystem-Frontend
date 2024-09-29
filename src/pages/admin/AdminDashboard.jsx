import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import AdminNavbar from "./AdminNavbar";
import Cookies from "js-cookie";
import { setMode, setAdminFetchData } from "../../redux/slices/adminSlice"
import axios from "axios";
import '../../styles/Admin.css';
import { useDispatch } from "react-redux";

const url = import.meta.env.VITE_BACKEND_URL;

const AdminDashboard = () => {
    const [adminDashboardData, setAdminDashboardData] = useState(null);
    // const adminDataSlice = useSelector((state) => state.adminSlice.adminData.adminFetchData);
    const token = Cookies.get('adminToken');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const getDashboardData = async () => {
            try {
                const { data } = await axios.get(
                    `${url}/admin/admin-dashboard`);
                if (data) {
                    dispatch(setAdminFetchData(data?.dashboardData));
                    setAdminDashboardData(data?.dashboardData);
                }
            } catch (error) {
                console.error("Error creating booking:", error);
                navigate('/404');
                dispatch(setAdminFetchData(null));
                dispatch(setMode("dashboard"));
            }
        };
        if (token && token?.length > 0 && !adminDashboardData) {
            getDashboardData();
        }
    }, []);

    const handleGrid = (mode) => {
        if (mode === "listings") {
            setMode(mode)
            navigate('/admin/view')
        } else if (mode === "bookings") {
            setMode(mode)
            navigate('/admin/view')
        } else if (mode === "users") {
            setMode(mode)
            navigate('/admin/view')
        } else if (mode === "payments") {
            setMode(mode)
            navigate('/admin/view')
        } else if (mode === "support") {
            setMode(mode)
            navigate('/admin/view')
        } else if (mode === "listings") {
            setMode(mode)
            navigate('/admin/view')
        }
    }

    return (
        <div className="poppins-regular">
            <AdminNavbar />
            <div className="min-h-screen bg-gray-100">
                <header className="bg-sky-600 text-white py-4 shadow-md">
                    <div className="container mx-auto flex justify-between items-center px-4">
                        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                    </div>
                </header>
                <div className="container mx-auto px-4 py-10">
                    <div className="grid grid-divs-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="card-purple-blue rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-white text-center">
                                <h4 className="text-lg font-light">Total Bookings</h4>
                                <p className="text-3xl font-semibold mt-2">0</p>
                            </div>
                        </div>
                        <div className="card-salmon-pink rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-white text-center">
                                <h4 className="text-lg font-light">Total Users</h4>
                                <p className="text-3xl font-semibold mt-2">0</p>
                            </div>
                        </div>
                        <div className="card-purple-pink rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-white text-center">
                                <h4 className="text-lg font-light">Total Vehicles</h4>
                                <p className="text-3xl font-semibold mt-2">0</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container mx-auto px-4 pt-5 pb-10">
                    <div className="grid grid-divs-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Vehicle Listings</h2>
                            <p className="text-gray-700">Manage all vehicle listings.</p>
                            <button className="bg-sky-600 text-white px-4 py-2 mt-4 rounded hover:bg-sky-500" onClick={() => handleGrid("listings")}>
                                View Listings
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">User Accounts</h2>
                            <p className="text-gray-700">Manage all registered users.</p>
                            <button className="bg-sky-600 text-white px-4 py-2 mt-4 rounded hover:bg-sky-500" onClick={() => handleGrid("users")}>
                                View Users
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Bookings</h2>
                            <p className="text-gray-700">Monitor and manage vehicle bookings.</p>
                            <button className="bg-sky-600 text-white px-4 py-2 mt-4 rounded hover:bg-sky-500" onClick={() => handleGrid("bookings")}>
                                View Bookings
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Payment Transactions</h2>
                            <p className="text-gray-700">Monitor all payment transactions.</p>
                            <button className="bg-sky-600 text-white px-4 py-2 mt-4 rounded hover:bg-sky-500" onClick={() => handleGrid("payments")}>
                                View Transactions
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Support Inquiries</h2>
                            <p className="text-gray-700">Handle all support inquiries from users.</p>
                            <button className="bg-sky-600 text-white px-4 py-2 mt-4 rounded hover:bg-sky-500" onClick={() => handleGrid("support")}>
                                View Inquiries
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Support Inquiries</h2>
                            <p className="text-gray-700">Handle all support inquiries from users.</p>
                            <button className="bg-sky-600 text-white px-4 py-2 mt-4 rounded hover:bg-sky-500" onClick={() => handleGrid()}>
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
