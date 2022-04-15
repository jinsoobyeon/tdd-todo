interface Todo {
  id: number;
  todo: string;
}

interface Todos {
  todos?: Todo[];
}

function TodoItem({ todos }: Todos) {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>할 일</label>
        <button className="destroy" />
      </div>
      <input className="edit" />
    </li>
  );
}

export default TodoItem;
