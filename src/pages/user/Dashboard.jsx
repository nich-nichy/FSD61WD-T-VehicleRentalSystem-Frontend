import React, { useState, useEffect } from 'react';
import CustomNavbar from '../../components/CustomNavbar';
import axios from 'axios'
import '../../index.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useVerifyToken } from '../../utils/VerifyRole';
import UserRefTable from '../../components/Tables/UserRefTable';
import '../../index.css'

const url = import.meta.env.VITE_BACKEND_URL;

const Dashboard = () => {
    const navigate = useNavigate();
    const { id } = useVerifyToken();
    const userDetails = useSelector((state) => state.authSlice.authData.user.userDetails);
    const [data, setData] = useState(null);
    const [bookingData, setBookingData] = useState(null);
    const [vehicleData, setVehicleData] = useState(null);
    const [paymentData, setPaymentData] = useState(null);

    useEffect(() => {
        const getBookingHistory = async () => {
            try {
                const { data } = await axios.get(
                    `${url}/booking/dashboard-data/${userDetails?.id}`
                );
                if (data?.dashboardData[0].bookingDetails.startDate && data?.dashboardData[0].bookingDetails.endDate && data?.dashboardData[0].bookingDetails.totalAmount) {
                    setData(data);
                    setBookingData(data?.dashboardData[0].bookingDetails);
                    setVehicleData(data?.dashboardData[0].vehicleDetails);
                    setPaymentData(data?.dashboardData[0].paymentDetails);
                }
            } catch (error) {
                setData(null);
                setBookingData(null);
                setVehicleData(null);
                setPaymentData(null);
                console.error("Error fetching cities:", error);
            }
        };
        if (userDetails?.username?.length > 0 && bookingData === null) {
            getBookingHistory();
        }
    }, [userDetails, bookingData])

    const downloadInvoice = async (bookingId) => {
        try {
            const response = await axios.post(`${url}/payment/get-invoice`, { bookingId: bookingData?._id }, {
                responseType: 'blob',
            });
            const file = new Blob([response.data], { type: 'application/pdf' });
            const fileURL = URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = fileURL;
            link.download = `invoice_${bookingId}.pdf`;
            link.click();
        } catch (error) {
            console.error('Error downloading the invoice:', error);
        }
    };

    return (
        <>
            {bookingData === null ? <>
                <CustomNavbar />
                <div className="font-opensans min-h-screen bg-gray-100 p-4">
                    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                        <h1 className="text-2xl font-semibold text-gray-800">User Dashboard</h1>
                        <p className="text-gray-600">Manage your bookings, payments, and reviews</p>
                    </div>
                    <div className="bg-white text-center p-6 mb-8">
                        <h1 className="text-2xl font-semibold text-gray-800">Book an order to continue</h1>
                        <button className="bg-sky-500 text-white px-4 py-2 m-3 rounded-md hover:bg-sky-600" onClick={() => navigate("/getStarted")}>Start</button>
                    </div>
                </div>
            </> : <>
                <div className="font-opensans">
                    <CustomNavbar />
                    <div className="font-opensans min-h-screen bg-gray-100 p-4">
                        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                            <h1 className="text-2xl font-semibold text-gray-800">User Dashboard</h1>
                            <p className="text-gray-600">Manage your bookings, payments, and reviews</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between min-h-[270px]">
                                <div>
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Current Booking</h2>
                                    <ul className="space-y-4">
                                        <li className="p-4 bg-gray-100 rounded-md">
                                            <p className="text-lg font-medium text-gray-800">Booking #{bookingData?._id}</p>
                                            <p className="text-sm text-gray-600">
                                                Vehicle: {vehicleData?.make || ''} ({vehicleData?.model || ''}) | Type: {vehicleData?.type || ''} | Start Date: {bookingData?.startDate ? new Date(bookingData.startDate).toLocaleDateString() : ''} | End Date: {bookingData?.endDate ? new Date(bookingData.endDate).toLocaleDateString() : ''}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <button className="mt-auto bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm">Manage Booking</button>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between min-h-[270px]">
                                <div>
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Payment History</h2>
                                    <ul className="space-y-4">
                                        <li className="p-4 bg-gray-100 rounded-md">
                                            <p className="text-lg font-medium text-gray-800">Payment #{paymentData?._id}</p>
                                            <p className="text-sm text-gray-600">
                                                Amount: ${paymentData?.amount} | Date: {paymentData?.createdAt ? new Date(paymentData.createdAt).toLocaleDateString() : ''}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <button className="mt-auto bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm" onClick={() => downloadInvoice(bookingData?._id)}>Get Invoice</button>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between min-h-[270px]">
                                <div>
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Reviews</h2>
                                    <ul className="space-y-4">
                                        <li className="p-4 bg-gray-100 rounded-md">
                                            <p className="text-lg font-medium text-gray-800">Review #567</p>
                                            <p className="text-sm text-gray-600">Vehicle: Sedan | Rating: 4/5</p>
                                            <p className="text-sm text-gray-600">Comment: Great experience!</p>
                                        </li>
                                    </ul>
                                </div>
                                <button className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm">Edit Review</button>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold py-5">All bookings</h2>
                            <div className="pt-3 flex justify-center items-center">
                                <UserRefTable data={data} bookings={[bookingData]} vehicles={[vehicleData]} paymentData={paymentData} />
                            </div>
                        </div>
                    </div>
                </div></>}
        </>

    );
};

export default Dashboard;
