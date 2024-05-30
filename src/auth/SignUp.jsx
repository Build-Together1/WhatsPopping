import React, { useState } from "react";
import "../styles/Signup.css";
import SignupBg from "../assets/images/signup-background.png";

const SignUp = () => {
  const [step, setStep] = useState(1);

  const handleContinue = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleGoBack = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  return (
    <div className="form-all">
      <div className="form-container">
        <div className="form-header">
          <h1>Sign Up</h1>
          {/* <div className="progress-bar">
            <p className={`progress ${step >= 1 ? 'active' : ''}`}>1</p>
            <p className={`progress ${step >= 2 ? 'active' : ''}`}>2</p>
            <p className={`progress ${step >= 3 ? 'active' : ''}`}>3</p>
          </div> */}
          <div>
            
          </div>
          <p>Enter details below to create your account</p>
        </div>

        {step === 1 && (
          <form>
            <label htmlFor="fullname">
              Full Name <br />
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter full name here"
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
            <label htmlFor="password">
              Create Password <br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
              />
            </label>
            <label htmlFor="confirmpassword">
              Confirm Password <br />
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="Confirm password"
              />
            </label>
            <div className="form-buttons">
              <button id="v" type="button" onClick={handleGoBack} disabled={step === 1}>
                Go back
              </button>
              <button id="u" type="button" onClick={handleContinue}>
                Continue
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form>
            <p className="otp-text">
              Enter the 5 digit OTP sent to your email address dan*******@gmail.com
            </p>
            <div className="otp-box">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
            <p>
              Didn't get the code? <span>Resend</span>
            </p>
            <div className="form-buttons">
              <button id="v" type="button" onClick={handleGoBack}>
                Go back
              </button>
              <button id="u" type="button" onClick={handleContinue}>
                Continue
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="successful">
            <h1>Registration Successful!</h1>
            <p>
              You have successfully created an account. Click below to login
            </p>
            <button id="u" type="button">
              Login
            </button>
          </div>
        )}

        <div>
          <p>
            Already have an account? <span>Sign in</span>
          </p>
        </div>
      </div>

      <div className="form-image">
        <img src={SignupBg} alt="Signup Background" />
      </div>
    </div>
  );
};

export default SignUp;
