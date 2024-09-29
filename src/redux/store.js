import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from "./slices/vehicleSlice";
import authReducer from "./slices/authSlice";
import adminReducer from "./slices/adminSlice";

export const store = configureStore({
    reducer: {
        vehicleSlice: vehicleReducer,
        authSlice: authReducer,
        adminSlice: adminReducer,
    },
});