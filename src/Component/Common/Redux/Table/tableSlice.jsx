// cartReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { CreateTable, GetTable, GetTableDetails } from './tableAction';
export const initialState = {
  tableDetails: [],
  OrderTable:[]
};
const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    CreateTable,
    GetTable,
    GetTableDetails,
  },
}
);

export const {CreateTable:createTable,GetTable:getTable,GetTableDetails:getTableDetails} = tableSlice.actions;

export default tableSlice.reducer;
