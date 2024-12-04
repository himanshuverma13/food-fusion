// cartReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity, GetTableNo, SetTableNo, PaymentStatus, PaymentMode, GetPrevOrderByApi, } from './categoryAction';
export const initialState = {
  itemsInCart: [],
  totalCount: 0,
  totalCost: 0,
  TableNo: '',
  status: ''
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    GetTableNo,
    SetTableNo,
    PaymentStatus,
    PaymentMode,
    GetPrevOrderByApi,
  },
}
);

export const { addToCart: add, removeFromCart: remove, incrementQuantity: increment, decrementQuantity: decrement, GetTableNo: TableNo, SetTableNo: SetTable, PaymentStatus: CheckPaymentStatus , PaymentMode : PayMode,GetPrevOrderByApi:getPrevOrderByApi } = cartSlice.actions;

export default cartSlice.reducer;
