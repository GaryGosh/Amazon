import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer, Zoom } from "react-toastify";
import './Signup.css';
import { Link } from "react-router-dom";

const Signup = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    password: "",
    buttonText: "Sign up",
  });
  const { buttonText, name, email, password, confirmPassword } = formInputs;

  const handleChange = (evt) => {
    setFormInputs({
      ...formInputs,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    // Avoid page refresh
    evt.preventDefault();

    if (password !== "" && password === confirmPassword) {
      setFormInputs({ ...formInputs, buttonText: "Signing up..." });

      axios
        .post("/signup", {
          name,
          email,
          password,
        })
        .then((res) => {
          console.log("SIGNED UP SUCCESS!!", res);

          setFormInputs({
            name: "",
            password: "",
            email: "",
            buttonText: "Sign up",
          });

          toast.success(res.data.message);
        })
        .catch((err) => {
          if (err && err.response && err.response.data) {
            toast.error(err.response.data.error);
          }

          setFormInputs({
            ...formInputs,
            buttonText: "Sign up",
          });
        });
    } else {
        if(password === "") {
            toast.warn(`Password cannot be blank`);
        } else {
            toast.error(`Password does not match each other`);
        };
    };
  };

  return (
    <div className="signup">
        <Link to="/">
        <img
          className="signup__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <ToastContainer draggable={false} transition={Zoom} autoClose={5000} />
      <div className="signup__container">
        <h1>Sign up</h1>
        <form>
          <h5>Name</h5>
          <input onChange={handleChange} name="name" type="text" value={name} />
          <h5>E-mail</h5>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            value={email}
          />
          <h5>Password</h5>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            value={password}
          />
          <h5>Confirm Password</h5>
          <input
            onChange={handleChange}
            name="confirmPassword"
            type="password"
            value={confirmPassword}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="signup__signupButton"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
