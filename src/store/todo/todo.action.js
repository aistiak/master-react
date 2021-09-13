import { todoActionTypes } from "./todo.actionTypes";

export const setTodoState = (data) => {
  return {
    type: todoActionTypes.SET_TODO_STATE,
    payload: data,
  };
};
