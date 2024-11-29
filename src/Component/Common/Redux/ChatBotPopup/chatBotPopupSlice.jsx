import { createSlice } from "@reduxjs/toolkit";
import { GetChatBotTableOrder, SetChatBotTableOrder } from "./chatBotPopupAction";
 
export const initialState = {
  chatbotData : []
}

const chatBotPopUp = createSlice({
  name: "chatbot",
  initialState,
  reducers: {
    SetChatBotTableOrder,
    GetChatBotTableOrder,
  },
});

export const { SetChatBotTableOrder:setChatBotTableOrder, GetChatBotTableOrder:getChatBotTableOrder } = chatBotPopUp.actions;
export default chatBotPopUp.reducer;