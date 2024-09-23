import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authShortner",
    initialState: {
        authData: {
            data: [],
            lastGeneratedData: [],
            isNewOneAdded: false
        }
    },
    reducers: {
        setNavbarToggle(state, action) {
            state.navbar.isNavbarOpened = action.payload;
        },
    },
});

export const { setNavbarToggle } = authSlice.actions;
export default authSlice.reducer;