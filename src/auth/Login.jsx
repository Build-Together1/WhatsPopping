import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email_address: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://whats-popping-server.onrender.com/account/login", formData);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        setError(
          `Error: ${error.response.data.message || "An error occurred. Please try again."}`
        );
      } else if (error.request) {
        setError("No response from the server. Please check your internet connection.");
      } else {
        setError("An error occurred while setting up the request.");
      }
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your WhatsPopping account</p>
        </div>

        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email_address" className="form-label">
                Email address
              </label>
              <input
                type="email"
                id="email_address"
                name="email_address"
                value={formData.email_address}
                onChange={handleChange}
                placeholder="Enter your email address"
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="buttonv">
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="error-message">{error && <strong className="n">{error}</strong>}</p>

            <p className="forget-password">
              <NavLink to="/forgot-password">Forgot Password?</NavLink>
            </p>
          </form>
        </div>

        <div className="login-options">
          <button>
            <i className="fa fa-google"></i> Sign in with Google
          </button>
          <button>
            <i className="fa fa-facebook"></i> Sign in with Facebook
          </button>
        </div>

        <div className="signup-option">
          <p>
            Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
