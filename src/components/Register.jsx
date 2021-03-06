import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { send_register_request } from "../redux/actions/form_actions";
import { useDispatch, useSelector } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.formReducer);

  const [isHidden, setHidden] = useState(true);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setAdmin] = useState(false);

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
    doPasswordsMatch &&
      dispatch(
        send_register_request({
          name,
          username,
          email,
          password,
          isAdmin,
        })
      );
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
    cursor: "pointer",
  };

  return (
    <>
      <form
        className="card p-4 mx-auto my-4 shadow rounded-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-primary">Register</h2>
        <hr />
        {error.registerError && (
          <>
            {" "}
            <div className="form-text text-light py-2 rounded my-0 text-center bg-danger">
              {error.registerError}
            </div>
            <hr />
          </>
        )}
        <div className="from-group mb-3">
          <label htmlFor="fullname" className="form-label">
            Full Name
          </label>
          <input
            id="fullname"
            type="text"
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div className="from-group mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="form-control"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
                {isHidden ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#3d3d3d"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#3d3d3d"
                    viewBox="0 0 16 16"
                  >
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                  </svg>
                )}
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
        <div className="mb-3 form-check">
          <label htmlFor="isAdmin" className="form-check-label">
            I want admin privileges.
          </label>
          <input
            type="checkbox"
            id="isAdmin"
            className="form-check-input"
            checked={isAdmin}
            onChange={(e) => setAdmin(!isAdmin)}
          />
        </div>
        <div className="btn-group shadow-sm">
          <Link to="/" type="button" className="btn btn-light">
            Cancel
          </Link>
          <button
            type="submit"
            className={
              doPasswordsMatch
                ? "btn btn-primary ms-auto"
                : "btn btn-primary disabled ms-auto"
            }
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}
