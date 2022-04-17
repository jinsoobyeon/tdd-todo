import React from "react";

type Todos = {
  todos: string[];
};

function TodoItem({ todos }: Todos) {
  return (
    <React.Fragment>
      {todos.map((todo, index) => (
        <li key={index}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{todo}</label>
            <button className="destroy" />
          </div>
          <input className="edit" />
        </li>
      ))}
    </React.Fragment>
  );
}

export default TodoItem;
