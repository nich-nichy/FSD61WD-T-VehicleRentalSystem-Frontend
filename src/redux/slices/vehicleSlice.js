import { createSlice } from "@reduxjs/toolkit";

const vehicleSlice = createSlice({
    name: "vehicleSlicer",
    initialState: {
        vehicleData: {
            data: [],
            lastGeneratedData: [],
            isNewOneAdded: false,
            currentBookingVehicle: null
        },
        utilityModel: {
            isModalOpen: false
        },
        dates: {
            showSelectedDays: false,
            dateRange: null
        },
        booking: {
            totalAmount: 0,
            bookingMode: 'create',
            bookingData: null
        },
        posts: {
            data: null
        },
        review: {
            serviceRating: "",
            vehicleRating: "",
            showModal: ""
        }
    },
    reducers: {
        setIsModalOpen(state, action) {
            state.utilityModel.isModalOpen = action.payload;
        },
        setSelectedDays(state, action) {
            state.dates.showSelectedDays = action.payload;
        },
        setSelectedDaysArr(state, action) {
            state.dates.dateRange = action.payload;
        },
        setTotalAmount(state, action) {
            state.booking.totalAmount = action.payload;
        },
        setVehicleData(state, action) {
            state.vehicleData.data = action.payload;
        },
        setCurrentBookingVehicle(state, action) {
            state.vehicleData.currentBookingVehicle = action.payload;
        },
        setBookingMode(state, action) {
            state.booking.bookingMode = action.payload;
        },
        setBookingData(state, action) {
            state.booking.bookingData = action.payload;
        },
        setPosts(state, action) {
            state.posts.data = action.payload;
        },
        setServiceRating(state, action) {
            state.review.serviceRating = action.payload;
        },
        setVehicleRating(state, action) {
            state.review.vehicleRating = action.payload;
        },
        setShowModal(state, action) {
            state.review.showModal = action.payload;
        }
    },
});

export const { setVehicleData, setNavbarToggle, setIsModalOpen, setSelectedDays, setSelectedDaysArr, setTotalAmount, setCurrentBookingVehicle, setBookingMode, setBookingData, setPosts, setServiceRating, setVehicleRating, setShowModal } = vehicleSlice.actions;
export default vehicleSlice.reducer;