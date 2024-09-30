import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import CustomNavbar from '../../components/CustomNavbar';
import axios from 'axios'
import Cookies from "js-cookie";
import Swal from 'sweetalert2';
import { useVerifyToken } from '../../utils/VerifyRole';
import { setTotalAmount } from '../../redux/slices/vehicleSlice'

const url = import.meta.env.VITE_BACKEND_URL;

const BookVehicle = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { id } = useVerifyToken();
    const vehicleDetails = useSelector((state) => state.vehicleSlice.vehicleData.currentBookingVehicle);
    const userDetails = useSelector((state) => state.authSlice.authData.user.userDetails);
    const [durationDays, setDurationDays] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [postBookingData, setPostBookingData] = useState({});
    console.log({ id: userDetails?.id }, "checking user id")
    useEffect(() => {
        const getPrice = async () => {
            try {
                const { data } = await axios.get(
                    `${url}/booking/get-price/${userDetails?.id}`
                );
                console.log({ data });
                if (data?.booking.startDate && data?.booking.endDate) {
                    const startDate = new Date(data?.booking.startDate);
                    const endDate = new Date(data?.booking.endDate);
                    const timeDifference = endDate.getTime() - startDate.getTime();
                    const days = timeDifference / (1000 * 3600 * 24);
                    setPostBookingData(data?.booking);
                    setDurationDays(days);
                }
            } catch (error) {
                console.error("Error fetching price data:", error);
            }
        };
        getPrice();
    }, [params.id]);

    useEffect(() => {
        const calculateTotalAmount = () => {
            if (vehicleDetails?.pricePerDay) {
                const total = vehicleDetails?.pricePerDay * durationDays;
                setTotalAmount(total);
            }
        };
        calculateTotalAmount();
    }, [durationDays]);

    useEffect(() => {
        if (!vehicleDetails) {
            navigate('/vehicles')
        } else if (!userDetails) {
            navigate('/')
        }
    }, [])

    const handleBooking = async () => {
        let timerInterval;
        Swal.fire({
            title: "Payment Initiated 🚀",
            html: "I will close in <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
        const bookingData = {
            bookingId: postBookingData?._id,
            userId: userDetails?.id,
            totalAmount: vehicleDetails?.pricePerDay * durationDays,
            didPaid: 'pending',
            ...postBookingData,
            vehicleId: vehicleDetails?._id,
        };
        Cookies.set("bookingData", JSON.stringify(bookingData));
        try {
            const { data } = await axios.post(
                `${url}/payment/booking-payment`, { amount: totalAmount, bookingData });
            console.log({ data }, "from payment");

            window.location.href = data?.approvalLink
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Payment unsuccessfull',
            });
            navigate("/404")
            console.error("Error creating booking:", error);
        }
    }

    return (
        <div>
            <CustomNavbar data={postBookingData} />
            <section className="text-gray-600 body-font overflow-hidden mt-4">
                <div className="container px-10 py-1 pb-0 mx-auto">
                    <div className="lg:w-fit mx-auto flex flex-wrap">
                        <img alt="erental" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`/image_${vehicleDetails._id}.jpg`} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{vehicleDetails?.Type}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{vehicleDetails?.make}</h1>
                            <p>{vehicleDetails?.model}</p>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-sky-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-sky-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-sky-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-sky-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-sky-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <img src="/Rocket.png" alt="" height={20} width={20} />
                                </span>
                            </div>

                            <p className="leading-relaxed">{`Experience the thrill of driving a sleek and stylish ${vehicleDetails?.make}, ${vehicleDetails?.model}. This ${vehicleDetails?.year} model is equipped with awesome goodness and offers a comfortable and enjoyable ride. With only ${vehicleDetails?.mileage ? vehicleDetails?.mileage : "descent"} miles on the odometer, this vehicle is in excellent condition and ready for your next adventure.`}</p>
                            <div className="flex mt-3 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <p><span className='font-semibold'>Vehicle Type:</span> {vehicleDetails?.type} <br />
                                    <span className='font-semibold'>Make and Model:</span> {vehicleDetails?.make}, {vehicleDetails?.model}<br />
                                    <span className='font-semibold'>Year:</span> {vehicleDetails?.year}<br />
                                    {/* Mileage: {vehicleDetails?.mileage ? vehicleDetails?.mileage : ""}<br /> */}
                                    <span className='font-semibold'>Features:</span> Manual transmission, GPS <br />
                                    <span className='font-semibold'>USP:</span> Recent maintenance, Excellent fuel efficiency</p>
                                <div className='w-56'>
                                    <span className="flex text-2xl ml-3 pl-3 py-2 border-l-2">
                                        ${vehicleDetails?.pricePerDay} / day
                                    </span>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex flex-col">
                                    <span className="title-font font-medium text-2xl text-gray-900">Total amount: ${totalAmount ? totalAmount : 0}</span>
                                    <span className='text-start text-xs'>(Offer applied #<span className="">newORS</span>)</span>
                                </div>
                                <button className="block ml-auto text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded" onClick={handleBooking}>Confirm and Pay</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BookVehicle