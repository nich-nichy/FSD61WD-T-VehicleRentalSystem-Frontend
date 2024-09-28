import React, { useState } from 'react';

const ReviewForm = ({ vehicleId, submitReview }) => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!review || !rating) return;

        submitReview({ review, rating, vehicleId });
        setReview('');
        setRating(0);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Leave a Review</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                    placeholder="Write your review here..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <div className="mb-4">
                    <label className="block mb-2">Rating:</label>
                    <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                        <option value={0}>Select a rating</option>
                        {[1, 2, 3, 4, 5].map((rate) => (
                            <option key={rate} value={rate}>{rate} Star{rate > 1 ? 's' : ''}</option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default ReviewForm;
