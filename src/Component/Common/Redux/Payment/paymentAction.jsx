export const GetPaymentDetails = (state,action) =>{
    // if(state.paymentDetails.length <= 0){
        state.paymentDetails.push(action.payload);
    // }
}

