import React, { useState, useEffect } from "react";

/**
 *  Reasoning:
 *  Remember that React is using Object.is as comparisson
 *  and Object.is behaves like this:
 *
 *  > Object.is(+0, -0)
 *  false
 *  > Object.is(+0, 0)
 *  true
 *  > Object.is(-0, 0)
 *  false
 *
 *  Bailing out of a state update
 *  If you update a State Hook to the same value as the current state,
 *  React will bail out without rendering the children or firing effects.
 *  (React uses the Object.is comparison algorithm.)
 *
 *  Source: https://reactjs.org/docs/hooks-reference.html#useeffect
 *
 *  So in short, when clicking toZero and then toPlusZero, React won't update!
 *
 */

export function ObjectIs() {
  const [zero, setZero] = useState(+0);
  const [count, setCount] = useState(0);

  const toPlusZero = () => setZero(+0);
  const toMinusZero = () => setZero(-0);
  const toZero = () => setZero(0);
  const toNotZero = () => setZero(10);

  useEffect(() => {
    setCount(count + 1);
  }, [zero]);

  return (
    <div className="hook">
      <div className="padded effect-buttons">
        <span>
          useEffect ran: {count} {count === 1 ? "time" : "times"}
        </span>
        <div>
          <button
            type="button"
            className="btn btn-success"
            onClick={toPlusZero}
          >
            To Plus Zero
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={toMinusZero}
          >
            To Minus Zero
          </button>
          <button type="button" className="btn btn-info" onClick={toZero}>
            To Zero
          </button>
          <button type="button" className="btn btn-warning" onClick={toNotZero}>
            Not To Zero
          </button>
        </div>
      </div>
    </div>
  );
}

export default ObjectIs;
