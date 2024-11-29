export const GetCustomerStatus = (state,action) =>{
    console.log('state,action: ', state,action);
    state.customerStatus?.push(action?.payload)
}
