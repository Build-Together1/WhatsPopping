import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../services/apiRequest";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "../styles/Login.css";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

const Login = () => {
  const [formData, setFormData] = useState({
    email_address: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await login(formData);

      if (response && response.status === 200) {
        const token = response.data.access_token;
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split("")
            .map(function (c) {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
        );
        const id = JSON.parse(jsonPayload).id;

        loginUser(id);
        localStorage.setItem("token", response.data.access_token);

        console.log("Login successful:", response.data.access_token);
        console.log("User ID:", id);

        toast.success("Login successful!", {
          autoClose: 3000,
        });

        navigate("/dashboard");
      } else if (response) {
        setError(response.data?.message || "Login failed. Please try again.");
      } else {
        setError("Unexpected error occurred. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        setError(
          `Error: ${
            error.response.data?.message ||
            "An error occurred. Please try again."
          }`
        );
      } else if (error.request) {
        setError(
          "No response from the server. Please check your internet connection."
        );
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
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
                <button 
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
            </div>

            <button type="submit" className="buttonv">
              {loading ? <Spinner animation="border" size="sm" /> : "Login"}
            </button>

            <p className="error-message">
              {error && <strong className="n">{error}</strong>}
            </p>

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
            Don't have an account? <NavLink to="/auth">Sign Up</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
