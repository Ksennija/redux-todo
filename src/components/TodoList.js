import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTodo,
  deleteTodo,
  updateTodo,
} from "../features/todos/todoSlice";
import { selectFilteredTodos } from "../selectos";

function TodoList() {
  const todos = useSelector(selectFilteredTodos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;
    dispatch(updateTodo({ id, text: editText }));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  return (
    <div>
      <span>Todos count: {Object.keys(todos).length}</span>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" ? saveEdit(todo.id) : null
                  }
                />
                <button onClick={() => saveEdit(todo.id)}>💾</button>
                <button onClick={cancelEdit}>❌</button>
              </>
            ) : (
              <>
                <span
                  onClick={() => dispatch(toggleTodo(todo.id))}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer",
                  }}
                >
                  {todo.text}
                </span>
                <button onClick={() => startEditing(todo)}>✏️</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  🗑️
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
