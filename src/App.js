import "./App.css";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import store from "./store";
import TodoExample from "./components/TodoExample";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoExample />
      </Provider>
    </div>
  );
}

export default App;
