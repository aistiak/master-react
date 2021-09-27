import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { setTodoState } from "../store/todo/todo.action";
const TodoExample = ({ todos }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <h2>this is todo component</h2>
      <p> map state to props example </p>
      <div>
        <input
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={(e) => {
            console.log(`add todo`);
            console.log(text)
            setText('')
          }}
        >Add</button>
      </div>
      <div>
        {todos &&
          todos?.map((todo, idx) => (
            <div key={idx}>
              {" "}
              {todo.id}. {todo.name}{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { todo: todoReducer } = state;
  const { todos } = todoReducer;
  return {
    todos,
  };
};

// export default TodoExample;
export default connect(mapStateToProps)(TodoExample);
