import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            "id" : "1",
            "title" : "Forest Grove",
            "image" : "forestgrove",
            "ingredients" : "Oak Moss, Amber ",
            "price" : 24.99,
            "quantity": 1
        },
        {
            "id" : "2",
            "title" : "Date Night",
            "image" : "datenight",
            "ingredients" : "Oak Moss, Amber ",
            "price" : 24.99,
            "quantity": 1
        },
        {
            "id" : "3",
            "title" : "Golden Hour",
            "image" : "goldenhour",
            "ingredients" : "Oak Moss, Amber ",
            "price" : 24.99,
            "quantity": 1
        },
        {
            "id" : "4",
            "title" : "Laundry Day",
            "image" : "laundry",
            "ingredients" : "Oak Moss, Amber ",
            "price" : 24.99,
            "quantity": 1
        },
        {
            "id" : "5",
            "title" : "Ocean Mist",
            "image" : "oceanmist",
            "ingredients" : "Oak Moss, Amber ",
            "price" : 24.99,
            "quantity": 1
        },
    ]
}

const allProductsSlice = createSlice({
    name: "allProducts",
    initialState,
    reducers: {
        allProducts: (state = initialState) => {
            return state;
        }
    }
})

export const {allProducts} = allProductsSlice.actions;

export default allProductsSlice.reducer;