// cartReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { GetCustomerStatus } from './customerStatusAction';
export const initialState = {
  customerStatus: [],
};
const customerStatusSlice = createSlice({
  name: 'customerStatus',
  initialState,
  reducers: {
    GetCustomerStatus
  },
}
);

export const {GetCustomerStatus:getCustomerStatus} = customerStatusSlice.actions;

export default customerStatusSlice.reducer;
