import React from "react";
import "../Components/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // JSX code.
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow us</h3>
          <div className="social-icons">
            <a href="https://twitter.com/ballerz">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/ballerz">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
          ©{currentYear} Ballerz, All rights reserved.
        </p>
      </div>
    </footer>
  );
}
