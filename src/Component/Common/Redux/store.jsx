import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Category/categorySlice';
import chefReducer from './Chef/chefSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    chef: chefReducer,
  },
  
});