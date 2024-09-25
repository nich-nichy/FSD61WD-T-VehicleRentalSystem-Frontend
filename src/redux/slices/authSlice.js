import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authShortner",
    initialState: {
        authData: {
            admin: {
                isAdmin: false,
            },
            user: {
                isUser: false,
            }
        }
    },
    reducers: {
        setAdmin(state, action) {
            state.authData.admin.isAdmin = action.payload;
        },
        setUser(state, action) {
            state.authData.user.isUser = action.payload;
        },
    },
});

export const { setAdmin, setUser } = authSlice.actions;
export default authSlice.reducer;