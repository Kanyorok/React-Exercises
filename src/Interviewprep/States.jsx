import React from "react";
import { useState } from "react";
import "../App.css";
import ClassState from "./ClassState";

const States = () => {
  const [count, setCount] = useState(0);
  const [invisible, setInvisible] = useState(false);
  const increment = () => {
    setCount(count + 1);
    setInvisible(!invisible);
  };

  return (
    <div>
      <h1>States</h1>

      <div className="card">
        <div className="states">
          <h1>Functional States</h1>
          <h2>{count}</h2>
          {invisible ? <h2>Visible</h2> : <h2>Invisible</h2>}
          <button onClick={increment}>Change State</button>
        </div>
        <div className="states">
          <ClassState/>
        </div>
      </div>
    </div>
  );
};

export default States;
