import React, { useState } from "react";
import "../styles/Auth.css";
import SignUp from "./SignUp";
import Login from "./Login";
import Modal from "../commponents/Modal";
import { useNavigate } from "react-router";

const AuthWrapper = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleOpenSignupModal = () => {
    console.log("Signup modal opening...");
    setShowSignupModal(true);
  };

  const handleCloseSignupModal = () => {
    setShowSignupModal(false);
  };

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div className="auth-wrapper">
      <div className="section1">
        <h1>WP</h1>
        <p>Whats Popping</p>
      </div>

      <div className="section2">
        <div className="back" onClick={handleHome}>
          ⬅ Back
        </div>
        <div className="header">
          <h1>Events and Happenings</h1>
          <p>Discover events and happenings around you</p>
        </div>
        <div className="signup-btns">
          <div>
            <button className="pri-btn">Sign up with Google</button>
            <button className="pri-btn">Sign up with Facebook</button>
          </div>
          <span>
            <hr />
            <p>or</p>
            <hr />
          </span>
          <button className="pri-btn" onClick={handleOpenSignupModal}>
            Create account
          </button>
          <h2>
            By signing up, you agree to the Terms of services and Privacy
            Policy, including Cookie Use.
          </h2>
        </div>

        <div className="login-btn">
          <h2>Already have an account?</h2>
          <button className="pri-btn" onClick={handleOpenLoginModal}>
            Sign in
          </button>
        </div>
      </div>

      {showSignupModal && (
        <Modal onClose={handleCloseSignupModal}>
          <SignUp />
        </Modal>
      )}

      {showLoginModal && (
        <Modal onClose={handleCloseLoginModal}>
          <Login />
        </Modal>
      )}
    </div>
  );
};

export default AuthWrapper;
