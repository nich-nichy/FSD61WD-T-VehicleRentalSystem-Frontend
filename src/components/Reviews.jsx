import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CustomNavbar from './CustomNavbar';
import MessageCard from './ReviewCards';
import { FaStar } from 'react-icons/fa';

const url = import.meta.env.VITE_BACKEND_URL;

const ReviewPage = () => {
    const [platformReviews, setPlatformReviews] = useState([]);
    const [vehicleReviews, setVehicleReviews] = useState([]);

    const fetchReviews = async () => {
        try {
            const { data } = await axios.get(`${url}/reviews/get-reviews`);
            const allReviews = data.reviews;
            const platform = allReviews.filter(review => review.type === 'platform');
            const vehicles = allReviews.filter(review => review.type === 'vehicle');
            setPlatformReviews(platform);
            setVehicleReviews(vehicles);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <>
            <CustomNavbar />
            <div className="w-full max-w-5xl mx-auto">
                <div className="flex items-center space-x-3 my-5">
                    <h1 className="text-3xl font-semibold">Customer Reviews</h1>
                    <img className="bg-yellow-300 rounded h-8 w-8" src="/Rocket.png" />
                </div>
                <div className="flex justify-center m-3">
                    <div className="bg-white rounded-lg shadow-lg p-6 py-8 m-5 text-center w-72 h-40">
                        <div className="flex justify-center items-center space-x-2">
                            <FaStar
                                key={0}
                                className={`cursor-pointer w-7 h-7 ${0 ? 'text-yellow-400' : 'text-gray-300'}`}
                                onClick={() => onRating(0)}
                            />
                            <FaStar
                                key={0}
                                className={`cursor-pointer w-7 h-7 ${0 ? 'text-yellow-400' : 'text-gray-300'}`}
                                onClick={() => onRating(0)}
                            />
                            <FaStar
                                key={0}
                                className={`cursor-pointer w-7 h-7 ${0 ? 'text-yellow-400' : 'text-gray-300'}`}
                                onClick={() => onRating(0)}
                            />
                            <FaStar
                                key={0}
                                className={`cursor-pointer w-7 h-7 ${0 ? 'text-yellow-400' : 'text-gray-300'}`}
                                onClick={() => onRating(0)}
                            />
                            <FaStar
                                key={0}
                                className={`cursor-pointer w-7 h-7 ${0 ? 'text-yellow-400' : 'text-gray-300'}`}
                                onClick={() => onRating(0)}
                            />
                        </div>
                        <h2 className="text-ellipsis mt-3 text-2xl font-bold">5/5</h2>
                        <p>For Us</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 py-8 m-5 text-center w-72 h-40">
                        <div className="flex justify-center items-center space-x-2">
                            <FaStar
                                key={0}
                                className={`cursor-pointer w-7 h-7 ${0 ? 'text-yellow-400' : 'text-gray-300'}`}
                                onClick={() => onRating(0)}
                            />
                            <FaStar
                                key={0}
                                className={`cursor-pointer w-7 h-7 ${0 ? 'text-yellow-400' : 'text-gray-300'}`}
                                onClick={() => onRating(0)}
                            />
                            <FaStar
                                key={0}
                                className={`cursor-pointer w-7 h-7 ${0 ? 'text-yellow-400' : 'text-gray-300'}`}
                                onClick={() => onRating(0)}
                            />
                            <FaStar
                                key={0}
                                className={`cursor-pointer w-7 h-7 ${0 ? 'text-yellow-400' : 'text-gray-300'}`}
                                onClick={() => onRating(0)}
                            />
                            <FaStar
                                key={0}
                                className={`cursor-pointer w-7 h-7 ${0 ? 'text-yellow-400' : 'text-gray-300'}`}
                                onClick={() => onRating(0)}
                            />
                        </div>
                        <h2 className="text-ellipsis mt-3 text-2xl font-bold">5/5</h2>
                        <p>For Our Vehicles</p>
                    </div>
                </div>
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reviews on ORS</h2>
                    <MessageCard platformReviews={platformReviews} vehicleReviews={vehicleReviews} />
                    {platformReviews.length > 0 ? (
                        platformReviews.map((review, index) => (
                            <div key={index} className="p-4 mb-4 bg-gray-100 rounded-lg shadow">
                                <div className="text-lg font-medium text-yellow-500">
                                    Rating: {review.rateOurService} / 5
                                </div>
                                <p className="mt-2 text-gray-700">{review.OrsComment}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No reviews for the platform yet.</p>
                    )}
                </section>
                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reviews on Vehicles, We have</h2>
                    {vehicleReviews.length > 0 ? (
                        vehicleReviews.map((review, index) => (
                            <div key={index} className="p-4 mb-4 bg-white rounded-lg shadow">
                                <div className="text-lg font-medium text-yellow-500">
                                    Vehicle Rating: {review.rateTheVehicle} / 5
                                </div>
                                <p className="mt-2 text-gray-700">{review.vehicleComment}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No vehicle reviews yet.</p>
                    )}
                </section>
            </div>
        </>
    );
};

export default ReviewPage;
