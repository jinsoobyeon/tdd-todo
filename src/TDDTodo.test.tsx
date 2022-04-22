import { fireEvent, render, screen } from "@testing-library/react";
import TDDTodo from "./TDDTodo";
import TodoItem from "./components/TodoItem";

describe("CRUD todo", () => {
  it("init", () => {
    render(<TDDTodo />);
    const input = screen.getByPlaceholderText("What needs to be done?");

    expect(input).toHaveFocus();
  });

  it("create todo", () => {
    const { container } = render(<TDDTodo />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: "할 일" } });
    fireEvent.keyPress(input, { charCode: 13 });

    expect(input).toHaveFocus();
    expect(window.localStorage.getItem("todos")).toMatch("할 일");
    expect(input).toHaveValue("");
    expect(container).toHaveTextContent("할 일");
  });

  it("update todo", () => {
    render(<TodoItem todos={[{ id: 1, todo: "할 일" }]} />);
    const li = screen.getAllByRole("listitem");
    const edit = screen.getByDisplayValue("할 일");
    fireEvent.doubleClick(li[0]);

    expect(edit).toHaveFocus();
  });
});
