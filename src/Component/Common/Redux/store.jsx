import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Category/categorySlice";
import chefReducer from "./Chef/chefSlice";
import tableReducer from "./Table/tableSlice";
import paymentReducer from "./Payment/paymentSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    chef: chefReducer,
    table: tableReducer,
    payment: paymentReducer,
  },
});
