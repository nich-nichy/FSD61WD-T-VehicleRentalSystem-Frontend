import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaTruck } from "react-icons/fa"
import { GiHeavyLightning } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { FaLock } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const [dropDown, setDropDown] = React.useState(false);
    const [dropDownTwo, setDropDownTwo] = React.useState(false);

    return (
        <>
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className=""
                                    src="/ORS-Logo.png"
                                    alt=""
                                    width={150}
                                    height={200}
                                />
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                {/* Heroicon name: outline/menu */}
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
                            <a
                                href="#"
                                className="text-base font-medium text-sky-950 hover:text-sky-700"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-base font-medium text-sky-950 hover:text-sky-700"
                            >
                                Pricing
                            </a>
                            <div className="relative">
                                <button
                                    type="button"
                                    className="group bg-white rounded-md text-sky-950 inline-flex items-center text-base font-medium hover:text-sky-700"
                                    onClick={() => (setDropDown(!dropDown), setDropDownTwo(false))}
                                >
                                    <span>Explore</span>
                                    {/*
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            */}
                                    <svg
                                        className={
                                            dropDown === true
                                                ? "transform rotate-180 ml-2 h-5 w-5 text-sky-950 group-hover:text-sky-700 transition ease-out duration-200"
                                                : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-sky-950 group-hover:text-sky-700"
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
                                {/*
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          */}

                                <div
                                    className={
                                        dropDown
                                            ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                            : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                    }
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                            <p className='text-xl antialiased underline underline-offset-4 decoration-sky-500'>For all your long trips:</p>
                                            <a
                                                href="#"
                                                className="-m-3 px-3 py-0 flex items-start rounded-lg hover:bg-gray-50"
                                            >
                                                <FaCarRear className="flex-shrink-0 h-8 w-8 text-white mt-4 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full p-1" />
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Cars
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Choose the perfect car for your next road trip and enjoy the journey in comfort.
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                            >
                                                <RiMotorbikeFill className="flex-shrink-0 h-8 w-8 text-white mt-2 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full p-1" />
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Bikes
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Explore the city or take a scenic ride with our range of bikes, tailored for quick getaways.
                                                    </p>
                                                </div>
                                            </a>
                                            <hr />
                                            <p className='text-xl antialiased underline underline-offset-4 decoration-sky-500'>For all your heavy lifting needs:</p>
                                            <a
                                                href="#"
                                                className="-m-3 px-3 py-0 flex items-start rounded-lg hover:bg-gray-50"
                                            >
                                                <FaTruck className="flex-shrink-0 h-8 w-8 text-white mt-4 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full p-1" />
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Trucks
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Need to move something big? Our trucks are ready for any heavy-duty task.
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                            >
                                                <GiHeavyLightning className="flex-shrink-0 h-8 w-8 text-white mt-4 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full p-1" />
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Heavy Vehicles
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        For industrial needs and large projects, our heavy vehicles are built to handle the load.
                                                    </p>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                                <button
                                    type="button"
                                    className="group bg-white rounded-md text-sky-950 inline-flex items-center text-base font-medium hover:text-sky-700"
                                    onClick={() => (setDropDownTwo(!dropDownTwo), setDropDown(false))}
                                >
                                    <span>More</span>
                                    {/*
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            */}
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
                                {/*
            'More' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          */}{" "}
                                <div
                                    className={
                                        dropDownTwo
                                            ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                            : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                    }
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-6 bg-white px-5 py-6 pb-0 mb-0">
                                            <p className='text-xl antialiased underline underline-offset-4 decoration-sky-500'>We hold the trust:</p>
                                            <a
                                                href="#"
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
                                            </a>

                                            <a
                                                href="#"
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                            >
                                                <FaLock className="flex-shrink-0 h-8 w-8 text-white mt-4 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full p-1" />
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Security
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Learn how we protect your personal information and ensure a safe rental experience.
                                                    </p>
                                                </div>
                                            </a>

                                            <a
                                                href="#"
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
                                            </a>
                                            <a
                                                href="#"
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
                                            </a>

                                        </div>

                                        <div className="px-5 py-5 mt-0 pt-0 bg-gray-50 sm:px-8 sm:py-8">
                                            <div>
                                                <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                                    Recent Posts
                                                </h3>
                                                <ul className="mt-4 space-y-4">
                                                    <li className="text-base truncate">
                                                        <a
                                                            href="#"
                                                            className="font-medium text-gray-900 hover:text-gray-700"
                                                        >
                                                            Vehicle rental system is loved by many people in Tamilnadu.
                                                        </a>
                                                    </li>
                                                    <li className="text-base truncate">
                                                        <a
                                                            href="#"
                                                            className="font-medium text-gray-900 hover:text-gray-700"
                                                        >
                                                            How to use fast track for Vehicle rental system vehicles
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mt-5 text-sm">
                                                <a
                                                    href="#"
                                                    className="font-medium text-sky-600 hover:text-sky-500"
                                                >
                                                    {" "}
                                                    View all posts <span aria-hidden="true">→</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <Link to="/getStarted" className="relative inline-block text-lg group">
                                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-transform ease-out border-2 border-sky-900 rounded-lg bg-gray-900 group-hover:mb-0 group-hover:mr-0 button_top">
                                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                    <span className="relative flex items-center justify-center space-x-2">
                                        <span>Get started</span>
                                        <FaArrowAltCircleRight className="w-5 h-5 nav-btn-icon" />
                                    </span>
                                </span>
                                <span className="absolute bottom-0 right-0 w-full h-5 -mt-2 -mb-1 bg-sky-900 rounded-lg" data-rounded="rounded-lg"></span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

                <div
                    className={
                        open
                            ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    }
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-sky-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        {/* Heroicon name: outline/x */}
                                        <FaCarRear className="flex-shrink-0 h-8 w-8 text-white mt-4 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full p-1" />

                                    </button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <a
                                        href="#"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/chart-bar */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-sky-600"
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
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Analytics
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/cursor-click */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-sky-600"
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
                                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Engagement
                                        </span>
                                    </a>

                                    <a
                                        href="#"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/view-grid */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-sky-600"
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
                                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Integrations
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/refresh */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-sky-600"
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
                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Automations
                                        </span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Pricing
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Docs
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Enterprise
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Blog
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Help Center
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Guides
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Security
                                </a>
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Events
                                </a>
                            </div>
                            <div>
                                {/* working here */}
                                <a href="#_" className="relative inline-block text-lg group">
                                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-transform ease-out border-2 border-sky-900 rounded-lg bg-gray-900 group-hover:mb-0 group-hover:mr-0 button_top">
                                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                        <span className="relative">Get started</span>
                                        <FaArrowAltCircleRight />
                                    </span>
                                    <span className="absolute bottom-0 right-0 w-full h-5 -mt-2 -mb-1 bg-sky-900 rounded-lg" data-rounded="rounded-lg"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar