import React, { useState } from "react";
import "./index.css";

export function Counter() {
  const [counter, updateCount] = useState(0);
  const increaseCount = () => updateCount(counter + 1);
  const decreaseCount = () => updateCount(counter - 1);

  return (
    <div className="counter-hook">
      <div className="current-count">
        <span className="display-4">Count</span>
        <span className="lead">{counter}</span>
      </div>
      <div className="action-buttons">
        <button
          type="button"
          className="btn btn-success"
          onClick={increaseCount}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={decreaseCount}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
