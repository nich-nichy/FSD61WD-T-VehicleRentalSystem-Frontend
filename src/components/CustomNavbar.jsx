import React from 'react'
import { Link } from 'react-router-dom'

const CustomNavbar = () => {
    return (
        <div className="max-w-full mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link to="/">
                        <span className="sr-only">Workflow</span>
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
                        to="/pricing"
                        className="text-base font-medium text-sky-950 hover:text-sky-700"
                    >
                        Pricing
                    </Link>
                    <Link
                        to="/vehicles"
                        className="text-base font-medium text-sky-950 hover:text-sky-700"
                    >
                        Explore
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default CustomNavbar