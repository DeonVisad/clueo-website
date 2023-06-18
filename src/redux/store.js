import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from '../redux/features/allProductsSlice';
import addToCartReducer from '../redux/features/addToCartSlice';

export const store = configureStore({
    reducer: {
        allProducts: allProductsReducer,
        cart: addToCartReducer,
    }
})