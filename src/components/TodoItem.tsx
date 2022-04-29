import { Fragment, useState, useEffect, useCallback, ChangeEvent } from "react";
import { Todos } from "../TDDTodo";

interface TodoList {
  todos: Todos[];
  renderTodos: Function;
}

function TodoItem({ todos, renderTodos }: TodoList) {
  const [editTodo, setEditTodo] = useState<string>("");
  const [editId, setEditId] = useState<number>(0);

  const handleDoubleClick = (event: any, id: number) => {
    if (event.target.className === "edit") {
      return;
    }

    event.target.closest("li").className = "editing";
    event.target.closest("li").querySelector(".edit").focus();
    setEditTodo(event.target.innerText);
    setEditId(id);
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
      event.target.closest("li").className = "";
      renderTodos();
    }
  };

  const handleMouseDown = useCallback(
    (event: any) => {
      if (
        event.target.className === "edit" ||
        event.target.tagName === "LABEL"
      ) {
        return;
      }

      window.localStorage.setItem(
        "todos",
        JSON.stringify(
          todos.map((todo) => {
            if (todo.id === editId) {
              return { id: editId, todo: editTodo.trim() };
            }
            return todo;
          })
        )
      );
      document.querySelectorAll("li").forEach((li) => {
        li.className = "";
      });
      renderTodos();
    },
    [editId, editTodo, renderTodos, todos]
  );

  useEffect(() => {
    document
      .querySelector("html")
      ?.addEventListener("mousedown", handleMouseDown);
  }, [handleMouseDown]);

  return (
    <Fragment>
      {todos?.map((todo) => (
        <li
          key={todo.id}
          onDoubleClick={(event) => handleDoubleClick(event, todo.id)}
        >
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
