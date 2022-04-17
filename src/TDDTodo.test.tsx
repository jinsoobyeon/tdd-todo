import { fireEvent, render, screen } from "@testing-library/react";
import TDDTodo from "./TDDTodo";

describe("TDDTodo", () => {
  it("renders tasks", () => {
    const { container } = render(<TDDTodo />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: "할 일" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(container).toHaveTextContent("할 일");
    expect(input).toHaveValue("");
  });
});
