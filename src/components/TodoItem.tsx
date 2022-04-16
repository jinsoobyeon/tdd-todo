import React from "react";

export const todos = [
  { id: 1, todo: "할 일" },
  { id: 2, todo: "투 두" },
];

function TodoItem() {
  return (
    <React.Fragment>
      {todos.map((todo, index) => (
        <li key={index}>
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
