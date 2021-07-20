import React, { useState } from "react";
import { Link } from "react-router-dom";
import { send_login_request } from "../redux/actions/form_actions";
import { useDispatch, useSelector } from "react-redux";
import history from "../history";
export default function Login() {
  const dispatch = useDispatch();

  const { token, error } = useSelector((state) => state.formReducer);

  if (token) {
    history.push("/");
  }

  const [isHidden, setHidden] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      {error.loginError && (
        <>
          <div
            className="alert alert-danger d-flex justify-content-center align-items-center"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
              role="img"
              aria-label="Warning:"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div>{error.loginError}</div>
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
          name="email"
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
            name="password"
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
