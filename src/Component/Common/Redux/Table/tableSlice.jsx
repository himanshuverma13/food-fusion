// cartReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { CreateTable,GetTable } from './tableAction';
export const initialState = {
  tableDetails: [],
};
const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    CreateTable,
    GetTable,
  },
}
);

export const {CreateTable:createTable,GetTable:getTable} = tableSlice.actions;

export default tableSlice.reducer;
