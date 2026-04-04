import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todos/todoSlice";
import { selectFilteredTodos } from "../selectos";

function TodoList() {
  const todos = useSelector(selectFilteredTodos);
  const dispatch = useDispatch();

  return (
    <div>
      <span>Todos count: {Object.keys(todos).length}</span>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
