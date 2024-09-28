import React from 'react';
import { useNavigate } from 'react-router-dom'

const Info = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-sky-500 to-blue-600">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg">
                <div className="flex justify-center mb-3">
                    <img src="/ORS-Logo.png" width={150} height={150} className="mx-auto" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Email Sent Successfully!
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    Please check your inbox for further instructions.
                </p>
                <button
                    className="bg-sky-500 text-white px-6 py-3 rounded hover:bg-sky-600 transition duration-300"
                    onClick={() => navigate('/')}
                >
                    Back to Home
                </button>
            </div>
        </div>

    );
};

export default Info;
