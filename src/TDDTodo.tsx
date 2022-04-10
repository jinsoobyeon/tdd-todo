function TDDTodo() {
  return (
    <section className="todoapp">
      <div>
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus={true}
          />
        </header>
      </div>
    </section>
  );
}

export default TDDTodo;
