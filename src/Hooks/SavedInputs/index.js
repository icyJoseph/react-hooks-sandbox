import React, { useEffect, useState } from "react";

const dryHook = setter => e => setter(e.target.value);

export function SavedInputs() {
  const [name, setName] = useState(() => localStorage.getItem("name") || "");
  const [lastName, setLastName] = useState(
    () => localStorage.getItem("lastName") || ""
  );

  const handleNameChange = dryHook(setName);
  const handleLastNameChange = dryHook(setLastName);

  useEffect(() => {
    // instead of savivng on componentDidUpdate
    localStorage.setItem("name", name);
    localStorage.setItem("lastName", lastName);
  }, [lastName]); // runs only when the lastName has changed
  // so we save to localStorage only when user changes lastName

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
      <small className="text-muted">Only saves when lastName changes.</small>
    </div>
  );
}

export default SavedInputs;
