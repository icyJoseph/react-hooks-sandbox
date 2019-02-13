import React, { useState } from "react";

const dryHook = setter => e => setter(e.target.value);

export function Inputs() {
  const [name, setName] = useState("John");
  const [lastName, setLastName] = useState("Doe");

  const handleNameChange = dryHook(setName);
  const handleLastNameChange = dryHook(setLastName);

  return (
    <div className="hook">
      <input
        type="text"
        className="form-control"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        className="form-control"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <p className="text-info">
        Hello {name} {lastName}
      </p>
    </div>
  );
}

export default Inputs;
