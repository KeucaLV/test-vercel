import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="login">
      <div className="login-form">
        <div className="login-label">Register</div>
        <div className="login-inputs">
          <div className="user-input">
            <label htmlFor="user" className="user-label">
              Username
            </label>
            <input type="text" className="username-input" />
          </div>
          <div className="pass-input">
            <label htmlFor="pass" className="pass-label">
              Password
            </label>
            <input type="text" className="password-input" />
          </div>
          <div className="pass-input">
            <label htmlFor="pass" className="pass-label">
              Confirm Password
            </label>
            <input type="text" className="password-input" />
          </div>
        </div>
        <div className="accept-page">
          <input type="checkbox" className="checkbox" />
          <p>
            I accept the <a href="#">Terms & Conditions</a>
          </p>
        </div>
        <div className="sign-in-button">
          <button className="login-button">Register</button>
        </div>
        <div className="forgot-page">
          <div className="forgot-text">Existing Account?</div>
          <div className="click-here-text">
            <a href="#">Login</a>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="www.png" alt="Your Image" />
      </div>
    </div>
  );
}

export default Register;
