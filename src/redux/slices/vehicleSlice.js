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
        }
    },
    reducers: {
        setNavbarToggle(state, action) {
            state.navbar.isNavbarOpened = action.payload;
        },
        setIsModalOpen(state, action) {
            state.utilityModel.isModalOpen = action.payload;
        }
    },
});

export const { setNavbarToggle } = vehicleSlice.actions;
export default vehicleSlice.reducer;