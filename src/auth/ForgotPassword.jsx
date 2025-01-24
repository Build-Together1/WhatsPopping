import React, { useState } from "react";
import { resetPassword, changePassword } from "../services/apiRequest";
import SignupBg from "../assets/images/signup-background.png";
import "../styles/ForgotPassword.css";

const Forgreset_codeassword = () => {
  const [step, setStep] = useState(1); 
  const [email, setEmail] = useState("");
  const [reset_code, setResetCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleResetCodeChange = (e) => setResetCode(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await resetPassword({ email_address: email });

      if (response.status === 200) {
        setMessage("reset_code has been sent to your email.");
        setStep(2);
      } else {
        setError(response.data?.message || "Failed to send reset_code. Please try again.");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred. Please try again.");
      console.error("Error resetting password:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await changePassword({
        email_address: email,
        reset_code,
        password,
        confirm_password: confirmPassword,
      });

      if (response.status === 200) {
        setMessage("Your password has been successfully updated.");
        setStep(1);
      } else {
        setError(response.data?.message || "Failed to change password. Please try again.");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred. Please try again.");
      console.error("Error changing password:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password">
      <div className="forgot-password-container">
        {step === 1 && (
          <>
            <div className="forgot-password-header">
              <h1>Forgot Password</h1>
              <p>Enter your email address to receive a reset code</p>
            </div>

            <div className="forgot-password-form">
              <form onSubmit={handleResetPassword}>
                <div className="mb-3">
                  <label htmlFor="email_address" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email_address"
                    name="email_address"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <button type="submit" className="pri-btn">
                  {loading ? "Sending..." : "Send Code"}
                </button>

                {error && <p className="error-message">{error}</p>}
                {message && <p className="success-message">{message}</p>}
              </form>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="forgot-password-header">
              <h1>Reset Password</h1>
              <p>Enter the reset code and your new password</p>
            </div>

            <div className="forgot-password-form">
              <form onSubmit={handleChangePassword}>
                <div className="mb-3">
                  <label htmlFor="reset_code" className="form-label">
                    reset_code
                  </label>
                  <input
                    type="text"
                    id="reset_code"
                    name="reset_code"
                    value={reset_code}
                    onChange={handleResetCodeChange}
                    placeholder="Enter the reset_code"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your new password"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirm_password" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Confirm your new password"
                    required
                  />
                </div>

                <button type="submit" className="pri-btn">
                  {loading ? "Updating..." : "Change Password"}
                </button>

                {error && <p className="error-message">{error}</p>}
                {message && <p className="success-message">{message}</p>}
              </form>
            </div>
          </>
        )}
      </div>

      <div className="forgot-password-image">
        <img src={SignupBg} alt="Signup Background" />
      </div>
    </div>
  );
};

export default Forgreset_codeassword;
