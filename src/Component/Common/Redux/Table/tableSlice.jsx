// cartReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { CreateTable,  GetFooterTableStatus , GetTableDetails } from './tableAction';
export const initialState = {
  tableDetails: null,
  OrderTable:{},
};
const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    CreateTable,
    GetFooterTableStatus,
    GetTableDetails,
  },
}
);

export const {CreateTable:createTable,GetFooterTableStatus:getFooterTableStatus,GetTableDetails:getTableDetails} = tableSlice.actions;

export default tableSlice.reducer;
