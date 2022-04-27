import { Fragment, useState, ChangeEvent } from "react";
import { Todos } from "../TDDTodo";

interface TodoList {
  todos: Todos[];
  renderTodos: Function;
}

function TodoItem({ todos, renderTodos }: TodoList) {
  const [editTodo, setEditTodo] = useState<string>("");

  const handleDoubleClick = (event: any) => {
    event.target.closest("li").className = "editing";
    event.target.closest("li").querySelector(".edit").focus();
    setEditTodo(event.target.innerText);
  };

  const editChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditTodo(event.target.value);
  };

  const editEnterPres = (event: any, id: number) => {
    if (event.key === "Enter") {
      window.localStorage.setItem(
        "todos",
        JSON.stringify(
          todos.map((todo) => {
            if (todo.id === id) {
              return { id: id, todo: editTodo.trim() };
            }
            return todo;
          })
        )
      );
      renderTodos();
      event.target.closest("li").className = "";
    }
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
          <input
            className="edit"
            value={editTodo || ""}
            onChange={editChange}
            onKeyPress={(event) => editEnterPres(event, todo.id)}
            data-testid="edit"
          />
        </li>
      ))}
    </Fragment>
  );
}

export default TodoItem;
