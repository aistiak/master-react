import { todoActionTypes } from "./todo.actionTypes";

export const setTodoState = (data) => {
  return {
    type: todoActionTypes.SET_TODO_STATE,
    payload: data,
  };
};

export const setTodoWithThunk = (data) => async (dispatch,getState) => {
  // some async stuff 
  dispatch({
    type : todoActionTypes.SET_TODO_STATE ,
    payload : data 
  })
}