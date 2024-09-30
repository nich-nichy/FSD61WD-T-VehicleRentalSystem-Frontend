import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../index.css'
import Swal from 'sweetalert2'

import CustomNavbar from '../../components/CustomNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setVehicleData, setCurrentBookingVehicle, setBookingMode, setBookingData } from '../../redux/slices/vehicleSlice'
import { useVerifyToken } from '../../utils/VerifyRole';
import Loader from '../../components/Loader';

const url = import.meta.env.VITE_BACKEND_URL;

const VehicleShowcase = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const vehicleData = useSelector((state) => state.vehicleSlice.vehicleData.data);
    const userDetails = useSelector((state) => state.authSlice.authData.user.userDetails);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCarType, setSelectedCarType] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [filterArray, setFilterArray] = useState([]);
    const [priceRange, setPriceRange] = useState(1000);
    const [showPromo, setShowPromo] = useState(true);

    useEffect(() => {
        const getVehicles = async () => {
            const { data } = await axios.get(`${url}/vehicle/get-all`);
            const filteredVehicles = data?.vehicles?.filter(vehicle => vehicle.vehicleStatus?.available !== false);
            dispatch(setVehicleData(filteredVehicles));
            setFilterArray(filteredVehicles);
        };

        if ((!vehicleData || vehicleData?.length === 0) && (!filterArray || filterArray?.length === 0)) {
            getVehicles();
        }
    }, [vehicleData, filterArray, dispatch]);

    useEffect(() => {
        const filteredVehicles = vehicleData?.filter((vehicle) => {
            const matchesSearch = vehicle.make.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCarType = selectedCarType === 'All' || selectedCarType === '' || vehicle.type === selectedCarType;
            const matchesBrand = selectedBrand ? vehicle.make === selectedBrand : true;
            const matchesPrice = vehicle.pricePerDay <= priceRange;
            return matchesSearch && matchesCarType && matchesBrand && matchesPrice;
        });
        setFilterArray(filteredVehicles);
    }, [searchTerm, selectedCarType, selectedBrand, priceRange, vehicleData]);

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const handleCarTypeChange = (e) => setSelectedCarType(e.target.value);
    const handleBrandChange = (e) => setSelectedBrand(e.target.value);
    const handlePriceRangeChange = (e) => setPriceRange(+e.target.value);

    const handleClose = () => setShowPromo(false);

    const setShowVehicleModel = ({ id, vehicle }) => {
        dispatch(setCurrentBookingVehicle(vehicle));
        navigate(`/book-vehicle/${id}`);
    };

    return (
        <>
            {!vehicleData || (vehicleData?.length === 0 && filterArray?.length === 0) ? (
                <Loader />
            ) : (
                <div className="font-opensans">
                    <CustomNavbar />
                    <div className="min-h-screen flex bg-gray-100">
                        <div className="w-1/4 bg-white shadow-lg rounded-lg p-6 space-y-8">
                            <div className='mb-0'>
                                <p className="font-semibold mb-2">Car Brand</p>
                                <select
                                    value={selectedBrand}
                                    onChange={handleBrandChange}
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg"
                                >
                                    <option value="">All Brands</option>
                                    {Array.from(new Set(vehicleData?.map(vehicle => vehicle.make))).map((brand, index) => (
                                        <option key={index} value={brand}>{brand}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='mt-0'>
                                <p className="font-semibold mb-2">Car Type</p>
                                <div className="space-y-2">
                                    {["Sport", "Sedan", "SUV", "Coupe", "MPV", "Hatchback", "All"].map((type) => (
                                        <div key={type} className="flex items-center">
                                            <input
                                                type="radio"
                                                name="carType"
                                                value={type}
                                                checked={selectedCarType === type}
                                                onChange={handleCarTypeChange}
                                                className="mr-2"
                                            />
                                            <label>{type}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative mb-6">
                                <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                                <input
                                    id="labels-range-input"
                                    type="range"
                                    value={priceRange}
                                    min="900"
                                    max="10000"
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                    onChange={handlePriceRangeChange}
                                />
                                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($900)</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($10000)</span>
                            </div>
                        </div>

                        <div className="w-full m-3 mb-0">
                            {showPromo && (
                                <div className='relative mb-6 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row w-full'>
                                    <button
                                        className="absolute top-3 right-3 border hover:border-black text-white bg-gray-600 hover:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center"
                                        onClick={handleClose}
                                    >
                                        &times;
                                    </button>
                                    <div className="flex-1" style={{ pointerEvents: 'none' }}>
                                        <img src="/BunchOfCars-2.jpeg" alt="Car Promo" className="w-full h-[375px] rounded-l-xl object-cover" />
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mx-auto">
                                {filterArray?.map((vehicle, index) => (
                                    <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                                        <h2 className="text-2xl font-bold text-gray-800">{vehicle.make}</h2>
                                        <p className="text-sky-500 mb-2">{vehicle.type}</p>
                                        <img src={`/image_${vehicle._id}.jpg`} alt="Car" className="w-full h-40 bg-gray-200 mb-4" />
                                        <p className="text-xl underline text-center font-semibold mb-4">${vehicle.pricePerDay}/day</p>
                                        <div className="flex justify-between text-gray-600 mb-4">
                                            <p>{vehicle.model}</p>
                                            <p>{vehicle.year}</p>
                                        </div>
                                        <button
                                            className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600"
                                            onClick={() => setShowVehicleModel({ id: vehicle._id, vehicle })}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default VehicleShowcase;

