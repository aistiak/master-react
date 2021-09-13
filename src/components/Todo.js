import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodoState } from "../store/todo/todo.action";
const Todo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const onAddTodo = () => {
    if (todo) {
      const newTodos = [
        ...todos,
        {
          id: parseInt(Math.random() * 100),
          name: todo,
          status: "",
        },
      ];
      dispatch(
        setTodoState({
          todos: newTodos,
        })
      );
      setTodo("");
    }
  };
  return (
    <div>
      <h2>this is todo component</h2>

      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={onAddTodo}>add</button>
      {todos?.map((todo) => (
        <div key={todo.id}>
          {" "}
          {todo.id} {". "} {todo.name}
        </div>
      ))}
    </div>
  );
};

export default Todo;
