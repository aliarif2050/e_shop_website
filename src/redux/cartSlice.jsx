import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : [],
}

const cartSlice = createSlice(
    {
        name:'cart',
        initialState,
        reducers :{
            
        }

    }
)
export const {setProducts} = cartSlice.actions
export default cartSlice.reducer