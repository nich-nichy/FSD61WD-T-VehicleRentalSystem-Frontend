import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setIsModalOpen } from '../../redux/slices/vehicleSlice'

const ModalComponent = ({ component }) => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state?.vehicleSlice?.utilityModel.isModalOpen);

    const closeModal = () => {
        dispatch(setIsModalOpen(false));
    };

    return (
        <div>
            {isModalOpen && (
                <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full bg-sky-950 h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden md:inset-0" style={{ height: '100vh' }}>
                    <div className="relative p-4 w-full max-w-2xl max-h-full text-white">
                        <div className="relative rounded-lg shadow bg-sky-900">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white"></h3>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 1l6 6m0 0l6 6M7 7L1 1m6 6l6-6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            {component}
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    onClick={closeModal}
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalComponent;
