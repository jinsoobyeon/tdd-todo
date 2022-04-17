import { fireEvent, render, screen } from "@testing-library/react";
import TDDTodo from "./TDDTodo";

describe("TDDTodo", () => {
  it("renders tasks", () => {
    const { container } = render(<TDDTodo />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.keyDown(input, { key: "Enter", target: { value: "할 일" } });
    expect(container).toHaveTextContent("할 일");
  });
});
