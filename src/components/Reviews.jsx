import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomNavbar from './CustomNavbar';
import MessageCard from './ReviewCards';
import { FaStar } from 'react-icons/fa';
import VehicleReviews from './VehicleReview';

const url = import.meta.env.VITE_BACKEND_URL;

const ReviewPage = () => {
    const [vehicleInfo, setVehicleInfo] = useState(null);
    const [reviews, setReviews] = useState(null);

    const getReviews = async () => {
        try {
            const { data } = await axios.get(`${url}/review/get-reviews`);
            setReviews(data?.data);
            setVehicleInfo(data[0])
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };
    useEffect(() => {
        if (!reviews || reviews?.length === 0) {
            getReviews();
        }
    }, []);
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5;

        return (
            <div className="flex justify-center items-center space-x-2">
                {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                        key={index}
                        className={`w-7 h-7 ${index < fullStars
                            ? 'text-yellow-400'
                            : halfStar && index === fullStars
                                ? 'text-yellow-300'
                                : 'text-gray-300'
                            }`}
                    />
                ))}
            </div>
        );
    };
    const calculateAverageRating = (reviews, type) => {
        if (!reviews || reviews.length === 0) return 0;
        const totalRating = reviews.reduce((sum, review) => sum + review.reviewDetails[type], 0);
        const averageRating = totalRating / reviews.length;
        return averageRating === 5 ? '5' : averageRating.toFixed(1);
    };

    const vehicleAverageRating = calculateAverageRating(reviews, 'rateTheVehicle');
    const serviceAverageRating = calculateAverageRating(reviews, 'rateOurService');

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
                        {renderStars(vehicleAverageRating)}
                        <h2 className="text-ellipsis mt-3 text-2xl font-bold">{vehicleAverageRating}/5</h2>
                        <p>For Our Vehicles</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 py-8 m-5 text-center w-72 h-40">
                        {renderStars(serviceAverageRating)}
                        <h2 className="text-ellipsis mt-3 text-2xl font-bold">{serviceAverageRating}/5</h2>
                        <p>For Our Service</p>
                    </div>
                </div>
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reviews on ORS</h2>
                    <MessageCard reviews={reviews} />
                </section>
                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reviews on Vehicles, We have</h2>
                    <VehicleReviews reviews={reviews} vehicleInfo={vehicleInfo} />
                </section>
            </div>
        </>
    );
};

export default ReviewPage;
