import React, { useState } from "react";
import axios from "axios";
import SignupBg from "../assets/images/signup-background.png";
import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const url =
        email.includes("@corporate.com")
          ? "https://whats-popping-server.onrender.com/corporate-account-change_password"
          : "https://whats-popping-server.onrender.com/individual-account-change_password";
      
      const response = await axios.post(url, { email_address: email });

      if (response.status === 200) {
        setMessage("Password reset instructions have been sent to your email.");
      } else {
        setError("Failed to send password reset instructions. Please try again.");
      }
    } catch (error) {
      setError(
        `Error: ${
          error.response?.data?.message || "An error occurred. Please try again."
        }`
      );
      console.error("Error sending password reset email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password">
      <div className="forgot-password-container">
        <div className="forgot-password-header">
          <h1>Forgot Password</h1>
          <p>Enter your email address to reset your password</p>
        </div>

        <div className="forgot-password-form">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email_address" className="form-label">
                Email address
              </label>
              <input
                type="email"
                id="email_address"
                name="email_address"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <button type="submit" className="buttonv">
              {loading ? "Sending..." : "Send Reset Instructions"}
            </button>

            {error && <p className="error-message">{error}</p>}
            {message && <p className="success-message">{message}</p>}
          </form>
        </div>
      </div>

      <div className="forgot-password-image">
        <img src={SignupBg} alt="Signup Background" />
      </div>
    </div>
  );
};

export default ForgotPassword;
