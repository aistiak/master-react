import { todoActionTypes } from "./todo.actionTypes";

export const todoReducerInitialState = {
  todos: [
    {
      id: 1,
      name: "example todo",
      status: "", // 'done' | ''
    },
  ],
};

export const todoReducer = (
  todoReducerState = todoReducerInitialState,
  action
) => {
  switch (action.type) {
    case todoActionTypes.SET_TODO_STATE:
      return { ...todoReducerState, ...action.payload };
    default:
      return { ...todoReducerState };
  }
};
