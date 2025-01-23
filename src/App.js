import { Provider } from "react-redux";
import "./App.css";
import { store } from "../src/Component/Common/Redux/store";
import RootRoutes from "./Component/Common/RootRoutes/routes";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import FloorTableSelector from "./Component/Common/testing/test";
import NameMobileForm from "./Component/Common/testing/test";
import WebSocketComponent from "./Component/Common/WebSocket/websocket";
import TableSelectionForm from "./Component/Common/testing/test";
function App() {
  return (
    <>
    {/* <ToastContainer /> */}
      {/* <Provider store={store}>
        <div className="background-image">
          <RootRoutes/>
          
        </div>
      </Provider> */}
      <WebSocketComponent/>
    </>
  );
}

export default App;
