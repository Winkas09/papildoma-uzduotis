import { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

const ToDoPage = () => {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((todos) => [todo, ...todos]);
  };

  const toggleDone = (id) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <ToDoForm addToDo={addToDo} />
      <ToDoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} />
      <h4>This To-Do list page was created by Edvinas</h4>
    </div>
  );
};

export default ToDoPage;
