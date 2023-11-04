import React from 'react';
import './Login.css';
import logo from "../../assets/Logo.png"
import {Link} from "react-router-dom";

function Login() {
  return (
     
    <div className="login-container">
        <Link to="/" >
        <img src={logo}></img>
        </Link>
      <h1 className="page-title">Login</h1>
      <div className="form-container">
        <form className="login-form">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email address" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button className="login-button">Login</button>

          <a href="#" className="forgot-password-link">
            Forgot your password?
          </a>
        </form>

        <p className="create-account-link">
          Don't have an account? <Link to="/signup">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
