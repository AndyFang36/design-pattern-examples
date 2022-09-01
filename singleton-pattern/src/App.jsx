import {useState} from "react";
import counter from "./counter";
import "./App.css";

export const App = () => {
  const [count, setCount] = useState(counter.getCount);

  const decrease = () => {
    counter.decrement()
    setCount(counter.getCount());
  };

  const increase = () => {
    counter.increment()
    setCount(counter.getCount());
  };

  return (
    <div id="App">
      <h1 align="center">Count: {count}</h1>
      <hr/>
      <div className="btn-group">
        <button onClick={decrease} className="blue">Decrease</button>
        <button onClick={increase} className="red">Increase</button>
      </div>
    </div>
  );
};
