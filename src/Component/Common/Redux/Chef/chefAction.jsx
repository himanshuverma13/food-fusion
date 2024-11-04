export const AddChefFoodOrders = (state, action) => {
};

export const AsignChefFoodOrders = (state, action) => {
    state.foodOrders.push({...action.payload})
};

export const CompleteChefOrders = (state, action) => {
    state.foodOrders.push({...action.payload})
};
