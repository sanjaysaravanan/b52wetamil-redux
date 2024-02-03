import { createContext, useContext, useState } from "react";
import "./App.css";

const CountContext = createContext(null);

const SampleApp = () => {
  return (
    <div>
      {console.log("Rendering Sample App")}
      <h2>Sample Rendering Check</h2>
    </div>
  );
};

const CountApp = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div className="card">
      {console.log("Rendering Count App")}
      <button>{count}</button>
      <br />
      <button onClick={() => setCount(count + 1)}>Inc +</button>
      <button onClick={() => setCount(count - 1)}>Dec -</button>
    </div>
  );
};

function AppContext() {
  const [count, setCount] = useState(100);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <CountApp />
      <SampleApp />
    </CountContext.Provider>
  );
}

export default AppContext;
