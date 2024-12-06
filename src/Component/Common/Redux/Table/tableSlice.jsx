// cartReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { CreateTable , GetTableDetails } from './tableAction';
export const initialState = {
  tableDetails: null,
  OrderTable:{},
};
const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    CreateTable,
    GetTableDetails,
  },
}
);

export const {CreateTable:createTable,GetTableDetails:getTableDetails} = tableSlice.actions;

export default tableSlice.reducer;
