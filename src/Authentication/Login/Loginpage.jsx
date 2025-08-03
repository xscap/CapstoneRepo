import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Form = () => {
  const navigate = useNavigate();
  return (
    <form className="form-control" action>
      <p className="title">Login</p>
      <div className="input-field">
        <input required className="input" type="text" />
        <label className="label" htmlFor="input">
          Enter Email
        </label>
      </div>
      <div className="input-field">
        <input required className="input" type="password" />
        <label className="label" htmlFor="input">
          Enter Password
        </label>
      </div>
      <span
        className="register-link"
        style={{
          cursor: "pointer",
          color: "#4eaaff",
          textDecoration: "none",
        }}
        onClick={() => navigate("/register")}
      >
        New User? <span>Register</span>
      </span>
      <button className="submit-btn">Sign In</button>
    </form>
  );
};

export default Form;
