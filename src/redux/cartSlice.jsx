import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : [],
    totalQuantity:0,
    totalPrice:0
}

const cartSlice = createSlice(
    {
        name:'cart',
        initialState,
        reducers :{
            addToCart(state, action)
            {
                const newItem = action.payload
                const itemIndex = state.products.find((item) => item.id === newItem.id)
                if(itemIndex){
                    itemIndex.quantity++;
                    itemIndex.totalPrice+= newItem.price
                }
                else{
                    state.products.push({
                        id:newItem.id,
                        name:newItem.label,
                        price:newItem.price,
                        quantity: 1,
                        totalPrice :newItem.price,
                        image: newItem.image,
                    })
                }
                state.totalPrice +=newItem.price
                state.totalQuantity ++
            },
            increaseQuantity(state,action){
                const item = state.products.find(p=> p.id === action.payload)
                if(item)
                {
                    item.quantity+=1;
                    state.totalQuantity+=1;
                    state.totalPrice+=item.price;
                }
            },
            decreaseQuantity(state,action){
                const item = state.products.find(p=> p.id === action.payload)
                if(item && item.quantity >1)
                {
                    item.quantity-=1;
                    state.totalQuantity-=1;
                    state.totalPrice-=item.price;
                }
            },
            removeItem(state,action){
                const item = state.products.find(p=> p.id === action.payload)
                if(item && item.quantity >0)
                {
                    state.totalQuantity-=item.quantity;
                    state.totalPrice-=item.quantity*item.price;
                    state.products = state.products.filter(p => p.id !== action.payload)


                }
            },

        }

    }
)
export const {addToCart,increaseQuantity,decreaseQuantity,removeItem} = cartSlice.actions
export default cartSlice.reducer