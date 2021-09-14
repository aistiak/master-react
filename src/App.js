import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import SagaExample from "./pages/saga-example";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SagaExample/>
      </Provider>
    </div>
  );
}

export default App;
