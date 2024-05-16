import React from "react";
import { useState } from "react";
import "../App.css";

const States = () => {
    const [count, setCount] = useState(0)

    
  return (
    <div>
      <h1>States</h1>

      <div className="card">
        <h1>{count}</h1>
        <button onClick={setCount(count+1)}>Increment</button>
      </div>
    </div>
  );
};

export default States;
