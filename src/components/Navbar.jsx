import React, { useState, useEffect } from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { MdEvent } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setBookingMode } from '../redux/slices/vehicleSlice'
import { setProfilePicture } from '../redux/slices/authSlice'
import { Link } from 'react-router-dom'
import Cookies from "js-cookie";
import Swal from 'sweetalert2';
import '../styles/Navbar.css'
import { useVerifyToken } from '../utils/VerifyRole';
import axios from 'axios';
import { IoHome } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { ImPriceTag } from "react-icons/im";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
const url = import.meta.env.VITE_BACKEND_URL;

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [dropDownTwo, setDropDownTwo] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userProf, setUserProf] = useState(null);
    const { id } = useVerifyToken();
    const userDetails = useSelector((state) => state.authSlice.authData.user.userDetails);
    const profOnRedux = useSelector((state) => state.authSlice.authData.user.profilePicture);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const handleLogout = () => {
        Swal.fire({
            title: "Logged out",
            text: "You have been logged out",
            icon: "success"
        });
        Cookies.remove('token')
        navigate("/login");
    };

    useEffect(() => {
        const getProfile = async () => {
            const { data } = await axios.get(
                `${url}/get-user-profile/${userDetails?.id}`
            );
            setUserProf(data?.user?.profilePicture);
            dispatch(setProfilePicture(data?.user?.profilePicture));
        }
        if (!profOnRedux && userDetails?.id) {
            getProfile();
        }
    }, [userDetails?.id])

    return (
        <>
            <div className="font-opensans relative bg-white md:text-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 lg:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to="/">
                                <span className="sr-only">Logo</span>
                                <img
                                    className=""
                                    src="/ORS-Logo.png"
                                    alt=""
                                    width={150}
                                    height={200}
                                />
                            </Link>
                        </div>
                        <nav className="hidden md:hidden lg:flex space-x-10">
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
                            <div className="relative md:-ml-64 lg-ml-0">
                                <button
                                    type="button"
                                    className="group bg-white rounded-md text-sky-950 inline-flex items-center text-base font-medium hover:text-sky-700"
                                    onClick={() => (setDropDownTwo(!dropDownTwo), setDropDown(false))}
                                >
                                    <span>More</span>
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
                                        <div className="relative grid gap-6 bg-white px-5 py-6 pb-3 mb-0">
                                            <p className='text-xl antialiased underline underline-offset-4 decoration-sky-500'>We hold the trust:</p>
                                            <Link
                                                to="#"
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                            >
                                                <FaHandsHelping className="flex-shrink-0 h-8 w-8 text-white mt-4 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full p-1" />
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Help Center
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Find answers to all your vehicle rental questions or reach out to our support team for assistance.
                                                    </p>
                                                </div>
                                            </Link>

                                            <Link
                                                to="#"
                                                className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                            >
                                                <TbCategory2 className="flex-shrink-0 h-8 w-8 text-white mt-3 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full p-1" />
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Integrations
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Connect with third-party services and tools to make your rental experience smoother and more efficient.
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link
                                                to="#"
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                            >
                                                <MdEvent className="flex-shrink-0 h-8 w-8 text-white mt-4 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full p-1" />
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Events
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Stay updated on upcoming rental promotions, events, and special offers happening near you.
                                                    </p>
                                                </div>
                                            </Link>

                                        </div>
                                        <div className="relative grid gap-6 bg-sky-800 text-white px-5 pt-3 pb-6 mb-0">
                                            <h3 className="text-sm tracking-wide font-medium uppercase underline decoration-white">
                                                Admin Center
                                            </h3>
                                            <Link
                                                to={dropDownTwo ? "/admin-login" : "/"}
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-sky-400"
                                            >
                                                <FaHandsHelping className="flex-shrink-0 h-8 w-8 text-white mt-4 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full p-1" />
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-200">
                                                        Admin ?
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-300">
                                                        Are you a admin, Login here.
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="hidden sm:hidden md:hidden lg:flex items-center justify-end md:flex-1 mr-0">
                            <Link to="/getStarted" onClick={() => dispatch(setBookingMode("create"))} className="relative inline-block text-lg group sm:hidden md:hidden lg:block">
                                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-transform ease-out border-2 border-sky-900 rounded-lg bg-gray-900 group-hover:mb-0 group-hover:mr-0 button_top">
                                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                    <span className="relative flex items-center justify-center space-x-2">
                                        <span className="md:text-xs lg:text-pretty lg:text-base">Get started</span>
                                        <FaArrowAltCircleRight className="w-5 h-5 nav-btn-icon" />
                                    </span>
                                </span>
                                <span className="absolute bottom-0 right-0 w-full h-5 -mt-2 -mb-1 bg-sky-900 rounded-lg" data-rounded="rounded-lg"></span>
                            </Link>
                        </div>
                        <div className="relative ml-0 hidden lg:block">
                            <img
                                id="avatarButton"
                                type="button"
                                onClick={toggleDropdown}
                                className="w-10 h-10 rounded-full cursor-pointer"
                                src={profOnRedux ? profOnRedux : "/avatar.png"}
                                alt="User dropdown"
                            />
                            {dropdownOpen && (
                                <div
                                    id="userDropdown"
                                    className="z-10 absolute right-0 bg-sky-950 divide-y divide-gray-100 rounded-lg shadow w-80 light:text-white light:bg-gray-700 light:divide-gray-600"
                                >
                                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                        <div>{userDetails?.username}</div>
                                        <div className="font-medium truncate">{userDetails?.email}</div>
                                    </div>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-white">
                                        <li>
                                            <Link
                                                to="/dashboard"
                                                className="block px-4 py-2  dark:hover:bg-sky-600 dark:hover:text-white"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/settings"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-sky-600 dark:hover:text-white"
                                            >
                                                Settings
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <p
                                            className="block text-sm px-4 py-2 text-white dark:hover:bg-sky-600"
                                            onClick={handleLogout}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Logout
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="lg:hidden justify-end">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                <FaBars className='h-6 w-6' />
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        open
                            ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-20"
                            : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
                    }
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-10 px-5">
                            <div className="flex items-center justify-between">
                                <div className="relative ml-0 hidden md:block lg:hidden">
                                    <div className="flex">
                                        <Link
                                            to="/settings"
                                            className="block px-4 py-2 pl-0 hover:bg-gray-100 dark:hover:bg-sky-600 text-black"
                                        >
                                            <img
                                                id="avatarButton"
                                                type="button"
                                                onClick={toggleDropdown}
                                                className="w-10 h-10 rounded-full cursor-pointer"
                                                src={profOnRedux ? profOnRedux : "/avatar.png"}
                                                alt="User dropdown"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="-mr-2 -mt-10">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md p-2 flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <IoMdCloseCircle className="flex-shrink-0 h-10 w-10 text-gray-300 mt-4 rounded-full p-1" />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <Link
                                        to="/"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        <IoHome className="flex-shrink-0 h-6 w-6 text-sky-600" />
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Home
                                        </span>
                                    </Link>
                                    <Link
                                        to="/dashboard"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        <MdSpaceDashboard className="flex-shrink-0 h-6 w-6 text-sky-600" />
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Dashboard
                                        </span>
                                    </Link>

                                    <Link
                                        to="/pricing"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        <ImPriceTag className="flex-shrink-0 h-6 w-6 text-sky-600" />
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Pricing
                                        </span>
                                    </Link>
                                    <Link
                                        to="/admin-login"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        <RiAdminLine className="flex-shrink-0 h-6 w-6 text-sky-600" />

                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Admin
                                        </span>
                                    </Link>
                                </nav>

                            </div>
                        </div>
                        <div className="py-6 px-5">
                            <div className='flex'>
                                { }
                                <Link to="/getStarted" className="relative inline-block text-lg group">
                                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-transform ease-out border-2 border-sky-900 rounded-lg bg-gray-900 group-hover:mb-0 group-hover:mr-0 button_top">
                                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                        <span className="relative">Get started</span>
                                    </span>
                                    <span className="absolute bottom-0 right-0 w-full h-5 -mt-2 -mb-1 bg-sky-900 rounded-lg" data-rounded="rounded-lg"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar