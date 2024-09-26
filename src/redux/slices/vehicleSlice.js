import { createSlice } from "@reduxjs/toolkit";

const vehicleSlice = createSlice({
    name: "vehicleShortner",
    initialState: {
        vehicleData: {
            data: [],
            lastGeneratedData: [],
            isNewOneAdded: false
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
    },
});

export const { setNavbarToggle, setIsModalOpen, setSelectedDays, setSelectedDaysArr, setTotalAmount } = vehicleSlice.actions;
export default vehicleSlice.reducer;