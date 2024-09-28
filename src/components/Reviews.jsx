import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewPage = ({ fetchReviews }) => {
    const { vehicleId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const loadReviews = async () => {
            const reviewsData = await fetchReviews(vehicleId);
            setReviews(reviewsData);
        };
        loadReviews();
    }, [vehicleId, fetchReviews]);

    return (
        <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold mb-6">Vehicle Reviews</h1>
            {reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
                        <p className="text-gray-800 mb-2">{review.review}</p>
                        <div className="flex items-center">
                            <span className="text-sky-500 font-semibold">{review.rating} Stars</span>
                            <span className="ml-4 text-gray-500">by {review.user}</span>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No reviews yet.</p>
            )}
        </div>
    );
};

export default ReviewPage;
