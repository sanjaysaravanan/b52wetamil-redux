import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import store from "./store/store";

const SampleApp = () => {
  return (
    <div>
      {console.log("Rendering Sample App")}
      <h2>Sample Rendering Check</h2>
    </div>
  );
};

const MovementApp = () => {
  const dispatch = useDispatch();
  const { top, left } = useSelector((state) => state.movementsReducer);

  return (
    <div style={{ textAlign: "center" }}>
      {console.log("Rendering Movements App")}
      <div className="game-container">
        <div
          className="box"
          style={{ top: `${top}px`, left: `${left}px` }}
        ></div>
      </div>
      <div className="arrows">
        <button
          className="arrow arrow-left"
          onClick={() => dispatch({ type: "left" })}
        >
          Left
        </button>
        <button
          className="arrow arrow-top"
          onClick={() => dispatch({ type: "top" })}
        >
          Top
        </button>
        <button
          className="arrow arrow-right"
          onClick={() => dispatch({ type: "right" })}
        >
          Right
        </button>
        <button
          className="arrow arrow-bottom"
          onClick={() => dispatch({ type: "bottom" })}
        >
          Bottom
        </button>
      </div>
    </div>
  );
};

const CountApp = () => {
  // const {
  //   countReducer: { count },
  // } = useSelector((state) => state);

  const dispatch = useDispatch();

  // Consuming the state of the store provided
  const { count } = useSelector((state) => state.countReducer);

  return (
    <div className="card">
      {console.log("Rendering Count App")}
      <button>{count}</button>
      <br />
      <button onClick={() => dispatch({ type: "add" })}>Inc +</button>
      <button onClick={() => dispatch({ type: "sub" })}>Dec -</button>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <CountApp />
      <SampleApp />
      <MovementApp />
    </Provider>
  );
}

export default App;
