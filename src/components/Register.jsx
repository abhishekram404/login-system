import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [isHidden, setHidden] = useState(true);

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [doPasswordsMatch, setPasswordsMatch] = useState(false);
  const generatePassword = () => {
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=[];,./<>?";
    let suggested_password = "";
    for (let i = 0; i <= 16; i++) {
      suggested_password =
        suggested_password +
        characters[
          Math.floor(Math.random(characters.length) * characters.length)
        ];
    }
    setGeneratedPassword(suggested_password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const comparePasswords = () => {
    if (password2 === password) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  useEffect(() => {
    generatePassword();
  }, []);

  useEffect(() => {
    comparePasswords();
  }, [password, password2]);

  const generatePasswordStyle = {
    fontFamily: "monospace",
    fontSize: "12px",
  };

  return (
    <form
      className="card p-4 mx-auto my-4 shadow rounded-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-center text-primary">Register</h2>
      <hr />
      <div className="from-group mb-3">
        <label htmlFor="fullname" className="form-label">
          Full Name
        </label>
        <input id="fullname" type="text" className="form-control" />
      </div>
      <div className="from-group mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input id="username" type="text" className="form-control" />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" id="email" required className="form-control" />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <div className="input-group">
          <input
            type={isHidden ? "password" : "text"}
            id="password"
            required
            onChange={handlePasswordChange}
            // onBlur={handlePasswordComparison}
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
              setPassword2(generatedPassword);
              generatePassword();
              comparePasswords();
            }}
          >
            {generatedPassword}
          </code>
        </div>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="confirm-password" className="form-label">
          Confirm Password
        </label>
        <input
          type={isHidden ? "password" : "text"}
          className="form-control"
          id="confirm-password"
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
          value={password2}
        />
        {!doPasswordsMatch && (
          <div className="form-text text-danger">Passwords do not match.</div>
        )}
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
