import { render } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe("List", () => {
  it("renders todos", () => {
    const { container } = render(<TodoItem />);
    expect(container).toHaveTextContent("할 일");
    expect(container).toHaveTextContent("투 두");
  });
});
