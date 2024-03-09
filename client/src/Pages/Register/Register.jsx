import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="Register-container">
      <div className="Register-wrapper">
        <h1 className="Register-title">CREATE AN ACCOUNT</h1>
        <form className="Register-form">
          <input
            className="input"
            id="Register-input"
            type="text"
            placeholder="name"
          />
          <input
            className="input"
            id="Register-input"
            type="text"
            placeholder="last name"
          />
          <input
            className="input"
            id="Register-input"
            type="text"
            placeholder="username"
          />
          <input
            className="input"
            id="Register-input"
            type="email"
            placeholder="email"
          />
          <input
            className="input"
            id="Register-input"
            type="password"
            placeholder="password"
          />
          <input
            className="Register-input"
            type="password"
            placeholder="confirm password"
          />
          <span className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the Privacy policy.
          </span>
          <button className="Register-button">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
