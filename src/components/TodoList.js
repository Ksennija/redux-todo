import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todos/todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todos.filter);
  const filteredTodos =
    filter === "all"
      ? todos
      : filter === "active"
      ? todos.filter((t) => !t.completed)
      : todos.filter((t) => t.completed);

  return (
    <div>
      <span>Todos count: {Object.keys(filteredTodos).length}</span>
      <ul>
        {filteredTodos.map((todo) => (
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
