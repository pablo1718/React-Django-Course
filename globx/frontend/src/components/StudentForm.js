import React, { useState } from "react";
import { createStudent } from "../actions/students";
import { useDispatch } from "react-redux";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    dispatch(createStudent(data));
    //Reset to default form values onSubmit
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="card card-body mt-4 mb-4">
      <h3>Add Student</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            type="text"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
