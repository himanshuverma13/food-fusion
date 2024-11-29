// cartReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { GetPaymentDetails } from './paymentAction';

export const initialState = {
  paymentDetails: [],
};
const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    GetPaymentDetails
  },
}
);

export const {GetPaymentDetails:getpaymentDetails} = paymentSlice.actions;

export default paymentSlice.reducer;
