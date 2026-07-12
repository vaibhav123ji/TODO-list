function TodoList({ todos, deleteTodo, toggleComplete }) {

  return (
    <div className="mt-4">

      {todos.length === 0 ? (
        <h4 className="text-center text-muted">
          No Tasks Found
        </h4>
      ) : (
        todos.map((todo) => (

          <div
            className="card shadow-sm mb-3"
            key={todo.id}
          >

            <div className="card-body d-flex justify-content-between align-items-center">

              <div>

                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />

                <span
                  className={`ms-3 ${
                    todo.completed ? "text-decoration-line-through" : ""
                  }`}
                >
                  {todo.text}
                </span>

              </div>

              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>

            </div>

          </div>

        ))
      )}

    </div>
  );
}

export default TodoList;