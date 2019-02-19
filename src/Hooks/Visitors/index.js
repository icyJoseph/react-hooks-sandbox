import React, { useLayoutEffect, useReducer, useRef } from "react";
import Form from "./Form";
import Visitor from "./Visitor";
import reduceVisitor, { addVisitor } from "../../Reducer";

export function Visitors() {
  const [visitors, dispatch] = useReducer(reduceVisitor, []);
  const refName = useRef("");
  const refMessage = useRef("");

  const add = visit => dispatch(addVisitor(visit));

  useLayoutEffect(() => {
    refName.current.focus();
  }, []);

  useLayoutEffect(() => {
    refName.current.value = "";
    refMessage.current.value = "";
  }, [visitors]);

  return (
    <div className="visitors">
      <Form submit={add} refName={refName} refMessage={refMessage} />
      <div>
        {visitors.map(({ id, ...visitor }) => (
          <Visitor key={id} {...visitor} />
        ))}
      </div>
    </div>
  );
}

export default Visitors;
