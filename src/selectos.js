export const selectFilteredTodos = (state) => {
  const { items, filter } = state.todos;

  if (filter === "active") return items.filter((t) => !t.completed);
  if (filter === "completed") return items.filter((t) => t.completed);
  return items;
};
