import React, { useState, useEffect } from 'react';
import CustomNavbar from '../../components/CustomNavbar';
import axios from 'axios'
import '../../index.css'
import Swal from 'sweetalert2'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setVehicleData, setCurrentBookingVehicle, setBookingMode, setBookingData } from '../../redux/slices/vehicleSlice'
import { useVerifyToken } from '../../utils/VerifyRole';
import UserRefTable from '../../components/Tables/UserRefTable';
import '../../index.css'
const url = import.meta.env.VITE_BACKEND_URL;

const Dashboard = () => {
    const dispatch = useDispatch();
    const { id } = useVerifyToken();
    const userDetails = useSelector((state) => state.authSlice.authData.user.userDetails);
    const checkBookingInRedux = useSelector((state) => state.vehicleSlice.booking.bookingData);
    const [bookingData, setBookingData] = useState(null);
    useEffect(() => {
        const getBookingHistory = async () => {
            try {
                const { data } = await axios.get(
                    `${url}/booking/get-booking/${userDetails?.id}`
                );
                console.log({ data: data?.bookingInfo }, 'prebook details')
                console.log({ d1: data?.bookingInfo[0].startDate, d2: data?.bookingInfo[0].endDate, d3: data?.bookingInfo[0]?.totalAmount })
                if (data?.bookingInfo[0].startDate && data?.bookingInfo[0].endDate && data?.bookingInfo[0].totalAmount) {
                    console.log('inside dashboard');
                    setBookingData(data?.bookingInfo[0]);
                }
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };
        if (userDetails?.username?.length > 0 && !checkBookingInRedux) {
            getBookingHistory();
        }
    }, [userDetails, checkBookingInRedux])
    console.log({ bookingData, checkBookingInRedux, userDetails })
    return (
        <div className="font-opensans">
            <CustomNavbar />
            <div className="min-h-screen bg-gray-100 p-4">
                {/* Page Header */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h1 className="text-2xl font-semibold text-gray-800">User Dashboard</h1>
                    <p className="text-gray-600">Manage your bookings, payments, and reviews</p>
                </div>

                {/* Grid Layout for Dashboard Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Current Bookings */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Current Bookings</h2>
                        <ul className="space-y-4">
                            {/* Example booking */}
                            <li className="p-4 bg-gray-100 rounded-md">
                                <p className="text-lg font-medium text-gray-800">Booking {bookingData?._id}</p>
                                <p className="text-sm text-gray-600">Vehicle: {bookingData?.vehicleDetails?.make || ''}({bookingData?.vehicleDetails?.model || ''}) | Type: {bookingData?.vehicleDetails?.type || ''} | Start Date: {bookingData?.startDate ? new Date(bookingData.startDate).toLocaleDateString() : ''} | End Date: {bookingData?.endDate ? new Date(bookingData.endDate).toLocaleDateString() : ''}</p>
                                <button className="mt-2 bg-sky-500 text-white px-4 py-2 rounded-md text-sm">Manage Booking</button>
                            </li>
                            {/* Add more bookings here */}
                        </ul>
                    </div>


                    {/* Payment History */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Payment History</h2>
                        <ul className="space-y-4">
                            {/* Example payment */}
                            <li className="p-4 bg-gray-100 rounded-md">
                                <p className="text-lg font-medium text-gray-800">Payment #876</p>
                                <p className="text-sm text-gray-600">Amount: ₹4500 | Date: 10 Sep 2024</p>
                                <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm">View Receipt</button>
                            </li>
                            {/* Add more payment records */}
                        </ul>
                    </div>
                    {/* Reviews */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Reviews</h2>
                        <ul className="space-y-4">
                            {/* Example review */}
                            <li className="p-4 bg-gray-100 rounded-md">
                                <p className="text-lg font-medium text-gray-800">Review #567</p>
                                <p className="text-sm text-gray-600">Vehicle: Sedan | Rating: 4/5</p>
                                <p className="text-sm text-gray-600">Comment: Great experience!</p>
                                <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-md text-sm">Edit Review</button>
                            </li>
                            {/* Add more reviews */}
                        </ul>
                    </div>
                </div>
                <div className="pt-3">
                    <h2 className="text-2xl font-semibold py-5">All bookings</h2>
                    <UserRefTable />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
