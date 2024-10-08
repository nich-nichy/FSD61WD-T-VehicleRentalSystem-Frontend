import React, { useState, useEffect, useRef } from 'react'
import Cookies from "js-cookie";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../src/index.css'
import Loader from './Loader';

const url = import.meta.env.VITE_BACKEND_URL;

const CompleteBooking = () => {
    const cookieData = Cookies.get("bookingData");
    const bookingData = cookieData ? JSON.parse(cookieData) : {};
    const [bookedData, setBookedData] = useState();
    const [captured, setCaptured] = useState(null);
    const params = new URLSearchParams(location.search);
    const navigate = useNavigate();
    const token = params.get('token');
    const payerId = params.get('PayerID');
    const capturePaymentCalled = useRef(false);

    const capturePaymentFunction = async () => {
        try {
            const capturePayment = await axios.post(
                `${url}/payment/capture-payment`,
                {
                    orderId: token,
                    payerId: payerId,
                    bookingData
                }
            );
            Cookies.remove("bookingData");
            return capturePayment;
        } catch (error) {
            console.error("Error capturing payment:", error);
            return error;
        }
    };

    useEffect(() => {
        const handleBooking = async () => {
            try {
                const { data } = await axios.put(
                    `${url}/booking/post-book`,
                    bookingData
                );
                if (data) {
                    setBookedData(data);
                    if (!capturePaymentCalled.current) {
                        capturePaymentCalled.current = true;
                        const capture = await capturePaymentFunction(bookingData);
                        if (capture) {
                            setCaptured(capture);
                            Swal.fire({
                                title: "Booking Confirmed",
                                text: "You have successfully booked your vehicle!",
                                icon: "success",
                                confirmButtonText: "Great!"
                            });
                        } else {
                            navigate('/dashboard');
                        }
                    }
                }
            } catch (error) {
                console.error("Error creating booking:", error);
                navigate('/dashboard');
            }
        };
        if (bookingData && Object.keys(bookingData).length > 0) {
            handleBooking();
        }
    }, []);

    return (
        <>
            {captured ? <><div className="font-opensans flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-600 to-blue-700 text-white">
                <div className="bg-white text-gray-900 p-10 rounded-lg shadow-lg max-w-lg w-full text-center">
                    <h1 className="text-4xl font-bold mb-4">Congratulations! 🚀</h1>
                    <span className='text-xl underline'>"Your booking was successful"</span>
                    <p className="text-lg my-4">You will receive an email with your booking details shortly.</p>
                    <p className="text-base text-gray-500">Thank you for choosing our service.</p>
                    <button className="mt-6 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded transition-all duration-300" onClick={() => navigate('/dashboard')}>
                        View My Bookings
                    </button>
                </div>
            </div></> : <>
                <Loader />
            </>}
        </>

    )
}

export default CompleteBooking
