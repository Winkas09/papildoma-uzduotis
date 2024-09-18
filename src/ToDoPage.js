import { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

const ToDoPage = () => {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((todos) => [todo, ...todos]);
  };

  const toggleDone = (id) => {
    setTodos((todos) => {
      const index = todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        const updatedTodos = [...todos];
        updatedTodos[index] = { ...updatedTodos[index], done: !updatedTodos[index].done };
        return updatedTodos;
      }
      return todos;
    });
  };

  // find item reikes ir indexo

  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <ToDoForm addToDo={addToDo} />
      <ToDoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} />
      <h4>To-Do list page</h4>
    </div>
  );
};
// ontoggleToDo

export default ToDoPage;
