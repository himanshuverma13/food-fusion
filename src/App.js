import { Provider } from "react-redux";
import "./App.css";
import { store } from "../src/Component/Common/Redux/store";
import RootRoutes from "./Component/Common/RootRoutes/routes";
import ChatBotFunctionality from "./Component/Common/ChatBotPopUp/chatBotInp";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="background-image">
          <RootRoutes/>
        </div>
      </Provider>
    </>
  );
}

export default App;
