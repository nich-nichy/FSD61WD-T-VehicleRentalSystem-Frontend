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
            dateRange: [{
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection'
            }]
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
            state.dates.dateRange = [{
                startDate: action.payload.startDate,
                endDate: action.payload.endDate,
                key: 'selection'
            }];
        },
    },
});

export const { setNavbarToggle, setIsModalOpen, setSelectedDays, setSelectedDaysArr } = vehicleSlice.actions;
export default vehicleSlice.reducer;