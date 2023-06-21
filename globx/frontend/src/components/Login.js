import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Login</h2>
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
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="form-group mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
