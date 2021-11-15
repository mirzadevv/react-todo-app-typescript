const TodosList = () => {
  return (
    <div className="list-wrapper">
      <ul className="d-flex flex-column todo-list">
        <li>
          <div className="form-check">
            <label className="form-check-label">
              <input className="checkbox" type="checkbox" />
              Buy Milk.
              <i className="input-helper"> </i>
            </label>
          </div>
          <i className="remove mdi mdi-close-circle-outline"></i>
        </li>
        <li className="completed">
          <div className="form-check">
            <label className="form-check-label">
              {" "}
              <input className="checkbox" type="checkbox" checked={true} /> Wash
              dishes.
              <i className="input-helper"></i>
            </label>
          </div>{" "}
          <i className="remove mdi mdi-close-circle-outline"></i>
        </li>
      </ul>
    </div>
  );
};

export default TodosList;
