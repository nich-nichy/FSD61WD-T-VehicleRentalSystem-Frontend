import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from "./slices/vehicleSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        vehicleSlicer: vehicleReducer,
        authShortner: authReducer,
    },
});