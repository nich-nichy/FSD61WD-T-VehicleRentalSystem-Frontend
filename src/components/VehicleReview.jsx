import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const VehicleReview = ({ reviews }) => {
    return (
        <div className="w-full mx-auto p-6">
            <div className="flex items-center space-x-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews?.map((review, index) => (
                        <div key={index} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 w-[60rem]">
                            <div className="md:w-1/3">
                                <img
                                    src={`image_${review?.vehicleDetails?._id}.jpg`}
                                    alt="Vehicle"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="md:w-2/3 p-4 flex flex-col justify-between">
                                <div className="flex items-start gap-3">
                                    <img
                                        className="w-10 h-10 rounded-full object-cover"
                                        src="/docs/images/people/profile-picture-3.jpg"
                                        alt={`${review.username} profile`}
                                    />
                                    <div className="w-full">
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold text-gray-900">{review.username}</span>
                                            <span className="text-xs text-gray-500">
                                                {new Date(review.reviewDetails.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-700 mt-2">{review.reviewDetails.vehicleComment}</p>

                                        <div className="flex items-center mt-2">
                                            <StarRating count={5} rating={review.reviewDetails.rateTheVehicle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 border-t pt-4">
                                    <h3 className="text-sm font-semibold text-gray-800">Vehicle: {review.vehicleDetails.make} {review.vehicleDetails.model} ({review.vehicleDetails.year})</h3>
                                    <p className="text-xs text-gray-600 mt-1">Location: {review.vehicleDetails.location}</p>
                                    <p className="text-xs text-gray-600 mt-1">Price per day: ${review.vehicleDetails.pricePerDay}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const StarRating = ({ count, rating }) => {
    return (
        <div className="flex space-x-1">
            {Array.from({ length: count }, (_, index) => (
                <FaStar
                    key={index}
                    className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                />
            ))}
        </div>
    );
};


export default VehicleReview;