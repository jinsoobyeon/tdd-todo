import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe("CRUD todo", () => {
  it("update todo", () => {
    const { container } = render(
      <TodoItem todos={[{ id: 1, todo: "할 일" }]} />
    );
    const li = screen.getAllByRole("listitem");
    const edit = screen.getByRole("textbox");
    fireEvent.doubleClick(li[0]);

    expect(edit).toHaveFocus();

    fireEvent.change(edit, { target: { value: "투 두" } });
    fireEvent.keyPress(edit, { charCode: 13 });

    expect(window.localStorage.getItem("todos")).toMatch("투 두");
    expect(container).toHaveTextContent("투 두");
  });
});
