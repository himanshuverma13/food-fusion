export const CreateTable = (state, action) => {
  // if(state.tableDetails.length <= 0){
  state.tableDetails = action?.payload;
  // }
};

export const GetFooterTableStatus = (state, action) => {
//   state.footerTableStatus = action?.payload;
};

export const GetTableDetails = (state, action) => {
  state.OrderTable = action?.payload;
};
