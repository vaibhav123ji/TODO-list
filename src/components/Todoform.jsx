function TodoForm({ task, setTask, addTodo }) {
  return (
    <div className="card shadow p-4">

      <h3 className="text-center mb-3">
        Add New Task
      </h3>

      <div className="input-group">

        <input
          type="text"
          className="form-control"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={addTodo}
        >
          Add
        </button>

      </div>

    </div>
  );
}

export default TodoForm;