// cartReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { AddChefFoodOrders, AsignChefFoodOrders, CompleteChefOrders } from '../Chef/chefAction';
export const chefInitialState = {
    foodOrders: [],
    status:''
};
const chefSlice = createSlice({
    name: 'chef',
    initialState : chefInitialState,
    reducers: {
        AddChefFoodOrders,
        AsignChefFoodOrders,
        CompleteChefOrders
    },
}
);
console.log('initialState: ', chefInitialState);

export const { AddChefFoodOrders : AddChefFoodOrder,AsignChefFoodOrders:AsignChefFoodOrder,CompleteChefOrders: CompleteChefOrder } = chefSlice.actions;

export default chefSlice.reducer;
