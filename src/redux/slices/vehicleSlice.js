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
            totalAmount: 0
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
    },
});

export const { setVehicleData, setNavbarToggle, setIsModalOpen, setSelectedDays, setSelectedDaysArr, setTotalAmount, setCurrentBookingVehicle } = vehicleSlice.actions;
export default vehicleSlice.reducer;