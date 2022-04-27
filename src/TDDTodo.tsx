import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import TodoItem from "./components/TodoItem";

export interface Todos {
  id: number;
  todo: string;
}

function TDDTodo() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const renderTodos = () => {
    setTodos(JSON.parse(String(window.localStorage.getItem("todos"))));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      todos
        ? window.localStorage.setItem(
            "todos",
            JSON.stringify([
              ...todos,
              {
                id: Math.random() * 100000000000000000,
                todo: todo.trim(),
              },
            ])
          )
        : window.localStorage.setItem(
            "todos",
            JSON.stringify([
              {
                id: Math.random() * 100000000000000000,
                todo: todo.trim(),
              },
            ])
          );
      renderTodos();
      setTodo("");
    }
  };

  useEffect(() => {
    renderTodos();
  }, []);

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
            onKeyPress={handleEnterPress}
          />
        </header>
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            <TodoItem todos={todos} renderTodos={renderTodos} />
          </ul>
        </section>
      </div>
    </section>
  );
}

export default TDDTodo;
