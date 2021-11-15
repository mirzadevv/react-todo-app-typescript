import "./TodoApp.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputForm from "./InputForm";
import TodosList from "./TodosList";

interface todoObject {
  id: string;
  title: string | number;
  isCompleted: boolean;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<todoObject[]>([]);

  const handleAdd = (todoValue: string | number) => {
    console.log(todoValue);
    const newTodo: todoObject = {
      id: uuidv4(),
      title: todoValue,
      isCompleted: false,
    };
    const cloudTodos = [...todos];
    cloudTodos.push(newTodo);
    setTodos(cloudTodos);
  };

  const handleDelete = (todoId: string) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  return (
    <div className="page-content page-container" id="page-content">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Awesome Todo list</h4>
              <InputForm onAdd={handleAdd} />
              <TodosList todos={todos} onDelete={handleDelete} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
