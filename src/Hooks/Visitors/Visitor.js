import React from "react";

export function Visitor({ name, date, message }) {
  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-header">{date}</div>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{message}</p>
      </div>
    </div>
  );
}

export default React.memo(Visitor);
