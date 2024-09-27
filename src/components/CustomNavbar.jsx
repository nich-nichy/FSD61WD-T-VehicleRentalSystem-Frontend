import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../redux/slices/authSlice'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaTruck } from "react-icons/fa"
import { GiHeavyLightning } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { FaLock } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import Swal from 'sweetalert2';
import { FaUserAlt } from "react-icons/fa";

const url = import.meta.env.VITE_BACKEND_URL;

const CustomNavbar = () => {
    const [dropDown, setDropDown] = React.useState(false);
    const [dropDownTwo, setDropDownTwo] = React.useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const navigate = useNavigate();
    const updateBooking = () => {

    }

    const cancelBooking = () => {
        navigate('/cancel-booking')
    }

    return (
        <div className="max-w-full mx-auto px-4 sm:px-6">
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
                    <Link
                        to="/"
                        className="text-base font-medium text-sky-950 hover:text-sky-700"
                    >
                        Home
                    </Link>
                    <Link
                        to="/dashboard"
                        className="text-base font-medium text-sky-950 hover:text-sky-700"
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/pricing"
                        className="text-base font-medium text-sky-950 hover:text-sky-700"
                    >
                        Pricing
                    </Link>
                    <div className="relative">
                        <button
                            type="button"
                            className="group bg-white rounded-md text-sky-950 inline-flex items-center text-base font-medium hover:text-sky-700"
                            onClick={() => (setDropDownTwo(!dropDownTwo), setDropDown(false))}
                        >
                            <span>Change in plan ?</span>
                            <svg
                                className={
                                    dropDownTwo === true
                                        ? "transform rotate-180 ml-2 h-5 w-5 text-sky-950 group-hover:text-sky-950 transition ease-out duration-200"
                                        : "ml-2 h-5 w-5 text-sky-950 group-hover:text-sky-700"
                                }
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <div
                            className={
                                dropDownTwo
                                    ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                    : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                            }
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 pb-0 mb-0">
                                    <p
                                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                        <FaHandsHelping className="flex-shrink-0 h-8 w-8 text-white mt-4 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full p-1" />
                                        <div className="ml-4">
                                            <p className="text-base font-medium text-gray-900">
                                                Change Booking Date ?
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Want to change dates, Click here
                                            </p>
                                        </div>
                                    </p>
                                    <p
                                        className="-m-3 p-3 mb-3 flex items-start rounded-lg hover:bg-gray-50"
                                        onClick={() => cancelBooking()}
                                    >
                                        <FaLock className="flex-shrink-0 h-8 w-8 text-white mt-4 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full p-1" />
                                        <div className="ml-4">
                                            <p className="text-base font-medium text-gray-900">
                                                Cancel Booking ?
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Change in plan, No worries we check for pre booking and post booking, if you paid, it will be refunded in 3-4 business days.
                                            </p>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 mr-0">
                    <Link to="/vehicles" className="relative inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-transform ease-out border-2 border-sky-900 rounded-lg bg-gray-900 group-hover:mb-0 group-hover:mr-0 button_top">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="relative flex items-center justify-center space-x-2">
                                <span>Explore</span>
                                <FaArrowAltCircleRight className="w-5 h-5 nav-btn-icon" />
                            </span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-5 -mt-2 -mb-1 bg-sky-900 rounded-lg" data-rounded="rounded-lg"></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CustomNavbar