import React, { useState, useRef } from "react";
import NumberContext from "../../Context/Numbers";
import Operations from "./Operations";

export function Calculator({ children }) {
  const left = useRef(0);
  const right = useRef(0);

  const [numbers, setNumbers] = useState({ a: 0, b: 0 });

  const submit = e => {
    e.preventDefault();

    if (left.current.value.trim() && right.current.value.trim()) {
      setNumbers({
        a: parseInt(left.current.value),
        b: parseInt(right.current.value)
      });
    }
    return null;
  };

  return (
    <div className="hook">
      <form onSubmit={submit}>
        <input type="number" className="form-control" ref={left} />
        <input type="number" className="form-control" ref={right} />
        <button className="btn btn-success">Submit</button>
      </form>
      <NumberContext.Provider value={numbers}>
        <Operations />
      </NumberContext.Provider>
    </div>
  );
}

export default Calculator;
