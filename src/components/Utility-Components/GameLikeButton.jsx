import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from "react-icons/fa";

const GameLikeButton = ({ buttonText, routeTo }) => {
    return (
        <>
            <Link to={`/${routeTo}`} className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-transform ease-out border-2 border-sky-900 rounded-lg bg-gray-900 group-hover:mb-0 group-hover:mr-0 button_top">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="relative flex items-center justify-center space-x-2">
                        <span>{buttonText}</span>
                        <FaArrowAltCircleRight className="w-5 h-5 nav-btn-icon" />
                    </span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-5 -mt-2 -mb-1 bg-sky-900 rounded-lg" data-rounded="rounded-lg"></span>
            </Link>
        </>
    )
}

export default GameLikeButton