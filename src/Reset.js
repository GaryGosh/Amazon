import React, { useEffect } from "react";
import { useState } from "react";
import jwt from "jsonwebtoken";
import { toast, ToastContainer, Zoom } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Reset.css";

const Reset = ({ match }) => {
  //props.match from react router dom
  const [values, setValues] = useState({
    name: "",
    token: "",
    newPassword: "",
    buttonText: "Reset password",
  });

  useEffect(() => {
    let token = match.params.token;
    let { name } = jwt.decode(token);
    console.log(name);

    if (token) {
      setValues((v) => ({ ...v, name, token }));
    }
  }, [match.params.token]);

  const { name, token, newPassword, buttonText } = values;

  const handleChange = (event) => {
    setValues({ ...values, newPassword: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting..." });
    axios
      .post("/reset-password", { newPassword, resetPasswordLink: token })
      .then((response) => {
        console.log("RESET PASSWORD SUCCESS", response);
        toast.success(response.data.message);
        setValues({ ...values, buttonText: "Done" });
      })
      .catch((error) => {
        console.log("RESET PASSWORD ERROR", error.response.data);
        toast.error(error.response.data.error);
        setValues({ ...values, buttonText: "Reset Password" });
      });
  };

  return (
    <div className="reset">
      <Link to="/">
        <img
          className="reset__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <ToastContainer draggable={false} transition={Zoom} autoClose={5000} />
      <div className="reset__container">
        <h1>Reset Password</h1>
        <form>
          <h5>Enter a new Password.</h5>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            value={newPassword}
          />
          <button type="submit" onClick={clickSubmit} className="reset__button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reset;
