import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import '../styles/Loader.css';

const Loader = ({ data }) => {
    return (
        <div className="bg-sky-600 flex justify-center items-center falling-particles" style={{ height: '100vh' }}>
            <div className="bg-sky-800 rounded-full py-5 px-16 shadow-lg">
                <img
                    src="/SuperMan.png"
                    alt="Superman Loader"
                    height={200}
                    width={200}
                    className="animate-fly"
                />
            </div>
        </div>
    );
};

export default Loader;
