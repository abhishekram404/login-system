import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout_action } from "../redux/actions/form_actions";
export default function Navbar() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.formReducer);
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light border-bottom px-4 py-3">
      <Link to="/" className="navbar-brand">
        Big Company
      </Link>
      <ul className="navbar-nav  ms-auto">
        <li className="nav-item mx-3">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item mx-3">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item mx-3">
          <Link to="/users" className="nav-link">
            Users
          </Link>
        </li>
        {token ? (
          <li
            className="nav-item mx-3"
            onClick={() => {
              dispatch(logout_action());
              // history.push("/login");
            }}
          >
            <Link
              to="/login"
              className="nav-link text-light bg-danger rounded-pill px-3"
            >
              Logout
            </Link>
          </li>
        ) : (
          <>
            {" "}
            <li className="nav-item mx-3">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/register"
                className="nav-link text-light bg-primary rounded-pill px-3"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
