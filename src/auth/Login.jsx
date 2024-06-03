import React from "react";
import { NavLink } from "react-router-dom";
import SignupBg from "../assets/images/signup-background.png";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your WhatsPopping account</p>
        </div>

        <div className="login-form">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input type="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input type="password" />
            </div>

            <NavLink className="buttonv" to="/">
              Login
            </NavLink>

            <p className="forget-password">Forgot Password ?</p>
          </form>
        </div>

        <div className="login-options">
          <button>
            <i class="fa fa-google"></i> Sign up with Google
          </button>
          <button>
            <i class="fa fa-facebook"></i> Sign up with Facebook
          </button>
        </div>

        <div className="signup-option">
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>

      <div className="login-image">
        <img src={SignupBg} alt="Signup Background" />
      </div>
    </div>
  );
};

export default Login;
