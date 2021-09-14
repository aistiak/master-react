import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";
// export default configureStore({
//     reducer : rootReducer ,
// })
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
