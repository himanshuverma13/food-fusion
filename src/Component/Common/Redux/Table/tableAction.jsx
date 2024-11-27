export const CreateTable = (state,action) =>{
    if(state.tableDetails.length <= 0){
        state.tableDetails.push(action.payload);
    }
}

export const GetTable = (state,action) =>{
    // console.log('state,payload: ', state,action);
}


// export const GetTableDetails = (state,action) =>{
//     console.log('state,action: ', state,action);
// }