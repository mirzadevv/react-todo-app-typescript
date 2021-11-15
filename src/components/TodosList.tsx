interface todoObject {
  id: string;
  title: string | number;
  isCompleted: boolean;
}
interface TodosListProps {
  todos: todoObject[];
  onDelete: (todoId: string) => void;
  onCompletedChange: (todoId: string) => void;
}

const TodosList: React.FC<TodosListProps> = ({
  todos,
  onDelete,
  onCompletedChange,
}) => {
  return (
    <div className="list-wrapper">
      <ul className="d-flex flex-column todo-list">
        {todos.length === 0 && <h5>There are no todos </h5>}
        {todos.map((todo) => (
          <li className={todo.isCompleted ? "completed" : ""} key={todo.id}>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={todo.isCompleted ? true : false}
                  onChange={() => onCompletedChange(todo.id)}
                />
                {todo.title}
                <i className="input-helper"> </i>
              </label>
            </div>
            <i
              onClick={() => onDelete(todo.id)}
              className="remove mdi mdi-close-circle-outline"
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
