import React from "react";
import { Todos } from "../TDDTodo";

interface TodoList {
  todos: Todos[];
}

function TodoItem({ todos }: TodoList) {
  return (
    <React.Fragment>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{todo.todo}</label>
            <button className="destroy" />
          </div>
          <input className="edit" />
        </li>
      ))}
    </React.Fragment>
  );
}

export default TodoItem;
