import { configureStore } from "@reduxjs/toolkit";
import mySlice from './mySlice'
import allProdSlice from "./allProdSlice";

export const store = configureStore({
    reducer: {
        mySlice,
        allProdSlice
    }
})  