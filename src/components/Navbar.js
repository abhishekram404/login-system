import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    // <BrowserRouter>
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
          <Link to="/users" className="nav-link">
            Users
          </Link>
        </li>
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
      </ul>
    </div>
    // </BrowserRouter>
  );
}
