import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addToCart(state, action) {
                const newItem = action.payload
                const itemIndex = state.products.find((item) => item.id === newItem.id)
                if (itemIndex) {
                    itemIndex.quantity += newItem.quantity;
                    itemIndex.totalPrice += newItem.price * newItem.quantity
                }
                else {
                    state.products.push({
                        id: newItem.id,
                        name: newItem.label,
                        price: newItem.price,
                        quantity: newItem.quantity,
                        totalPrice: newItem.price * newItem.quantity,
                        image: newItem.image,
                    })
                }
                state.totalPrice += newItem.price * newItem.quantity
                state.totalQuantity += newItem.quantity
            },
            increaseQuantity(state, action) {
                const item = state.products.find(p => p.id === action.payload)
                if (item) {
                    item.quantity += 1;
                    state.totalQuantity += 1;
                    state.totalPrice += item.price;
                }
            },
            decreaseQuantity(state, action) {
                const item = state.products.find(p => p.id === action.payload)
                if (item && item.quantity > 1) {
                    item.quantity -= 1;
                    state.totalQuantity -= 1;
                    state.totalPrice -= item.price;
                }
            },
            removeItem(state, action) {
                const item = state.products.find(p => p.id === action.payload)
                if (item && item.quantity > 0) {
                    state.totalQuantity -= item.quantity;
                    state.totalPrice -= item.quantity * item.price;
                    state.products = state.products.filter(p => p.id !== action.payload)


                }
            },
            clearCart(state) {
                state.products = [];
                state.totalQuantity = 0;
                state.totalPrice = 0;
            }

        }

    }
)
export const { addToCart, increaseQuantity, decreaseQuantity, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer