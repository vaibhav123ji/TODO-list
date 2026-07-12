import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Todo
  function addTodo() {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  }

  // Delete Todo
  function deleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  // Delete All
  function deleteAll() {
    setTodos([]);
  }

  // Complete Todo
  function toggleComplete(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );

    setTodos(updatedTodos);
  }

  return (
    <div className="container mt-5">

      <TodoForm
        task={task}
        setTask={setTask}
        addTodo={addTodo}
      />

      <div className="d-flex justify-content-between align-items-center mt-4">

        <h4>Total Tasks : {todos.length}</h4>

        <button
          className="btn btn-warning"
          onClick={deleteAll}
        >
          Delete All
        </button>

      </div>

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />

    </div>
  );
}

export default Todo;