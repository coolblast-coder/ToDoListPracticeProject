import logo from "./logo.svg";
import "./style/App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="todolist">
            <h1>Things to do</h1>
            <ul className="list-unstyled">
              <li className="list-group-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="todo-item-check-1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="todo-item-check-1"
                  >
                    Take out the trash
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="todo-item-check-2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="todo-item-check-2"
                  >
                    Buy bread
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="todo-item-check-3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="todo-item-check-3"
                  >
                    Teach penguins to fly
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
