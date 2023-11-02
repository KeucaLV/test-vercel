import React, {useEffect} from "react";
import "./Register.css";
import Www from "./www.png";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState({
    user_err: '',
    pass_err: '',
    confPass_err: '',
    message: '',
    status: ''
  })
  useEffect(() => {
  }, [error]);

  const sendDataToPHP = async () => {

    try {
      let data = {
        username,
        password,
        confPassword
      };
      let response = await fetch('http://localhost/Datubazes/selects/loginHandler.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      response = await response.json();
      if(response.status === 403) {
        setError(response)
      }
      if (response.status === 200) {
        navigate('/Login');
      }
      console.log(error)
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  return (
      <div className="main">
    <div className="login">
      <div className="login-form">
        <div className="login-label">Register</div>
        <div className="login-inputs">
          <div className="user-input">
            <label htmlFor="user" className="user-label">
              Username
            </label>
            <input
                type="text"
                className="username-input"
                value = {username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {error.user_err && (
                <span className="error">{error.user_err}</span>
            )}
          </div>
          <div className="pass-input">
            <label htmlFor="pass" className="pass-label">
              Password
            </label>
            <input
                type="password"
                className="password-input"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
            />
            {error.pass_err && (
                <span className="error">{error.pass_err}</span>
            )}
          </div>
          <div className="pass-input">
            <label htmlFor="pass" className="pass-label">
              Confirm Password
            </label>
            <input
                type="password"
                className="password-input"
                value ={confPassword}
                onChange = {(e) => setConfPassword(e.target.value)}
            />
            {error.confPass_err && (
                <span className="error">{error.confPass_err}</span>
            )}
          </div>
        </div>
        <div className="accept-page">
          <input type="checkbox" className="checkbox" />
          <p>
            I accept the <a href="#">Terms & Conditions</a>
          </p>
        </div>
        <div className="sign-in-button">
          <button className="login-button" onClick = {sendDataToPHP}>Register</button>
        </div>
        <div className="forgot-page">
          <div className="forgot-text">Existing Account?</div>
          <div className="click-here-text">
            <Link to = "/Login">Login</Link>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={Www} alt="Your Image" />
      </div>
    </div>
      </div>
  );
}

export default Register;
