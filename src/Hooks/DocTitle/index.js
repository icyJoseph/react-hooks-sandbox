import React, { useState, useEffect } from "react";
import "./index.css";

export function DocTitle() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  useEffect(() => {
    document.title = `Clicked ${count}`;
  });

  return (
    <div className="hook">
      <div className="doc-action-buttons">
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

export default DocTitle;
