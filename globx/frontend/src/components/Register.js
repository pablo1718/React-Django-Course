import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/auth";
import { createMessage } from "../actions/messages";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      dispatch(createMessage({ passwordsNotMatch: "Passwords not match" }));
    } else {
      const newStudent = {
        username,
        email,
        password,
      };
      dispatch(register(newStudent));
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Register</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <div className="form-group mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
