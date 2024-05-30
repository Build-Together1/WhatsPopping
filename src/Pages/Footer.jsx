import React from "react";
import "../styles/Footer.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h2>Whatspopping</h2>
          <p>hbfhfhzdbhcvbzhjvbhmzvhjkzbxhjb jhzbv</p>
          <div className="social-links">
            <i class="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
        <div className="footer-text">
          <ul>
            <li>Mass Payments</li>
            <li>Debit card</li>
            <li>Assets</li>
          </ul>
        </div>
        <div className="footer-text">
          <ul>
            <li>Financial Services</li>
            <li>Fashion and Beauty</li>
            <li>Agriculture</li>
          </ul>
        </div>
        <div className="footer-text">
          <ul>
            <li>Help centre</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Press</li>
          </ul>
        </div>
      </div>
      <p className="buttom">© 2024 whatspopping.com All rights reserved.</p>
    </div>
  );
};

export default Footer;
