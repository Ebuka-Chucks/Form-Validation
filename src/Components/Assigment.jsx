import React, { useState } from "react";
import "../styles/assigment.css";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Assigment = () => {
  const [person, setPerson] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(person);

    const validationErrors = {};

    if (person.username.length < 5) {
      validationErrors.username =
        "Username must be at least 5 characters long.";
    }
    if ((person.username = "")) {
      validationErrors.username = "Username cannot be Empty";
    }
    if (!person.email.includes("@")) {
      validationErrors.email =
        "Email is not Valid, please add a Valid Email Address";
    }
    if (person.password.length < 7) {
      validationErrors.password =
        "Password must be more than 7 characters long.";
    }
    if (person.password2 !== person.password) {
      validationErrors.password2 = "Passwords do not match.";
    }
    setPerson({
      username: "",
      email: "",
      password: "",
      password2: "",
    });
    setErrors(validationErrors);
    setTimeout(() => {
      setErrors({});
    }, 5000);
    // console.log(errors);
  };
  const [show, setShow] = useState(true);
  const toggleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const [show2, setShow2] = useState(true);
  const toggleShow2 = (e) => {
    e.preventDefault();
    console.log("here");
    setShow2(!show2);
  };
  return (
    <div className="container">
      <form onChange={handleChange}>
        <h1>Registration Form</h1>
        <div className="one"></div>
        <div className="two">
          <div className="child1">
            <label> Username:</label>
            <p>{errors.username}</p>

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={person.username || ""}
              onChange={handleSubmit}
            />
          </div>

          <div className="child2">
            <label> Email:</label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={person.email || ""}
              onChange={handleSubmit}
            />
            <p>{errors.email}</p>
          </div>
          <div className="king">
            <div className="child3">
              <label> Password:</label>
              <input
                type={show ? "password" : "text"}
                name="password"
                placeholder="Password"
                value={person.password || ""}
                onChange={handleSubmit}
              />
              <button onClick={toggleShow}>
                {" "}
                {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>

              <p>{errors.password}</p>
            </div>
          </div>
          <div className="child4">
            <input
              type={show2 ? "password" : "text"}
              name="password2"
              placeholder="Confirm Password"
              value={person.password2 || ""}
              onChange={handleSubmit}
            />
            <button onClick={toggleShow2}>
              {" "}
              {show2 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
            <p>{errors.password2}</p>
          </div>
        </div>
        <button className="register" type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Assigment;
