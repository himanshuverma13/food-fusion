import { Provider } from "react-redux";
import "./App.css";
import { store } from "../src/Component/Common/Redux/store";
import RootRoutes from "./Component/Common/RootRoutes/routes";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer />
      <Provider store={store}>
        <div className="background-image">
          <RootRoutes/>

        </div>
      </Provider>
    </>
  );
}

export default App;
