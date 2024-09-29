import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Cookies from 'js-cookie';

const AdminNavbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        Cookies.remove("adminToken");
        Cookies.remove("token");
        navigate('/login')
    }
    return (
        <div className="poppins-regular max-w-full mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link to="/">
                        <img
                            className=""
                            src="/ORS-Logo.png"
                            alt=""
                            width={110}
                            height={180}
                        />
                    </Link>
                </div>
                <nav className="hidden md:flex space-x-10">
                    <Link
                        to="/admin"
                        className="text-base font-medium text-sky-950 hover:text-sky-700"
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/admin/view"
                        className="text-base font-medium text-sky-950 hover:text-sky-700"
                    >
                        Vehicles
                    </Link>
                    <Link
                        to="/admin/view"
                        className="text-base font-medium text-sky-950 hover:text-sky-700"
                    >
                        Users
                    </Link>
                    <Link
                        to="/admin/view"
                        className="text-base font-medium text-sky-950 hover:text-sky-700"
                    >
                        Booking's
                    </Link>
                    <Link
                        to="/admin/view"
                        className="text-base font-medium text-sky-950 hover:text-sky-700"
                    >
                        Payment's
                    </Link>
                </nav>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 mr-0">
                    <p onClick={handleLogout} style={{ cursor: "pointer" }} className="relative inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-transform ease-out border-2 border-sky-900 rounded-lg bg-gray-900 group-hover:mb-0 group-hover:mr-0 button_top">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="relative flex items-center justify-center space-x-2">
                                <span>Logout</span>
                                <FaArrowAltCircleLeft className="w-5 h-5 nav-btn-icon" />
                            </span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-5 -mt-2 -mb-1 bg-sky-900 rounded-lg" data-rounded="rounded-lg"></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar