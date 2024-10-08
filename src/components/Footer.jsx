import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div><footer className="text-gray-600 bg-white font-opensans">
            <div className="container px-5 pt-12 py-3 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src="/ORS-Logo.png" alt="" />
                    </a>
                </div>
                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Get started</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to="/vehicles" className="text-gray-600 hover:text-gray-800">Vehicle showcase</Link>
                            </li>
                            <li>
                                <Link to="/dashboard" className="text-gray-600 hover:text-gray-800">Dashboard</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">About ORS</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to="/posts" className="text-gray-600 hover:text-gray-800">Posts</Link>
                            </li>
                            <li>
                                <Link to="/reviews" className="text-gray-600 hover:text-gray-800">Reviews</Link>
                            </li>
                            <li>
                                <Link to="pricing" className="text-gray-600 hover:text-gray-800">Pricing</Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left"> ORS —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank" previewlistener="true">@nishath</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="ml-3 text-gray-500">
                            <FaGithub className="w-5 h-5" />
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer ></div >
    )
}

export default Footer