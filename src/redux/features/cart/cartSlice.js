import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        items: [],
};

const cartSlice = createSlice({
        name: 'cart',
        initialState,
        reducers: {
                addToCart(state, action) {
                        const item = action.payload;
                        const existingItem = state.items.find((cartItem) => cartItem.id === item.id);

                        if (existingItem) {
                                existingItem.quantity += 1;
                        } else {
                                state.items.push({ ...item, quantity: 1 });
                        }
                },

                quantityIncrement(state, action) {
                        const itemId = action.payload;
                        const item = state.items.find((cartItem) => cartItem.id === itemId);
                        item.quantity += 1;
                },

                quantityDecrement(state, action) {
                        const itemId = action.payload;
                        const item = state.items.find((cartItem) => cartItem.id === itemId);
                        item.quantity -= 1;

                        if (item.quantity === 0) {
                                state.items = state.items.filter((cartItem) => cartItem.id !== itemId);
                        }
                },
                removeFromCart(state, action) {
                        const itemId = action.payload;
                        state.items = state.items.filter((item) => item.id !== itemId);
                },

                clearCart(state) {
                        state.items = [];
                },
        },
});

export const { addToCart, updateCartItem, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
