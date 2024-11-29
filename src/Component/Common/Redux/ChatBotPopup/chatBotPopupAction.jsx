export const SetChatBotTableOrder = (state, action) => {
  state?.chatbotData?.push({...action?.payload});
  let statusData = JSON.parse(localStorage.getItem("orderStatus")) || [];
    let updatedData = [...statusData, action?.payload];
    localStorage.setItem("orderStatus", JSON.stringify(updatedData));

};

export const GetChatBotTableOrder = (state, action) => {
  // console.log('state, action: ', state, action);
};
