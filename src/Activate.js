import React, { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import './Activate.css';

const Activate = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    token: "",
    show: true,
  });

  useEffect(() => {
    let token = match.params.token;
    console.log(token);
    if (token) {
      let { name } = jwt.decode(token);
      setValues((v) => ({ ...v, name, token }));
    }
  }, [match.params.token]);

  const { name, token } = values;

  const clickSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/account-activation", { token })
      .then((response) => {
        console.log("ACCOUNT ACTIVATION", response);
        setValues({ ...values, show: false });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log("ACCOUNT ACTIVATION ERROR", error.response.data.error);
        toast.error(error.response.data.error);
      });
  };

  return (
    <div className="activate">
      <Link to="/">
        <img
          className="activate__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <ToastContainer draggable={false} transition={Zoom} autoClose={5000} />
      <div className="activate__container">
        <h1>Hey {name}, Ready to activate your account?</h1>
        <button className="activate__button" onClick={clickSubmit}>
          Activate Account
        </button>
      </div>
    </div>
  );
};

export default Activate;
