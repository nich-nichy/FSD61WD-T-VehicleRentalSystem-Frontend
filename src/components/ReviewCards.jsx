import React from 'react';
import { FaStar } from 'react-icons/fa';

const MessageCard = ({ reviews }) => {
    const StarRating = ({ count, rating }) => {
        return (
            <div className="flex space-x-1">
                {Array.from({ length: count }, (_, index) => (
                    <FaStar
                        key={index}
                        className={`cursor-pointer ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                ))}
            </div>
        );
    };

    return (
        <>
            {reviews?.map((review, index) => (
                <div key={index} className="flex items-start gap-2.5 mb-5">
                    {/* User Profile Image */}
                    <img className="w-8 h-8 rounded-full" src={review?.profilePicture ? review?.profilePicture : "/avatar.png"} alt={`${review.username} image`} />

                    {/* Review Content */}
                    <div className="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-white">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            {/* Username and Time */}
                            <span className="text-sm font-semibold text-gray-900 dark:text-sky-900">{review.username}</span>
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                {new Date(review.reviewDetails.createdAt).toLocaleTimeString()}
                            </span>
                        </div>

                        {/* Review Comments */}
                        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-sky-800">
                            {review.reviewDetails.OrsComment}
                        </p>
                        <div className="flex">
                            <StarRating count={5} rating={review.reviewDetails.rateOurService} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MessageCard;
