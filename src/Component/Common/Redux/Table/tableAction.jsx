export const CreateTable = (state, action) => {
  state.tableDetails = action?.payload;
};


export const GetTableDetails = (state, action) => {
  state.OrderTable = action?.payload;
};
