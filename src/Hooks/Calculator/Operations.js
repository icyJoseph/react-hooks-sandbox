import React from "react";

export const Sum = ({ a, b }) => <span>Sum: {a + b}</span>;
export const Diff = ({ a, b }) => <span>Diff: {a - b}</span>;
export const Mult = ({ a, b }) => <span>Mult: {a * b}</span>;
export const Div = ({ a, b }) => (
  <span>Div: {b === 0 ? "Infinity" : (a / b).toFixed(2)}</span>
);
