import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import cartReducers from './cartSlices';
import wishlistReducer from './wishlistSlice';
import CategorySlice from './CategorySlice';
import GenderSlice from './GenderSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        carts: cartReducers,
        wishlist: wishlistReducer,
        categorys: CategorySlice,
        gender: GenderSlice,
    },
});

export default store;