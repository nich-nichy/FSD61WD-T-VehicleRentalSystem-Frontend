import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { setSelectedDays } from '../../redux/slices/vehicleSlice'
import Model from '../../components/Utility-Components/Model'
import DateRangeSelector from '../../components/DateRangeSelector';
import { useVerifyToken } from '../../utils/VerifyRole';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../../styles/GetStarted.css'

const url = import.meta.env.VITE_BACKEND_URL;

const GetStarted = () => {
    const states = ['Tamilnadu'];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { username, userEmail, id } = useVerifyToken();
    const showSelectedDays = useSelector((state) => state.vehicleSlice?.dates.showSelectedDays);
    const showDates = useSelector((state) => state.vehicleSlice?.dates?.dateRange);
    const userDetails = useSelector((state) => state.authSlice?.authData.user.userDetails);
    console.log({ showDates });
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [cities, setCities] = useState([]);
    console.log({ cities })
    const [showModal, setShowModal] = useState(false);
    const [dateRange, setDateRange] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const getCities = async () => {
            try {
                const response = await axios.get("https://api.countrystatecity.in/v1/countries/IN/states/TN/cities", {
                    headers: {
                        "X-CSCAPI-KEY": import.meta.env.VITE_COUNTRY_API_KEY
                    }
                });
                setCities(response.data);
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };
        if (cities && cities?.length === 0) {
            getCities();
        }
    }, [selectedState]);

    useEffect(() => {
        const getVehicles = async () => {
            try {
                const { data } = await axios.get(
                    `${url}/vehicle/save-temp`
                );
                setVehicles(data);
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };
        if (vehicles && vehicles?.length == 0) {
            getVehicles();
        }
    }, [])


    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity('');
    };

    const handleModalToggle = () => {
        setShowModal(!showModal);
        dispatch(setSelectedDays(false));
    };

    const handleFormSubmit = () => {
        setShowModal(false);
        dispatch(setSelectedDays(true));
        console.log('Date range selected:', { dateRange }, { showDates });
    };

    console.log({
        user: username,
        email: userEmail,
        state: selectedState,
        city: selectedCity,
        dateRange: dateRange[0] || dateRange
    })

    const handleGetStartedSubmit = async () => {
        // TODO: Make a call to save it
        try {
            if (selectedState?.length > 0 && selectedCity?.length > 0 && dateRange?.length > 0) {
                const { data } = await axios.post(
                    `${url}/booking/save-temp`,
                    {
                        userId: id || userDetails?.id,
                        vehicleId: '',
                        user: username,
                        email: userEmail,
                        state: selectedState,
                        city: selectedCity,
                        startDate: showDates?.startDate,
                        endDate: showDates?.endDate,
                    }
                );
                console.log({ data })
                if (data?.message) {
                    Swal.fire({
                        title: "Success",
                        text: data?.message,
                        icon: "success"
                    });
                    setTimeout(() => navigate("/vehicles"), 1000);
                }
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Fill all the fields",
                    text: "Please make sure you selected all inputs",
                });
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Seems to be a one way",
                text: "Please retry",
            });
        }
    };

    // useEffect(() => {
    //     if (selectedState?.length > 0 && selectedCity?.length > 0 && dateRange?.length > 0) {
    //     }
    // }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-sky-700 font-opensans">
            <div className="shadow-lg rounded-lg overflow-hidden flex flex-col p-8 bg-white w-full max-w-lg">
                <h2 className="text-xl font-bold text-center mb-6">Book Your Rental Car</h2>

                {/* State Dropdown */}
                <div className="mb-4">
                    <label htmlFor="state" className="font-semibold mb-2 block">Select State</label>
                    <select
                        id="state"
                        value={selectedState}
                        onChange={handleStateChange}
                        className="border-2 border-gray-300 rounded-lg p-2 w-full"
                    >
                        <option value="">Select State</option>
                        {states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                </div>

                {/* City Dropdown */}
                <div className="mb-4">
                    <label htmlFor="city" className="font-semibold mb-2 block">Select City</label>
                    <select
                        id="city"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="border-2 border-gray-300 rounded-lg p-2 w-full"
                        disabled={!selectedState}
                    >
                        <option value="">Select City</option>
                        {selectedState && cities?.map((city) => (
                            <option key={city.id} value={city.name}>{city.name}</option>
                        ))}
                    </select>
                </div>

                {/* Calendar Selector */}
                <div className="mb-4">
                    <label htmlFor="calendar" className="font-semibold mb-2 block">Select Rental Dates</label>
                    <button
                        onClick={handleModalToggle}
                        className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-lg w-full"
                    >
                        {showModal ? 'Hide Calendar' : 'Pick Dates'}
                    </button>
                </div>

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        {/* Overlay */}
                        <div
                            className="fixed inset-0 bg-black opacity-50"
                            onClick={handleModalToggle}
                        ></div>

                        {/* Modal content */}
                        {selectedState?.length > 0 && selectedCity?.length > 0 && dateRange?.length > 0 ? <> <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-full m-80">
                            <h2 className="text-xl font-bold mb-4">Select Rental Date Range</h2>
                            <DateRangeSelector
                                dateRange={dateRange}
                                setDateRange={setDateRange}

                            />
                            <div className="flex justify-end mt-4">
                                <button
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
                                    onClick={handleModalToggle}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                                    onClick={handleFormSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div></> : <><div className='z-50 p-10 bg-sky-700 rounded'>
                            <h2 className="text-2xl p-3 bg-white shadow rounded">Please select both state and city</h2>
                            <div className="flex justify-end mt-4">
                                <button
                                    className=" text-black bg-white px-4 py-2 rounded-lg mr-2 hover:bg-sky-800 hover:text-white hover:border-white"
                                    onClick={handleModalToggle}
                                >
                                    Close
                                </button>
                            </div>
                        </div></>}

                    </div>
                )}
                {showSelectedDays ? <> <div className="mb-4">
                    <p className="font-semibold mb-2">Selected Dates:</p>
                    <p>
                        From: {showDates?.startDate.toLocaleDateString()} -
                        To: {showDates?.endDate.toLocaleDateString()}
                    </p>
                </div></> : <></>}

                {/* Submit Button */}
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full mt-4 hover:bg-green-700" onClick={handleGetStartedSubmit}>
                    Check available vehicles
                </button>
            </div>
        </div>
    );
};

export default GetStarted;
