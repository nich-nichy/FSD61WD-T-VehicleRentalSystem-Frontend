import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "adminShortner",
    initialState: {
        adminData: {
            mode: 'dashboard',
        }
    },
    reducers: {
        setMode(state, action) {
            state.adminData.mode = action.payload;
        },
    },
});

export const { setMode } = adminSlice.actions;
export default adminSlice.reducer;