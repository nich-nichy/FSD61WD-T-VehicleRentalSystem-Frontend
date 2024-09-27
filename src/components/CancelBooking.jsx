import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useVerifyToken } from '../utils/VerifyRole';

const url = import.meta.env.VITE_BACKEND_URL;

const CancelBooking = () => {
    const { id } = useVerifyToken();
    const userDetails = useSelector((state) => state.authSlice?.authData.user.userDetails);
    const [bookingDetails, setBookingDetails] = useState([]);
    const [selectedBookingId, setSelectedBookingId] = useState('');
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [currentBookingId, setCurrentBookingId] = useState('');

    useEffect(() => {
        const getBookingDetails = async () => {
            console.log('in')
            if (id || userDetails?.userId && selectedBooking === null) {
                const response = await axios.get(`${url}/booking/get-booking/${userDetails?.userId || id}`);
                console.log(response?.data?.bookingInfo)
                setBookingDetails(response?.data?.bookingInfo || []);
            }
        };
        getBookingDetails();
    }, [id || userDetails || ' ']);

    useEffect(() => {
        const booking = bookingDetails.find((b) => b._id === selectedBookingId);
        setSelectedBooking(booking || null);
    }, [selectedBookingId, bookingDetails]);


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            bookingId: selectedBooking?._id || '',
            userName: selectedBooking?.user || '',
            email: selectedBooking?.email || '',
            state: selectedBooking?.state || '',
            city: selectedBooking?.city || '',
            startDate: selectedBooking ? new Date(selectedBooking.startDate).toLocaleDateString() : '',
            returnDate: selectedBooking ? new Date(selectedBooking.endDate).toLocaleDateString() : '',
            vehicleName: selectedBooking?.vehicleDetails?.make || '-',
            vehicleType: selectedBooking?.vehicleDetails?.type || '-',
            vehicleModel: selectedBooking?.vehicleDetails?.model || '-',
        },
        validationSchema: Yup.object({
            bookingId: Yup.string().required('Please select a booking'),
        }),
        onSubmit: values => {
            console.log(values);
            if (!selectedBookingId) {
                return Swal.fire({
                    title: "Error",
                    text: "Please select a booking to cancel",
                    icon: "error"
                });
            }
            axios.delete(`${url}/booking/cancel-booking/${selectedBookingId}`)
                .then(response => {
                    if (response?.data?.message) {
                        Swal.fire({
                            title: "Booking Cancelled",
                            text: "You have cancelled your booking",
                            icon: "success"
                        });
                    }
                });
        },
    });


    return (
        <div className="bg-sky-700 py-10">
            <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cancel Booking</h2>
                {console.log(formik.values)}
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="bookingId" className="block text-gray-700 font-medium">Select Booking</label>
                        <select
                            id="bookingId"
                            name="bookingId"
                            value={formik.values.bookingId}
                            onChange={(e) => {
                                setSelectedBookingId(e.target.value);
                                formik.handleChange(e);
                            }}
                            onBlur={formik.handleBlur}
                            className={`mt-1 block w-full p-2 bg-gray-200 rounded-md border border-gray-300 
                ${formik.touched.bookingId && formik.errors.bookingId ? 'border-red-500' : ''}`}
                        >
                            <option value="" disabled>Select a booking</option>
                            {bookingDetails.map((booking) => (
                                <option key={booking._id} value={booking._id}>
                                    {`Booking ID: ${booking._id}`}
                                </option>
                            ))}
                        </select>
                        {formik.touched.bookingId && formik.errors.bookingId ? (
                            <div className="text-red-500 text-sm">{formik.errors.bookingId}</div>
                        ) : null}
                    </div>

                    {/* User Details */}
                    <div>
                        <label htmlFor="userName" className="block text-gray-700 font-medium">Full Name</label>
                        <input
                            id="userName"
                            name="userName"
                            type="text"
                            value={formik.values.userName}
                            className="mt-1 block w-full p-2 bg-gray-200 rounded-md border border-gray-300"
                            disabled
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formik.values.email}
                            className="mt-1 block w-full p-2 bg-gray-200 rounded-md border border-gray-300"
                            disabled
                        />
                    </div>

                    {/* State */}
                    <div>
                        <label htmlFor="state" className="block text-gray-700 font-medium">State</label>
                        <input
                            id="state"
                            name="state"
                            type="text"
                            value={formik.values.state}
                            className="mt-1 block w-full p-2 bg-gray-200 rounded-md border border-gray-300"
                            disabled
                        />
                    </div>

                    {/* City */}
                    <div>
                        <label htmlFor="city" className="block text-gray-700 font-medium">City</label>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            value={formik.values.city}
                            className="mt-1 block w-full p-2 bg-gray-200 rounded-md border border-gray-300"
                            disabled
                        />
                    </div>

                    {/* Start Date */}
                    <div>
                        <label htmlFor="startDate" className="block text-gray-700 font-medium">Start Date</label>
                        <input
                            id="startDate"
                            name="startDate"
                            type="text"
                            value={formik.values.startDate}
                            className="mt-1 block w-full p-2 bg-gray-200 rounded-md border border-gray-300"
                            disabled
                        />
                    </div>

                    {/* Return Date */}
                    <div>
                        <label htmlFor="returnDate" className="block text-gray-700 font-medium">Return Date</label>
                        <input
                            id="returnDate"
                            name="returnDate"
                            type="text"
                            value={formik.values.returnDate}
                            className="mt-1 block w-full p-2 bg-gray-200 rounded-md border border-gray-300"
                            disabled
                        />
                    </div>

                    {/* Vehicle Info */}
                    <div>
                        <label htmlFor="vehicleName" className="block text-gray-700 font-medium">Vehicle Name</label>
                        <input
                            id="vehicleName"
                            name="vehicleName"
                            type="text"
                            value={formik.values.vehicleName}
                            className="mt-1 block w-full p-2 bg-gray-200 rounded-md border border-gray-300"
                            disabled
                        />
                    </div>

                    <div>
                        <label htmlFor="vehicleType" className="block text-gray-700 font-medium">Vehicle Type</label>
                        <input
                            id="vehicleType"
                            name="vehicleType"
                            type="text"
                            value={formik.values.vehicleType}
                            className="mt-1 block w-full p-2 bg-gray-200 rounded-md border border-gray-300"
                            disabled
                        />
                    </div>

                    <div>
                        <label htmlFor="vehicleModel" className="block text-gray-700 font-medium">Vehicle Model</label>
                        <input
                            id="vehicleModel"
                            name="vehicleModel"
                            type="text"
                            value={formik.values.vehicleModel}
                            className="mt-1 block w-full p-2 bg-gray-200 rounded-md border border-gray-300"
                            disabled
                        />
                    </div>

                    {/* Cancel Button */}
                    <div className="text-right">
                        <button
                            type="button"
                            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-300"
                        >
                            Cancel Booking
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CancelBooking;

