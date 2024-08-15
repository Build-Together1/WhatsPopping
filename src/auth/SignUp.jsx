import React, { useState } from "react";
import axios from "axios";
import "../styles/Signup.css";
import { NavLink } from "react-router-dom";
import SignupBg from "../assets/images/signup-background.png";
import { Spinner } from "react-bootstrap";

const SignUp = () => {
  const [selectedForm, setSelectedForm] = useState("personal");
  const [currentStep, setCurrentStep] = useState("form");
  const [showPersonalPassword, setShowPersonalPassword] = useState(false);
  const [showPersonalConfirmPassword, setShowPersonalConfirmPassword] =
    useState(false);
  const [showCorporatePassword, setShowCorporatePassword] = useState(false);
  const [showCorporateConfirmPassword, setShowCorporateConfirmPassword] =
    useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    state: "",
    country: "",
    password: "",
    confirm_password: "",
    organization_name: "",
    organization_description: "",
  });
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormToggle = (form) => {
    setSelectedForm(form);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async () => {
    setLoading(true);
    const url =
      selectedForm === "personal"
        ? "https://whats-popping-server.onrender.com/create-individual-account"
        : "https://whats-popping-server.onrender.com/create-corporate-account";

    try {
      const response = await axios.post(url, formData);
      if (response.status === 201) {
        const otpUrl =
          selectedForm === "personal"
            ? "https://whats-popping-server.onrender.com/individual-account-generate-otp"
            : "https://whats-popping-server.onrender.com/corporate-account-generate-otp";
        
        await axios.post(otpUrl, { email_address: formData.email_address });
        setOtpSent(true);
        setCurrentStep("otp");
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          setError(
            "Conflict: It seems there is an issue with the data you provided."
          );
        } else {
          setError(
            `Error: ${
              error.response.data.message ||
              "An error occurred. Please try again."
            }`
          );
        }
      } else if (error.request) {
        setError(
          "No response from the server. Please check your internet connection."
        );
      } else {
        setError("An error occurred while setting up the request.");
      }
      console.error("Error signing up:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitOtp = async () => {
    try {
      const otpUrl =
        selectedForm === "personal"
          ? "https://whats-popping-server.onrender.com/individual-account-verify-email"
          : "https://whats-popping-server.onrender.com/corporate-account-verify-email";

      const response = await axios.post(otpUrl, {
        email_address: formData.email_address,
        otp: otp,
      });
      if (response.status === 200) {
        setCurrentStep("success");
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setError("Error verifying OTP. Please try again.");
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className="form-all">
      <div className="form-container">
        {currentStep !== "otp" && currentStep !== "success" && (
          <div className="form-header">
            <h1>Sign Up</h1>
            <p>Enter details below to create your account</p>
            {error && <p className="error-message">{error}</p>}
          </div>
        )}

        {currentStep !== "otp" && currentStep !== "success" && (
          <div className="navigation-toggle">
            <div
              id="personal"
              className={selectedForm === "personal" ? "active" : ""}
              onClick={() => handleFormToggle("personal")}
            >
              Personal
            </div>
            <div
              id="corporate"
              className={selectedForm === "corporate" ? "active" : ""}
              onClick={() => handleFormToggle("corporate")}
            >
              Corporate
            </div>
          </div>
        )}

        <div className="form-content">
          {currentStep === "form" && (
            <>
              {selectedForm === "personal" && (
                <form className="personal">
                  <div className="fm">
                    <label htmlFor="first_name">
                      First Name <br />
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="Enter first name"
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="last_name">
                      Last Name <br />
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder="Enter last name"
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="email_address">
                      Email Address <br />
                      <input
                        type="email"
                        id="email_address"
                        name="email_address"
                        placeholder="johnsmith@gmail.com"
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="phone_number">
                      Phone Number <br />
                      <input
                        type="tel"
                        id="phone_number"
                        name="phone_number"
                        placeholder="Enter phone number"
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="state">
                      State <br />
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="Enter state"
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="country">
                      Country <br />
                      <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="Enter country"
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="password">
                      Create Password <br />
                      <div className="password-container">
                        <input
                          type={showPersonalPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          placeholder="Enter password"
                          onChange={handleChange}
                        />
                        <input
                          type="checkbox"
                          checked={showPersonalPassword}
                          onChange={() =>
                            setShowPersonalPassword((prev) => !prev)
                          }
                        />
                      </div>
                    </label>
                    <label htmlFor="confirm_password">
                      Confirm Password <br />
                      <div className="password-container">
                        <input
                          type={
                            showPersonalConfirmPassword ? "text" : "password"
                          }
                          id="confirm_password"
                          name="confirm_password"
                          placeholder="Confirm password"
                          onChange={handleChange}
                        />
                        <input
                          type="checkbox"
                          checked={showPersonalConfirmPassword}
                          onChange={() =>
                            setShowPersonalConfirmPassword((prev) => !prev)
                          }
                        />
                      </div>
                    </label>
                  </div>
                  <button type="button" onClick={handleSubmitForm}>
                    {loading ? (
                      <Spinner
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </form>
              )}

              {selectedForm === "corporate" && (
                <form className="corporate">
                  <div className="fmm">
                    <label htmlFor="first_name">
                      First Name <br />
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="Enter first name"
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="last_name">
                      Last Name <br />
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder="Enter last name"
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="organization_name">
                      Organization Name <br />
                      <input
                        type="text"
                        id="organization_name"
                        name="organization_name"
                        placeholder="Enter your organization name"
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="organization_description">
                      Organization Description <br />
                      <textarea
                        id="organization_description"
                        name="organization_description"
                        placeholder="Enter organization description"
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="email_address">
                      Email Address <br />
                      <input
                        type="email"
                        id="email_address"
                        name="email_address"
                        placeholder="johnsmith@gmail.com"
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="phone_number">
                      Phone Number <br />
                      <input
                        type="tel"
                        id="phone_number"
                        name="phone_number"
                        placeholder="Enter phone number"
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="state">
                      State <br />
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="Enter state"
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="country">
                      Country <br />
                      <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="Enter country"
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="password">
                      Create Password <br />
                      <div className="password-container">
                        <input
                          type={showCorporatePassword ? "text" : "password"}
                          id="password"
                          name="password"
                          placeholder="Enter password"
                          onChange={handleChange}
                        />
                        <input
                          type="checkbox"
                          checked={showCorporatePassword}
                          onChange={() =>
                            setShowCorporatePassword((prev) => !prev)
                          }
                        />
                      </div>
                    </label>
                    <label htmlFor="confirm_password">
                      Confirm Password <br />
                      <div className="password-container">
                        <input
                          type={
                            showCorporateConfirmPassword ? "text" : "password"
                          }
                          id="confirm_password"
                          name="confirm_password"
                          placeholder="Confirm password"
                          onChange={handleChange}
                        />
                        <input
                          type="checkbox"
                          checked={showCorporateConfirmPassword}
                          onChange={() =>
                            setShowCorporateConfirmPassword((prev) => !prev)
                          }
                        />
                      </div>
                    </label>
                  </div>
                  <button type="button" onClick={handleSubmitForm}>
                    {loading ? (
                      <Spinner
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </form>
              )}
            </>
          )}

          {currentStep === "otp" && (
            <div className="otp-verification">
              <h2>OTP Verification</h2>
              <p>Enter the OTP sent to your email address.</p>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
              <button type="button" onClick={handleSubmitOtp}>
                Verify OTP
              </button>
              {error && <p className="error-message">{error}</p>}
            </div>
          )}

          {currentStep === "success" && (
            <div className="success-message">
              <h2>Account Created Successfully!</h2>
              <p>You can now log in to your account.</p>
              <NavLink to="/">
                <button type="button">Go to home</button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <div className="form-image">
        <img src={SignupBg} alt="Signup Background" />
      </div>
    </div>
  );
};

export default SignUp;
