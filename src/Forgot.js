import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";


function Forgot() {

    const [values, setValues] = useState({
        email: "",
        buttonText: "Request password reset link",
    });

    const { email, buttonText } = values;

    const handleChange = 

  return (
    <div className="forgot">
      <h1>Forgot Password</h1>
      <form>
        <h5>Enter the E-mail for your account</h5>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={email}
        />
      </form>
    </div>
  );
}

export default Forgot;
