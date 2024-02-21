import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./Root-reducer"; 

export const store = configureStore({
    reducer: RootReducer,
})