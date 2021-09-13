import { configureStore , applyMiddleware , createStore } from '@reduxjs/toolkit';
import rootReducer from './RootReducer';
import thunk from 'redux-thunk';

// export default configureStore({
//     reducer : rootReducer ,
// })

const store = createStore(rootReducer,applyMiddleware(thunk)) ;

export default store ;