function TodoItem() {
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
