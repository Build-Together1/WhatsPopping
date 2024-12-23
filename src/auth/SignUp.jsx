import React, { useState, useContext } from "react";
import "../styles/Signup.css";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { createUser, verifyEmail } from "../services/apiRequest";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { UserContext } from "../context/UserContext";

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email_address: "",
    date_of_birth: "",
    password: "",
    confirm_password: "",
    username: "",
    profile_header_path: "",
    profile_pic_path: "",
    location: "",
    website: "",
  });
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { loginUser } = useContext(UserContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, [e.target.name]: file });
    }
  };

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePrevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSelect = (event) => {
    const value = event.target.value;
    if (!selectedEvents.includes(value)) {
      setSelectedEvents([...selectedEvents, value]);
    }
  };

  const handleRemove = (eventToRemove) => {
    setSelectedEvents((prev) =>
      prev.filter((event) => event !== eventToRemove)
    );
  };

  const handleVerifyEmail = async () => {
    setLoading(true);
    try {
      const response = await verifyEmail({
        email_address: formData.email_address,
        otp,
      });
      if (response.status === 200) {
        // loginUser(response.data.token, response.data.id);
        navigate("/dashboard");
      } else {
        setError(response.data.message || "Failed to verify email");
      }
    } catch (error) {
      setError("An error occurred during email verification");
    }
    setLoading(false);
  };

  const handleSubmitForm = async () => {
    setLoading(true);
    try {
      const payload = {
        ...formData,
        profile_header_path:
          formData.profile_header_path.name || formData.profile_header_path,
        profile_pic_path:
          formData.profile_pic_path.name || formData.profile_pic_path,
      };
      const response = await createUser(payload);

      if (response.status === 201) {
        loginUser(response.data.token, response.data.id);
        handleNextStep();
      } else {
        setError(response.data.message || "Failed to create account");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "An error occurred during account creation"
      );
    }
    setLoading(false);
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
              <button
                className="pri-btn"
                type="button"
                onClick={handleNextStep}
              >
                Next
              </button>
            </form>
          )}

          {currentStep === 2 && (
            <form>
              <div className="form-fields">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirm_password"
                    placeholder="Confirm password"
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <AiFillEyeInvisible />
                    ) : (
                      <AiFillEye />
                    )}
                  </button>
                </div>
              </div>
              <button
                className="pri-btn"
                type="button"
                onClick={handleNextStep}
              >
                Next
              </button>
            </form>
          )}

          {currentStep === 3 && (
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
              <button
                className="pri-btn"
                type="button"
                onClick={handleNextStep}
              >
                Skip/Next
              </button>
            </form>
          )}

          {currentStep === 4 && (
            <form>
              <div className="form-group">
                <label>Select Events You Want to See Frequently</label>
                <div className="selected-events">
                  {selectedEvents.map((event) => (
                    <span key={event} onClick={() => handleRemove(event)}>
                      {event} &times;
                    </span>
                  ))}
                </div>
                <select name="preferred_events" onChange={handleSelect}>
                  <option value="" disabled selected>
                    Choose an event
                  </option>
                  <option value="concerts">Concerts</option>
                  <option value="sports">Sports</option>
                  <option value="theater">Theater</option>
                  <option value="workshops">Workshops</option>
                </select>
              </div>
              <button
                className="pri-btn"
                type="button"
                onClick={handleNextStep}
              >
                Next
              </button>
            </form>
          )}

          {currentStep === 5 && (
            <form>
              <div className="form-group">
                <label>Set Profile Name</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter profile name"
                  onChange={handleChange}
                />
              </div>
              <button
                className="pri-btn"
                type="button"
                onClick={handleSubmitForm}
              >
                {loading ? <Spinner animation="border" size="sm" /> : "Sign Up"}
              </button>
              <p className="error-message">{error}</p>
            </form>
          )}

          {currentStep === 6 && (
            <div className="otp-verification">
              <h2>Verify Your Email</h2>
              <p>An email has been sent to {formData.email_address}.</p>
              <p>Enter the OTP sent to your email to verify your account.</p>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
              <button
                className="pri-btn"
                type="button"
                onClick={handleVerifyEmail}
              >
                {loading ? <Spinner animation="border" size="sm" /> : "Verify"}
              </button>
            </div>
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
