import React, { useContext } from "react";
import NumberContext from "../../Context/Numbers";
import { Sum, Diff, Mult, Div } from "./Operations";

export function NumberConsumer(C) {
  const { a, b } = useContext(NumberContext);
  return <C a={a} b={b} />;
}

export const ConsumeNumber = (C, index) => (
  <NumberContext.Consumer key={index}>
    {({ ...props }) => <C {...props} />}
  </NumberContext.Consumer>
);

export function Operations() {
  return (
    <div>
      <code>Context Operations</code>
      {[Sum, Diff, Mult, Div].map((C, index) => ConsumeNumber(C, index))}
    </div>
  );
}

export default Operations;
