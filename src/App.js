import { Provider } from "react-redux";
import "./App.css";
import { store } from "../src/Component/Common/Redux/store";
import RootRoutes from "./Component/Common/RootRoutes/routes";
import Testing from "./Component/Common/testing/test";


function App() {
  return (
    <>
      <Provider store={store}>
        <div className="background-image">
          <RootRoutes/>
          {/* <Testing/> */}
        </div>
      </Provider>
    </>
  );
}

export default App;
