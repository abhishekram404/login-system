import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [isHidden, setHidden] = useState(true);
  const [password, setPassword] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const generatePasswordStyle = {
    fontFamily: "monospace",
    fontSize: "12px",
  };

  return (
    <form
      className="card p-4 mx-auto my-4 shadow rounded-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-center text-primary">Login</h2>
      <hr />
      <div className="form-group mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="form-control"
          placeholder="example@somewhere.com"
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
            onChange={handlePasswordChange}
            value={password}
            className="form-control"
            placeholder="must be stronger than john cena..."
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
        <div className="form-text py-2">
          Use suggested password
          <code
            className=" mx-2"
            style={generatePasswordStyle}
            onClick={() => {
              setPassword(generatedPassword);
            }}
          >
            {generatedPassword}
          </code>
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
