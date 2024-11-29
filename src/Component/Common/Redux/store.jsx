import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Category/categorySlice";
import chefReducer from "./Chef/chefSlice";
import tableReducer from "./Table/tableSlice";
import customerStatusReducer from "./CustomerStatus/customerStatusSlice";
import chatbotPopUpReducer from "./ChatBotPopup/chatBotPopupSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    chef: chefReducer,
    table: tableReducer,
    customerStatus: customerStatusReducer,
    chatbot:chatbotPopUpReducer
  },
});
