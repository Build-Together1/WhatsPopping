import React from "react";
import "../styles/Pricing.css";
import Footer from "./Footer";

const Pricing = () => {
  return (
    <div>
      <div className="pricing-container">
        <h1>Our Pricing Plan</h1>
        <p>
          Stay focused on your guests without constraints. Get started with the
          basic plan, <br /> premium or customize your experience with a tailored pro
          plan.{" "}
        </p>
        <div className="pricing-cards">
          <div className="card">
            <h2>Basic Plan</h2>
            <h3>$0/mth</h3>
            <p>Essential tools for homework assistance</p>
            <ul>
              <li>Ai Homework solver (10 questions per day)</li>
              <li>Ai tutors (5 questions/day)</li>
              <li>Homework Q&A Resources</li>
              <li>Standard support</li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="card">
            <h2>Basic Plan</h2>
            <h3>$0/mth</h3>
            <p>Essential tools for homework assistance</p>
            <ul>
              <li>Ai Homework solver (10 questions per day)</li>
              <li>Ai tutors (5 questions/day)</li>
              <li>Homework Q&A Resources</li>
              <li>Standard support</li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="card">
            <h2>Basic Plan</h2>
            <h3>$0/mth</h3>
            <p>Essential tools for homework assistance</p>
            <ul>
              <li>Ai Homework solver (10 questions per day)</li>
              <li>Ai tutors (5 questions/day)</li>
              <li>Homework Q&A Resources</li>
              <li>Standard support</li>
            </ul>
            <button>Get Started</button>
          </div>

          
        </div>
        <div className="pricing-contact">
            <h2>Can't find what you're looking for?</h2>
            <p>Contact us for more inquires & information on our pricing plan</p>
            <a href="/contact">Contact US</a>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
