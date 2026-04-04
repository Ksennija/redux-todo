import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Redux Todo App</h1>
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </div>
  );
}

export default App;
