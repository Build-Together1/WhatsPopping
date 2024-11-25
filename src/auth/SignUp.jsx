import React, { useState } from "react";
import axios from "axios";
import "../styles/Signup.css";
import { NavLink } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email_address: "",
    date_of_birth: "",
    password: "",
    confirm_password: "",
    username: "",
    profile_header_path: null,
    profile_pic_path: null,
    location: "",
    website: "",
  });
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePrevStep = () => setCurrentStep((prev) => prev - 1);

  // const handleSubmitForm = async () => {
  //   setLoading(true);
  //   try {
  //     const formDataToSubmit = new FormData();
  //     formDataToSubmit.append("name", formData.name);
  //     formDataToSubmit.append("email_address", formData.email_address);
  //     formDataToSubmit.append("date_of_birth", formData.date_of_birth);
  //     formDataToSubmit.append("password", formData.password);
  //     formDataToSubmit.append("confirm_password", formData.confirm_password);
  //     formDataToSubmit.append("username", formData.username);
  //     if (formData.profile_header_path) {
  //       formDataToSubmit.append(
  //         "profile_header_path",
  //         formData.profile_header_path
  //       );
  //     }
  //     if (formData.profile_pic_path) {
  //       formDataToSubmit.append("profile_pic_path", formData.profile_pic_path);
  //     }
  //     formDataToSubmit.append("location", formData.location);
  //     formDataToSubmit.append("website", formData.website);

  //     // Uncomment for API integration
  //     /*
  //     const response = await axios.post(
  //       "https://whats-popping-server.onrender.com/users",
  //       formDataToSubmit,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     if (response.data.success) {
  //       handleNextStep();
  //     } else {
  //       setError(response.data.message || "Something went wrong");
  //     }
  //     */
  //   } catch (error) {
  //     setError(error.response?.data?.message || "An error occurred");
  //   }
  //   setLoading(false);
  // };

  const handleVerifyEmail = async () => {
    try {
      const otpData = {
        email_address: formData.email_address,
        otp: otp,
      };

      // Uncomment for API integration
      /*
      const response = await axios.post(
        "https://whats-popping-server.onrender.com/verify-email",
        otpData
      );

      if (response.data.success) {
        handleNextStep();
      } else {
        setError(response.data.message || "OTP verification failed");
      }
      */
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "An error occurred during OTP verification"
      );
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-header">
          <h1>Create Account</h1>
          <p>Step {currentStep} of 6</p>
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="signup-form">
          {currentStep === 1 && (
            <form>
              <div className="form-fields">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email_address"
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="date_of_birth"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="button" onClick={handleNextStep}>
                Next
              </button>
            </form>
          )}

          {currentStep === 2 && (
            <div className="otp-verification">
              <h2>Verify Your Email</h2>
              <p>Enter the OTP sent to your email address.</p>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
              <button type="button" onClick={handleNextStep}>
                Verify
              </button>
            </div>
          )}

          {currentStep === 3 && (
            <form>
              <div className="form-fields">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="button" onClick={handleNextStep}>
                Next
              </button>
            </form>
          )}

          {currentStep === 4 && (
            <form>
              <div className="form-group">
                <label>Upload Profile Picture (Optional)</label>
                <input
                  type="file"
                  name="profile_pic_path"
                  onChange={handleFileChange}
                />
              </div>
              <div className="form-group">
                <label>Upload Cover Photo (Optional)</label>
                <input
                  type="file"
                  name="profile_header_path"
                  onChange={handleFileChange}
                />
              </div>
              <div className="form-group">
                <label>Location (Optional)</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter location"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Website (Optional)</label>
                <input
                  type="text"
                  name="website"
                  placeholder="Enter website"
                  onChange={handleChange}
                />
              </div>
              <button type="button" onClick={handleNextStep}>
                Skip/Next
              </button>
            </form>
          )}

          {currentStep === 5 && (
            <form>
              <div className="form-group">
                <label>Select Events You Want to See Frequently</label>
                <select
                  multiple
                  name="preferred_events"
                  onChange={handleChange}
                >
                  <option value="concerts">Concerts</option>
                  <option value="sports">Sports</option>
                  <option value="theater">Theater</option>
                  <option value="workshops">Workshops</option>
                </select>
              </div>
              <button type="button" onClick={handleNextStep}>
                Next
              </button>
            </form>
          )}

          {currentStep === 6 && (
            <form>
              <div className="form-group">
                <label>Set Profile Name</label>
                <input
                  type="text"
                  name="profile_name"
                  placeholder="Enter profile name"
                  onChange={handleChange}
                />
              </div>
              <button type="submit">
                {loading ? (
                  <Spinner animation="border" size="sm" role="status" />
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
          )}
        </div>
        {currentStep > 1 && (
          <button className="back-btn" onClick={handlePrevStep}>
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default SignUp;
