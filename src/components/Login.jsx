import React, { useState } from "react";
import { Link } from "react-router-dom";
import { send_login_request } from "../redux/actions/loginActions";
import { useDispatch, useSelector } from "react-redux";
export default function Login() {
  const dispatch = useDispatch();

  const [isHidden, setHidden] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error } = useSelector((state) => state.loginReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      send_login_request({
        email: email,
        password: password,
      })
    );
  };

  return (
    <form
      className="card p-4 mx-auto my-4 shadow rounded-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-center text-primary">Login</h2>
      <hr />
      {error && (
        <>
          {" "}
          <div className="form-text text-light py-2 rounded my-0 text-center bg-danger">
            {error}
          </div>
          <hr />
        </>
      )}

      <div className="form-group mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <div className="input-group">
          <input
            type={isHidden ? "password" : "text"}
            id="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="form-control"
          />
          {password && (
            <button
              className="btn btn-light border"
              onClick={() => {
                setHidden(!isHidden);
              }}
            >
              {/* <span className="glyphicon-icon"></span> */}
              {isHidden ? "Show" : "Hide"}
            </button>
          )}
        </div>
      </div>
      <div className="btn-group shadow-sm">
        <Link to="/" type="submit" className="btn btn-light">
          Cancel
        </Link>
        <button type="submit" className="btn btn-primary ms-auto">
          Login
        </button>
      </div>
    </form>
  );
}
