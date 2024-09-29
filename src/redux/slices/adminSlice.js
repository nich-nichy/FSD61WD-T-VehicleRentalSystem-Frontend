import { createSlice } from "@reduxjs/toolkit";
import { setAdmin } from "./authSlice";

const adminSlice = createSlice({
    name: "adminSlicer",
    initialState: {
        adminData: {
            mode: 'dashboard',
            adminFetchData: null,
        }
    },
    reducers: {
        setMode(state, action) {
            state.adminData.mode = action.payload;
        },
        setAdminFetchData(state, action) {
            state.adminData.adminFetchData = action.payload;
        }
    },
});

export const { setMode, setAdminFetchData } = adminSlice.actions;
export default adminSlice.reducer;