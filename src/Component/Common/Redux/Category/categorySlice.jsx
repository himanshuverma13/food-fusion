// cartReducer.js
import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  GetTableNo,
  SetTableNo,
} from "./categoryAction";
export const initialState = {
  itemsInCart: [],
  totalCount: 0,
  totalCost: 0,
  TableNo: "",
  status: "",
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    GetTableNo,
    SetTableNo,
  },
});

export const {
  addToCart: add,
  removeFromCart: remove,
  incrementQuantity: increment,
  decrementQuantity: decrement,
  GetTableNo: TableNo,
  SetTableNo: SetTable,
} = cartSlice.actions;

export default cartSlice.reducer;
