import React from 'react';
import './ForgotPassword.css';
import  W from './w.png';
import { Link } from "react-router-dom";

function ForgotPassword(){
    return (
        <div className="main">
        <div className="login">
            <div className="login-form">
                <div className="login-label">Forgot Password</div>
                <div className="login-inputs">
                    <div className="user-input">
                        <label htmlFor="user" className="user-label">Username</label>
                        <input type="text" className="username-input" />
                    </div>
                    <div className="pass-input">
                        <label htmlFor="pass" className="pass-label">New Password</label>
                        <input type="text" className="password-input" />
                    </div>
                </div>
                <div className="sign-in-button">
                    <button className="login-button">Reset Password</button>
                </div>
                <div className="register-page">
                    <div className="register-text">
                        Create an account here
                    </div>
                    <div className="sign-up-text">
                        <Link to = "/Register">
                            Sign up
                        </Link>
                    </div>
                </div>
                <div className="forgot-page">
                    <div className="forgot-text">
                        Existing Account?
                    </div>
                    <div className="click-here-text">
                        <Link to = "/Login">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={W} alt="Placeholder" />
            </div>
        </div>
        </div>
    );
}

export default ForgotPassword;
