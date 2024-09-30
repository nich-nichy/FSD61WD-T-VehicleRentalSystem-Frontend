import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const MessageCard = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const StarRating = ({ count, rating, onRating }) => {
        return (
            <div className="flex space-x-1">
                {Array.from({ length: count }, (_, index) => (
                    <FaStar
                        key={index}
                        className={`cursor-pointer ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        onClick={() => onRating(index + 1)}
                    />
                ))}
            </div>
        );
    };
    return (
        <>
            <div>
            </div>
            <div className="flex items-start gap-2.5">
                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
                <div className="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-white">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-gray-900 dark:text-sky-900">Bonnie Green</span>
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-sky-800">
                        That's awesome. I think our users will really appreciate the improvements.
                    </p>
                    <div className="flex">
                        <FaStar
                            key={0}
                            className={`cursor-pointer ${0 ? 'text-yellow-400' : 'text-gray-300'}`}
                            onClick={() => onRating(0)}
                        />
                        <FaStar
                            key={0}
                            className={`cursor-pointer ${0 ? 'text-yellow-400' : 'text-gray-300'}`}
                            onClick={() => onRating(0)}
                        />
                        <FaStar
                            key={0}
                            className={`cursor-pointer ${0 ? 'text-yellow-400' : 'text-gray-300'}`}
                            onClick={() => onRating(0)}
                        />
                        <FaStar
                            key={0}
                            className={`cursor-pointer ${0 ? 'text-yellow-400' : 'text-gray-300'}`}
                            onClick={() => onRating(0)}
                        />
                        <FaStar
                            key={0}
                            className={`cursor-pointer ${0 ? 'text-yellow-400' : 'text-gray-300'}`}
                            onClick={() => onRating(0)}
                        />
                    </div>

                </div>

                {/* {dropdownOpen && (
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Reply
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Forward
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Copy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Report
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Delete
                            </a>
                        </li>
                    </ul>
                </div>
            )} */}
            </div>
        </>
    );
};

export default MessageCard;
