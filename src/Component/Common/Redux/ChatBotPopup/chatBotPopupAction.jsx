export const SetChatBotTableOrder = (state, action) => {
  state?.chatbotData?.push(action?.payload);
};

export const GetChatBotTableOrder = (state, action) => {
  // console.log('state, action: ', state, action);
};
