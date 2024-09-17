import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, toggleDone, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default ToDoList;
