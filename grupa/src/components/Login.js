import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Ww from "./ww.png";

function Login() {
  return (
    <div className="main">
      <div className="login">
        <div className="login-form">
          <div className="login-label">Login</div>
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
          </div>
          <div className="sign-in-button">
            <button className="login-button">Sign in</button>
          </div>
          <div className="register-page">
            <div className="register-text">Create an account here</div>
            <div className="sign-up-text">
              <Link to = "/Register">Sign up</Link>
            </div>
          </div>
          <div className="forgot-page">
            <div className="forgot-text">Forgot password?</div>
            <div className="click-here-text">
              <Link to = "/ForgotPassword">
                Click here!
              </Link>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={Ww} alt="Ww" />
        </div>
      </div>
    </div>
  );
}

export default Login;
