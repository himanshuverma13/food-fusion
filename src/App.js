import { Provider } from "react-redux";
import "./App.css";
import { store } from "../src/Component/Common/Redux/store";
import RootRoutes from "./Component/Common/RootRoutes/routes";
import Loader from "./Component/Common/Loader/loader";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="background-image">
          <RootRoutes/>
          {/* <Loader/> */}
        </div>
      </Provider>
    </>
  );
}

export default App;
