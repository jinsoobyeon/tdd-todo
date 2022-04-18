import { fireEvent, render, screen } from "@testing-library/react";
import TDDTodo from "./TDDTodo";

describe("TDDTodo", () => {
  const { container } = render(<TDDTodo />);
  const input = screen.getByPlaceholderText("What needs to be done?");
  fireEvent.change(input, { target: { value: "할 일" } });
  fireEvent.keyDown(input, { key: "Enter" });

  it("renders todos", () => {
    expect(container).toHaveTextContent("할 일");
    expect(input).toHaveValue("");
  });

  it("set item localStorage", () => {
    expect(window.localStorage.getItem("todos")).toMatch("할 일");
  });
});
