export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todosState");
    const parsed = JSON.parse(serializedState);

    if (!serializedState) return undefined;

    return {
      todos: {
        items: parsed.todos || [],
        filter: parsed.filter || "all",
      },
    };
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todosState", serializedState);
  } catch (e) {
    // ignore write errors
  }
};
