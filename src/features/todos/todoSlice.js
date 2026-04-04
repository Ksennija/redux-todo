import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "all", // all, active, completed
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((t) => !t.completed);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, clearCompleted, setFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
