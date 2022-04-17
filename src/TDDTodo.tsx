import { useState, ChangeEvent, KeyboardEvent } from "react";
import TodoItem from "./components/TodoItem";

function TDDTodo() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleEnterDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <section className="todoapp">
      <div>
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus={true}
            value={todo}
            onChange={handleChange}
            onKeyDown={handleEnterDown}
          />
        </header>
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            <TodoItem todos={todos} />
          </ul>
        </section>
      </div>
    </section>
  );
}

export default TDDTodo;
