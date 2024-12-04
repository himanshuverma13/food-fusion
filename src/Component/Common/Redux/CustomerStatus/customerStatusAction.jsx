export const GetCustomerStatus = (state,action) =>{
    state.customerStatus?.push(action?.payload)
}
