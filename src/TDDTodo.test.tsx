import { render } from "@testing-library/react";
import TDDTodo from "./TDDTodo";

describe("TDDTodo", () => {
  it("renders tasks", () => {
    const { container } = render(<TDDTodo />);
    expect(container).toHaveTextContent("할 일");
  });
});
