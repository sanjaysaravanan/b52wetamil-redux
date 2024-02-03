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

const CountApp = () => {
  // Consuming the state of the store provided
  // const {
  //   countReducer: { count },
  // } = useSelector((state) => state);

  const dispatch = useDispatch();

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
    </Provider>
  );
}

export default App;
