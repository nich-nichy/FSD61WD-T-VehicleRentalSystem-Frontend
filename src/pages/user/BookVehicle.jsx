import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import CustomNavbar from '../../components/CustomNavbar';

const BookVehicle = () => {
    const params = useParams();
    const vehicleDetails = useSelector((state) => state.vehicleSlicer.vehicleData.currentBookingVehicle);
    console.log(params.id);
    console.log({ vehicleDetails })

    return (
        <div>
            <CustomNavbar />
            <section className="text-gray-600 body-font overflow-hidden mt-4">
                <div className="container px-10 py-1 pb-0 mx-auto">
                    <div className="lg:w-fit mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{vehicleDetails.Type}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{vehicleDetails.make}</h1>
                            <p>{vehicleDetails.model}</p>
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

                            <p className="leading-relaxed">{`Experience the thrill of driving a sleek and stylish ${vehicleDetails?.make}, ${vehicleDetails.model}. This ${vehicleDetails.year} model is equipped with awesome goodness and offers a comfortable and enjoyable ride. With only ${vehicleDetails?.mileage ? vehicleDetails.mileage : "descent"} miles on the odometer, this vehicle is in excellent condition and ready for your next adventure.`}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <p>Vehicle Type: {vehicleDetails?.type} <br />
                                    Make and Model: {vehicleDetails?.make}, {vehicleDetails?.model}<br />
                                    Year: {vehicleDetails?.year}<br />
                                    {/* Mileage: {vehicleDetails?.mileage ? vehicleDetails?.mileage : ""}<br /> */}
                                    Features: Manual transmission, GPS <br />
                                    Unique Selling Points: Recent maintenance, Excellent fuel efficiency</p>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                                <button className="flex ml-auto text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded">Confirm and Pay</button>
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