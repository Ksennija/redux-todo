import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredTodos = createSelector(
  [(state) => state.todos.items, (state) => state.todos.filter],
  (items, filter) => {
    if (filter === "active") return items.filter((t) => !t.completed);
    if (filter === "completed") return items.filter((t) => t.completed);
    return items;
  }
);
