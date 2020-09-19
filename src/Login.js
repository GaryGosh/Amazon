import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { authenticate, isAuth } from "./utils/helpers";
import { withRouter } from 'react-router-dom';


const Login = ({ history }) => {
    const [formInputs, setFormInputs] = useState({
        email: "",
        password: "",
        buttonText: "Sign in",
    });

    const { buttonText, email, password } = formInputs;

    const handleChange = (evt) => {
        setFormInputs({
          ...formInputs,
          [evt.target.name]: evt.target.value,
        });
    };


    const handleSubmit = (evt) => {
        // Avoid page refresh
        evt.preventDefault();
        setFormInputs({ ...formInputs, buttonText: "Singing in..." });

        axios.post("/signin", {
            email,
            password,
        }).then((res) => {
            console.log("Signed in . Yaay!!", res);
            toast.success(res.data.message);
            setTimeout(() => {
              history.push("/");
            }, 2500);
            authenticate(res, () => {
              console.log("Done niggah");
              /* this.props.history.push("/"); */
                setFormInputs({
                    ...formInputs,
                    name: "",
                    email: "",
                    password: "",
                    buttonText: "Signed in",
                });
                /* isAuth() ? history.push("/") : history.push("/signin"); */
                console.log("Done pushing"); 
            });
        }).catch((err) => {
            if(err && err.response && err.response.data) {
                toast.error(err.response.data.error);
            }

            setFormInputs({
                ...formInputs,
                buttonText: "Sign in",
            });
        });
    };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <ToastContainer />
      <div className="login__container">
      <h1>Sign in</h1>
      <form>
          <h5>E-mail</h5>
          <input onChange={handleChange}
          name="email"
          type="email"
          value={email} />
          <h5>Password</h5>
          <input onChange={handleChange}
          name="password"
          type="password"
          value={password} />
          <button type="submit" onClick={handleSubmit} className="login__signInButton">{buttonText}</button>
      </form>
      <Link to="/auth/password/forgot" className="login__forgotPassword">
        Forgot Password
      </Link>
      <p>
      By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
      </p>
      <Link to="/signup">
        <button className="login__registerButton">Create your Amazon Account</button>
      </Link>
      </div>
      
    </div>
  );
}

export default withRouter(Login);
