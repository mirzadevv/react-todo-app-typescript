import "./App.css";
const App = () => {
  return (
    <div className="page-content page-container" id="page-content">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Awesome Todo list</h4>
              <div className="add-items d-flex">
                <input
                  type="text"
                  className="form-control todo-list-input"
                  placeholder="What do you need to do today?"
                />
                <button className="add btn btn-primary font-weight-bold todo-list-add-btn">
                  Add
                </button>
              </div>
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
                        <input
                          className="checkbox"
                          type="checkbox"
                          checked={true}
                        />{" "}
                        Wash dishes.
                        <i className="input-helper"></i>
                      </label>
                    </div>{" "}
                    <i className="remove mdi mdi-close-circle-outline"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
