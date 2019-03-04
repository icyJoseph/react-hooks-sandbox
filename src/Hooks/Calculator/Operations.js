import React from "react";
import NumberContext from "../../Context/Numbers";

export const Sum = ({ a, b }) => <span>Sum: {a + b}</span>;
export const Diff = ({ a, b }) => <span>Diff: {a - b}</span>;
export const Mult = ({ a, b }) => <span>Mult: {a * b}</span>;
export const Div = ({ a, b }) => (
  <span>Div: {b === 0 ? "Infinity" : a / b}</span>
);

export const ConsumeNumber = (C, index) => (
  <NumberContext.Consumer key={index}>
    {({ ...props }) => <C {...props} />}
  </NumberContext.Consumer>
);

export function Operations() {
  return [Sum, Diff, Mult, Div].map((C, index) => ConsumeNumber(C, index));
}

export default Operations;
