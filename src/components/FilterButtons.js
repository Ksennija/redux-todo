import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/todos/todoSlice";

function FilterButtons() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.todos.filter);

  const filters = ["all", "active", "completed"];

  return (
    <div style={{ margin: "10px 0" }}>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => dispatch(setFilter(f))}
          style={{
            marginRight: 5,
            fontWeight: currentFilter === f ? "bold" : "normal",
          }}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
