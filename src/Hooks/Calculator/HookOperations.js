import React, { useContext } from "react";
import NumberContext from "../../Context/Numbers";
import { Sum, Diff, Mult, Div } from "./Operations";

export function NumberConsumer(C, index) {
  const { a, b } = useContext(NumberContext);
  return <C key={index} a={a} b={b} />;
}

export function HookOperations() {
  return (
    <div>
      <code>useContext Hook Operations</code>
      {[Sum, Diff, Mult, Div].map((C, index) => NumberConsumer(C, index))}
    </div>
  );
}

export default HookOperations;
