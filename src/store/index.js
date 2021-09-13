import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './RootReducer';


export default configureStore({
    reducer : rootReducer 
})