import { useState, useId } from "react";
import "./App.css";

const ToDoForm = ({ addToDo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const id = useId(); // Generate a unique ID

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim() && dueDate) {
      const newTodo = {
        id: `${id}-${Date.now()}`, // Combine useId with Date.now() for uniqueness
        title,
        description,
        dueDate,
        creationDate: new Date().toLocaleDateString(), // Simpler date format
        done: false,
      };
      addToDo(newTodo); // Use addToDo here
      setTitle("");
      setDescription("");
      setDueDate("");
    }
  };

  return (
    <form onSubmit={submitHandler} className="todo-form">
      <label htmlFor="title" className="form-label">
        Title
      </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className="form-input"
      />
      <label htmlFor="description" className="form-label">
        Description
      </label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        className="form-input"
      />
      <label htmlFor="dueDate" className="form-label">
        Due Date
      </label>
      <input
        type="date"
        id="dueDate"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        className="form-input"
      />
      <button type="submit" className="form-button">
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
