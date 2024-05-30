import React, { useState } from "react";
import "../styles/Signup.css";
import { NavLink } from "react-router-dom";
import SignupBg from "../assets/images/signup-background.png";

const SignUp = () => {
  const [selectedForm, setSelectedForm] = useState("personal");
  const [currentStep, setCurrentStep] = useState("form");
  const [showPersonalPassword, setShowPersonalPassword] = useState(false);
  const [showPersonalConfirmPassword, setShowPersonalConfirmPassword] = useState(false);
  const [showCorporatePassword, setShowCorporatePassword] = useState(false);
  const [showCorporateConfirmPassword, setShowCorporateConfirmPassword] = useState(false);

  const handleFormToggle = (form) => {
    setSelectedForm(form);
  };

  const handleSubmitForm = () => {
    setCurrentStep("otp");
  };

  const handleSubmitOtp = () => {
    setCurrentStep("success");
  };

  return (
    <div className="form-all">
      <div className="form-container">
        {currentStep !== "otp" && currentStep !== "success" && (
          <div className="form-header">
            <h1>Sign Up</h1>
            <p>Enter details below to create your account</p>
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
                    <label htmlFor="firstname">
                      First Name <br />
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Enter first name"
                      />
                    </label>
                    <label htmlFor="lastname">
                      Last Name <br />
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Enter last name"
                      />
                    </label>
                    <label htmlFor="email">
                      Email Address <br />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="johnsmith@gmail.com"
                      />
                    </label>
                    <label htmlFor="phone">
                      Phone Number <br />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number"
                      />
                    </label>
                    <label htmlFor="country">
                      Country <br />
                      <input type="text" name="country" id="country" />
                    </label>
                    <label htmlFor="password">
                      Create Password <br />
                      <div className="password-container">
                        <input
                          type={showPersonalPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          placeholder="Enter password"
                        />
                        <input
                          type="checkbox"
                          checked={showPersonalPassword}
                          onChange={() => setShowPersonalPassword((prev) => !prev)}
                        />
                      </div>
                    </label>
                    <label htmlFor="confirmpassword">
                      Confirm Password <br />
                      <div className="password-container">
                        <input
                          type={showPersonalConfirmPassword ? "text" : "password"}
                          id="confirmpassword"
                          name="confirmpassword"
                          placeholder="Confirm password"
                        />
                        <input
                          type="checkbox"
                          checked={showPersonalConfirmPassword}
                          onChange={() => setShowPersonalConfirmPassword((prev) => !prev)}
                        />
                      </div>
                    </label>
                  </div>
                  <button type="button" onClick={handleSubmitForm}>Create Account</button>
                </form>
              )}

              {selectedForm === "corporate" && (
                <form className="corporate">
                  <div className="fmm">
                    <label htmlFor="firstname">
                      First Name <br />
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Enter first name"
                      />
                    </label>
                    <label htmlFor="lastname">
                      Last Name <br />
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Enter last name"
                      />
                    </label>
                    <label htmlFor="companyname">
                      Company Name <br />
                      <input
                        type="text"
                        id="companyname"
                        name="companyname"
                        placeholder="Enter your Company Name"
                      />
                    </label>
                    <label htmlFor="email">
                      Email Address <br />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="johnsmith@gmail.com"
                      />
                    </label>
                    <label htmlFor="phone">
                      Phone Number <br />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number"
                      />
                    </label>
                    <label htmlFor="country">
                      Country <br />
                      <input type="text" name="country" id="country" />
                    </label>
                    <label htmlFor="password">
                      Create Password <br />
                      <div className="password-container">
                        <input
                          type={showCorporatePassword ? "text" : "password"}
                          id="password"
                          name="password"
                          placeholder="Enter password"
                        />
                        <input
                          type="checkbox"
                          checked={showCorporatePassword}
                          onChange={() => setShowCorporatePassword((prev) => !prev)}
                        />
                      </div>
                    </label>
                    <label htmlFor="confirmpassword">
                      Confirm Password <br />
                      <div className="password-container">
                        <input
                          type={showCorporateConfirmPassword ? "text" : "password"}
                          id="confirmpassword"
                          name="confirmpassword"
                          placeholder="Confirm password"
                        />
                        <input
                          type="checkbox"
                          checked={showCorporateConfirmPassword}
                          onChange={() => setShowCorporateConfirmPassword((prev) => !prev)}
                        />
                      </div>
                    </label>
                  </div>
                  <button type="button" onClick={handleSubmitForm}>Create Account</button>
                </form>
              )}
            </>
          )}

          {currentStep === "otp" && (
            <form className="ottp">
              <h1>OTP Verification</h1>
              <p className="otp-text">
                Enter the 6 digits OTP sent to your email address
                dan*******@gmail.com
              </p>
              <div className="otp-box">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
              <p className="get-code">
                Didn't get the code? <span>Resend</span>
              </p>

              <button type="button" onClick={handleSubmitOtp}>Continue</button>
            </form>
          )}

          {currentStep === "success" && (
            <div className="successful">
              <h1>Registration Successful!</h1>
              <p>
                You have successfully created an account. Click below to login
              </p>
              <NavLink id="btn-login" to="/">
              login
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
