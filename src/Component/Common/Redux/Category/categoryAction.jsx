
export const addToCart = (state, action) => {
    console.log('state, action: ', state, action.payload.status);
    // const itemInCart = state.itemsInCart.find((item) => item.id === action.payload.id ||item.tableNo === action.payload.tableNo    );
    const checkTableNo = state.itemsInCart.find((item) => item.tableNo === action.payload.tableNo);
    if (checkTableNo) {
        const checkID = state.itemsInCart.find((item) => item.id === action.payload.id);
        if (checkID) {
            checkTableNo.quantity += 1;
            state.totalCount += 1;
        }
        else {
            state.itemsInCart.push({ ...action.payload, quantity: 1, status: action.payload.status });
            state.totalCount += 1;
        }
    }
    else {
        state.itemsInCart.push({ ...action.payload, quantity: 1, status: action.payload.status });
        state.totalCount += 1;
    }
};

export const removeFromCart = (state, action) => {
    const index = state.itemsInCart.findIndex((item) => item.id === action.payload);
    if (index !== -1) {
        state.totalCount -= state.itemsInCart[index].quantity;
        state.totalCost -= state.itemsInCart[index].price * state.itemsInCart[index].quantity;
        state.itemsInCart.splice(index, 1);
    }
};

export const incrementQuantity = (state, action) => {
    const item = state.itemsInCart.find((item) => item.id === action.payload);
    if (item) {
        item.quantity += 1;
        state.totalCount += 1;
        state.totalCost += item.price;
    }
};

export const decrementQuantity = (state, action) => {
    const item = state.itemsInCart.find((item) => item.id === action.payload);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalCount -= 1;
        state.totalCost -= item.price;
    } else if (item && item.quantity === 1) {
        const index = state.itemsInCart.findIndex((i) => i.id === action.payload);
        state.totalCount -= 1;
        state.totalCost -= item.price;
        state.itemsInCart.splice(index, 1);
    }
};

export const GetTableNo = (state, action) => {
    state.TableNo = action.payload;
};

export const SetTableNo = (state, action) => {
    state.TableNo = 0;
};


export const PaymentStatus = (state, action) => {
    console.log('action: ', action);

};

