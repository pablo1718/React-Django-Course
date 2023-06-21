import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";

function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = auth;

  //Logout function
  const Logout = () => {
    dispatch(logout());
  };

  //NAVBAR
  const authLinks = (
    <ul className="navbar-nav ml-auto mt-2">
      <span className="navbar-text mx-3">
        {user ? `Welcome ${user.username}` : ""}
      </span>
      <li className="nav-item mx-3">
        <button
          className="nav-link btn btn-info btn-sm text-light"
          onClick={Logout}
        >
          Logout
        </button>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto mt-2">
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center"
          id="navbarTogglerDemo01"
        >
          <a className="navbar-brand mx-auto" href="#">
            GlobX Company Application
          </a>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    </>
  );
}

export default Header;
