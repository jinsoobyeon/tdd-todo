import { Fragment } from "react";
import { Todos } from "../TDDTodo";

interface TodoList {
  todos: Todos[];
}

function TodoItem({ todos }: TodoList) {
  const handleDoubleClick = (event: any) => {
    event.target.closest("li").className = "editing";
    event.target.closest("li").querySelector(".edit").focus();
  };

  return (
    <Fragment>
      {todos?.map((todo) => (
        <li key={todo.id} onDoubleClick={handleDoubleClick}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{todo.todo}</label>
            <button className="destroy" />
          </div>
          <input className="edit" value={todo.todo} />
        </li>
      ))}
    </Fragment>
  );
}

export default TodoItem;
