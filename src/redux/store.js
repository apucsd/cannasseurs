import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import baseApi from './features/baseApi';
import cartSlice from './features/cart/cartSlice';

const store = configureStore({
        reducer: {
                [baseApi.reducerPath]: baseApi.reducer,
                cart: cartSlice,
        },

        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export default store;
