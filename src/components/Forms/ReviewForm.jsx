import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useVerifyToken } from '../../utils/VerifyRole';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const url = import.meta.env.VITE_BACKEND_URL;

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

const ReviewFormModal = ({ showModal, setShowModal, vehicleData, bookingData }) => {
    const { id } = useVerifyToken();
    const navigate = useNavigate();
    const userDetails = useSelector((state) => state.authSlice?.authData.user.userDetails);

    const [serviceRating, setServiceRating] = useState(0);
    const [vehicleRating, setVehicleRating] = useState(0);
    const formik = useFormik({
        initialValues: {
            OrsComment: '',
            vehicleComment: ''
        },
        validationSchema: Yup.object({
            OrsComment: Yup.string().required('Please add a comment about our service'),
            vehicleComment: Yup.string().required('Please add a comment about the vehicle')
        }),
        onSubmit: async (values) => {
            if (!serviceRating || !vehicleRating) {
                return Swal.fire({
                    title: "Missing Ratings",
                    text: "Please provide a rating for both service and vehicle.",
                    icon: "warning"
                });
            }

            try {
                const response = await axios.post(`${url}/review/create-review`, {
                    userId: id || userDetails?.id,
                    vehicleId: vehicleData?._id,
                    rateTheVehicle: vehicleRating,
                    rateOurService: serviceRating,
                    OrsComment: values.OrsComment,
                    vehicleComment: values.vehicleComment
                });
                Swal.fire({
                    title: "Thank You!",
                    text: "Your review has been submitted successfully.",
                    icon: "success"
                });
                setShowModal(false);
                window.location.reload();
            } catch (error) {
                console.error("Error submitting review:", error);
                Swal.fire({
                    title: "Error",
                    text: "Something went wrong. Please try again later.",
                    icon: "error"
                });
            }
        },
    });

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Submit Your Review</h2>
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="rateOurService" className="block text-gray-700 font-medium">
                            Rate Our Service
                        </label>
                        <StarRating count={5} rating={serviceRating} onRating={setServiceRating} />
                        {serviceRating === 0 && (
                            <div className="text-red-500 text-sm mt-1">Please rate our service</div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="OrsComment" className="block text-gray-700 font-medium">
                            Your Comment on ORS Service
                        </label>
                        <textarea
                            id="OrsComment"
                            name="OrsComment"
                            className={`w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg 
                            ${formik.touched.OrsComment && formik.errors.OrsComment ? 'border-red-500' : ''}`}
                            value={formik.values.OrsComment}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            rows="3"
                            placeholder="Tell us about your experience, we'd love to hear it!"
                        />
                        {formik.touched.OrsComment && formik.errors.OrsComment && (
                            <div className="text-red-500 text-sm">{formik.errors.OrsComment}</div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="rateTheVehicle" className="block text-gray-700 font-medium">
                            Rate The Vehicle
                        </label>
                        <StarRating count={5} rating={vehicleRating} onRating={setVehicleRating} />
                        {vehicleRating === 0 && (
                            <div className="text-red-500 text-sm mt-1">Please rate the vehicle</div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="vehicleComment" className="block text-gray-700 font-medium">
                            Your Comment on Vehicle
                        </label>
                        <textarea
                            id="vehicleComment"
                            name="vehicleComment"
                            className={`w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg 
                            ${formik.touched.vehicleComment && formik.errors.vehicleComment ? 'border-red-500' : ''}`}
                            value={formik.values.vehicleComment}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            rows="3"
                            placeholder="Tell us something about the vehicle"
                        />
                        {formik.touched.vehicleComment && formik.errors.vehicleComment && (
                            <div className="text-red-500 text-sm">{formik.errors.vehicleComment}</div>
                        )}
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600"
                        >
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewFormModal;