import { render } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe("List", () => {
  it("renders todos", () => {
    const todos = [
      { id: 1, todo: "할 일" },
      { id: 2, todo: "투 두" },
    ];
    const { container } = render(<TodoItem todos={todos} />);
    expect(container).toHaveTextContent("할 일");
    expect(container).toHaveTextContent("투 두");
  });
});
