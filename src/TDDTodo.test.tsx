import { fireEvent, render, screen } from "@testing-library/react";
import TDDTodo from "./TDDTodo";

describe("create todos", () => {
  const { container } = render(<TDDTodo />);
  const input = screen.getByPlaceholderText("What needs to be done?");
  fireEvent.change(input, { target: { value: "할 일" } });
  fireEvent.keyPress(input, { charCode: 13 });

  it("set item localStorage", () => {
    expect(window.localStorage.getItem("todos")).toMatch("할 일");
    expect(input).toHaveValue("");
    expect(container).toHaveTextContent("할 일");
  });
});
