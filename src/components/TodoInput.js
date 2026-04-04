import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, clearCompleted } from "../features/todos/todoSlice";

function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };

  const handleClear = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleClear}>Clear completed</button>
    </div>
  );
}

export default TodoInput;
