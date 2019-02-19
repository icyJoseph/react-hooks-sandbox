import React from "react";

export function Form({ submit, refName, refMessage }) {
  const submitVisitor = e => {
    e.preventDefault();
    const date = new Date().toLocaleString();
    return submit({
      id: Date.now(),
      name: refName.current.value,
      message: refMessage.current.value,
      date
    });
  };

  return (
    <form onSubmit={submitVisitor}>
      <div className="form-group">
        <label htmlFor="message">Your Message</label>
        <textarea
          className="form-control"
          id="message"
          rows="3"
          placeholder="Enter a nice message"
          ref={refMessage}
          autoComplete="off"
        />
        <label htmlFor="visitorName">Name</label>
        <input
          id="visitorName"
          type="text"
          className="form-control"
          aria-describedby="nameHelp"
          placeholder="Enter name"
          ref={refName}
          autoComplete="off"
        />
      </div>
      <button type="button" className="btn btn-success" onClick={submitVisitor}>
        Submit
      </button>
    </form>
  );
}

export default React.memo(Form);
