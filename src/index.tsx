import React from "react";
import ReactDOM from "react-dom";
import "todomvc-app-css/index.css";
import "todomvc-common/base.css";
import TDDTodo from "./TDDTodo";

ReactDOM.render(
  <React.StrictMode>
    <TDDTodo />
  </React.StrictMode>,
  document.getElementById("root")
);
