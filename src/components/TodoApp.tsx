import "./TodoApp.css";
import InputForm from "./InputForm";
import TodosList from "./TodosList";
const TodoApp = () => {
  return (
    <div className="page-content page-container" id="page-content">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Awesome Todo list</h4>
              <InputForm />
              <TodosList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
