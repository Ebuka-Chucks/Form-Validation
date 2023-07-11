import React, { useState } from "react";
import "../styles/Form.css";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (username.length < 5) {
      validationErrors.username =
        "Username must be at least 5 characters long.";
    }

    if (!emailPattern.test(email)) {
      validationErrors.email = "Invalid email address.";
    }

    if (password.length < 7) {
      validationErrors.password =
        "Password must be at least 7 characters long.";
    }

    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
      resetForm();
    }
  };

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="one">
      <h1 className="header mt-3">Register</h1>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          className="inputs mt-3 mb-2 ps-3 ms-2 "
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className="inputs mt-3 mb-2 ps-3 "
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          className="inputs"
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button id="btn1" type="button" onClick={handleShowPassword}>
          {showPassword ? (
            <p className="hide">
              {" "}
              <BiSolidHide />{" "}
            </p>
          ) : (
            <p className="show">
              <BiSolidShow />
            </p>
          )}
        </button>
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          className="inputs"
          type={showConfirmPassword ? "text" : "password"}
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button id="btn1" type="button" onClick={handleShowConfirmPassword}>
          {showConfirmPassword ? (
            <p className="hide">
              {" "}
              <BiSolidHide />{" "}
            </p>
          ) : (
            <p className="show">
              <BiSolidShow />
            </p>
          )}
        </button>
      </div>
      <button type="submit" id="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
