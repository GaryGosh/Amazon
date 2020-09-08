import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast, Zoom } from "react-toastify";
import { Link } from "react-router-dom";
import './Forgot.css';


function Forgot({ history }) {

    const [values, setValues] = useState({
        email: "",
        buttonText: "Request password reset link",
    });

    const { email, buttonText } = values;

    const handleChange = (name) => (event) => {
        console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, buttonText: "Submitting..."});
        axios.post("forgot-password", {email})
        .then((response) => {
            console.log("FORGOT PASSWORD SUCCESS", response);
            toast.success(response.data.message);
            setValues({ ...values, buttonText: "Request password reset link"});
        });
    };

  return (
    <div className="forgot">
        <Link to="/">
        <img
          className="forgot__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
        </Link>
        <ToastContainer draggable={false} transition={Zoom} autoClose={5000} />
        <div className="forgot__container">
            <h1>Forgot Password</h1>
            <form>
                <h5>Enter the E-mail for your account</h5>
                <input
                onChange={handleChange("email")}
                name="email"
                type="email"
                value={email}
                />
                <button
                    type="submit"
                    onClick={clickSubmit}
                    className="forgot__button"
                >
                    {buttonText}
                </button>
            </form>
        </div>
    </div>
  );
}

export default Forgot;
