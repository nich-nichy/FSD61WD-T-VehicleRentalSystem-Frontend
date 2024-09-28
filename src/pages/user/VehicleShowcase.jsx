import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../index.css'
import Swal from 'sweetalert2'

import CustomNavbar from '../../components/CustomNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setVehicleData, setCurrentBookingVehicle, setBookingMode, setBookingData } from '../../redux/slices/vehicleSlice'
import { useVerifyToken } from '../../utils/VerifyRole';

const url = import.meta.env.VITE_BACKEND_URL;

const VehicleShowcase = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useVerifyToken()
    const vehicleData = useSelector((state) => state.vehicleSlice.vehicleData.data);
    const [selectedValue, setSelectedValue] = useState('');
    const [modelState, setModelState] = useState(false);
    const [showPromo, setShowPromo] = useState(true);
    const [vehicleModel, setVehicleModel] = useState(false);
    const [alreadyBooked, setAlreadyBooked] = useState([]);
    const userDetails = useSelector((state) => state.authSlice.authData.user.userDetails);
    const totalAmount = useSelector((state) => state.vehicleSlice.booking.totalAmount);
    useEffect(() => {
        const getVehicles = async () => {
            const { data } = await axios.get(
                `${url}/vehicle/get-all`
            );
            const filteredVehicles = data?.vehicles?.filter(vehicle => {
                if (vehicle.vehicleStatus && vehicle.vehicleStatus.available === false) {
                    return false;
                }
                return true;
            });
            console.log(filteredVehicles)
            console.log({ fullData: data?.vehicles })
            dispatch(setVehicleData(filteredVehicles));
            setVehicleData(filteredVehicles);
        }
        if (vehicleData && vehicleData?.length === 0) {
            getVehicles()
        }
    }, [])
    console.log({ userDetails }, "from showcase")
    console.log({ alreadyBooked }, "from showcase")
    useEffect(() => {
        const getBookings = async () => {
            try {
                const { data } = await axios.get(
                    `${url}/booking/get-booking/${userDetails?.id}`
                );
                console.log({ data: data?.bookingInfo }, 'prebook details')
                console.log({ d1: data?.bookingInfo[0].startDate, d2: data?.bookingInfo[0].endDate, d3: data?.bookingInfo[0]?.totalAmount })
                if (data?.bookingInfo[0].startDate && data?.bookingInfo[0].endDate && data?.bookingInfo[0].totalAmount) {
                    console.log('inside');
                    setAlreadyBooked(data?.bookingInfo[0]);
                    dispatch(setBookingData(data?.bookingInfo[0]))
                }
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };
        if (userDetails?.username?.length > 0) {
            getBookings();
        }
    }, [userDetails])

    // Function to handle close button click
    const handleClose = () => {
        setShowPromo(false);
    };

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const setShowVehicleModel = ({ id, vehicle }) => {
        console.log({ alreadyBooked, len: alreadyBooked?.length > 0 })
        if (alreadyBooked && alreadyBooked?.totalAmount > 0) {
            Swal.fire({
                title: "You have already rented a Car! Want to rent more from us?",
                showDenyButton: true,
                confirmButtonText: "Yes",
                denyButtonText: `View Details`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire("Cool let's go 🚀!", "", "success");
                    // FIXME: Change mode to addMore
                    dispatch(setBookingMode("addMore"))
                    navigate('/getStarted')
                } else if (result.isDenied) {
                    Swal.fire("Ok check bookings", "", "info");
                    navigate('/dashboard')
                }
            });
        }
        setVehicleModel(true);
        dispatch(setCurrentBookingVehicle(vehicle));
        navigate(`/book-vehicle/${id}`);
    }
    const handleSearch = () => {
        e.preventDefault();
        console.log("Searching for:", searchTerm);
    }
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="font-opensans">
            <div>
                <CustomNavbar />
            </div>
            <div className="min-h-screen flex bg-gray-100">

                {/* Filters Section */}
                <div className="w-1/4 bg-white shadow-lg rounded-lg p-6 space-y-8">
                    <div>
                        <form onSubmit={handleSearch} className="max-w-md mx-auto">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-white-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 19l-4-4m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50"
                                    placeholder="Search for a Car"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="text-white absolute right-2.5 bottom-2.5 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                                >
                                    <svg className="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 19l-4-4m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Car Type (If car is selected) */}
                    <div>
                        <p className="font-semibold mb-2">Car Type</p>
                        <div className="space-y-2">
                            {["Sport", "Sedan", "SUV", "Coupe", "MPV", "Hatchback"].map((type) => (
                                <div key={type} className="flex items-center">
                                    <input type="radio" name="carType" id={type} className="mr-2" />
                                    <label htmlFor={type}>{type}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Capacity (If truck is selected) */}
                    <div>
                        <p className="font-semibold mb-2">Capacity</p>
                        {["2 Person", "4 Person", "6 Person", "8 Person or More"].map((capacity) => (
                            <div key={capacity} className="flex items-center space-x-2">
                                <input type="checkbox" id={capacity} className="mr-2" />
                                <label htmlFor={capacity}>{capacity}</label>
                                <span className="text-sm text-gray-500">{"Current vehicles"}</span>
                            </div>
                        ))}
                    </div>

                    {/* Car Brand */}
                    <div>
                        <p className="font-semibold mb-2">Car Brand</p>
                        <select
                            value={selectedValue}
                            onChange={handleChange}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg"
                        >
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </select>
                    </div>
                </div>


                {/* Car Cards Section */}
                <div className="w-full m-3 mb-0">
                    {/* Show Promo div only if showPromo is true */}
                    {showPromo && (
                        <div className='relative mb-6 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row w-full'>
                            {/* Close Button */}
                            <button
                                className="absolute top-3 right-3 border hover:border-black text-white bg-gray-600 hover:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center"
                                onClick={handleClose}
                            >
                                &times;
                            </button>
                            <div className="flex-1">
                                <img src="/PromoCar.png" alt="Car Promo" className="w-full h-60 rounded-l-xl object-cover" />
                            </div>
                            <div className="flex-1 p-6 rounded-r-lg bg-gradient-to-r from-sky-500 to-cyan-700 text-white">
                                <h2 className="text-5xl font-extrabold mb-4">Find Your Perfect Ride!</h2>
                                <p className="text-lg mb-6">
                                    Discover the best deals for your next adventure. Select a car today and enjoy unbeatable offers! <br /> Let's <span className="bg-yellow-500 text-white px-1 font-bold transition" style={{ paddingTop: '2px', paddingBottom: '2px' }}>#ChooseACar</span> now!
                                </p>
                                <hr />
                                <div className="mt-6">
                                    <p className="italic text-gray-200 mt-2">"Best car rental service! Highly recommend."</p>
                                    <span className="block text-right text-gray-200">- by Anonymous Amaran</span>
                                </div>
                                <hr />
                                <div className="flex items-center space-x-3 mt-2">
                                    <div className="flex">
                                        <img className="w-6" src="https://cdn.iconscout.com/icon/free/png-256/like-2387659-1991059.png" />
                                        <img className="w-6" src="https://cdn.iconscout.com/icon/free/png-256/love-2387666-1991064.png" />
                                        <img className="w-6 bg-yellow-300 rounded-full" src="/Rocket.png" />
                                    </div>
                                    <span className="text-base">See All comments</span>
                                </div>
                            </div>
                        </div>
                    )}
                    {console.log(vehicleData)}
                    {/* Car Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 px-1 pt-0 mx-auto">
                        {/* Car div Array(12).fill() */}
                        {vehicleData?.map((vehicle, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                                <h2 className="text-2xl font-bold text-gray-800">{vehicle.make}</h2>
                                <p className="text-sky-500 mb-2">{vehicle.type}</p>
                                <img src="" alt="Car" className="w-full h-40 bg-gray-200 mb-4" />
                                <div className=''>
                                    <p className="text-xl underline text-center font-semibold mb-4">${vehicle.pricePerDay}/day</p>
                                </div>
                                <div className="flex justify-between text-gray-600 mb-4">
                                    <p>Manual</p>
                                    <p>4 People</p>
                                </div>
                                <button className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600" onClick={() => setShowVehicleModel({ id: vehicle?._id, vehicle: vehicle })}>
                                    Rent now
                                </button>
                                <div className='text-center py-2'>
                                    <span className='text-xs text-gray-500'>(Note: The total cost will vary depending on the duration of your rental)</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleShowcase;
