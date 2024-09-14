import React from "react";
import "../Components/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="upper-navbar">
        <span>Ballerz</span>
      </nav>
      <nav className="lower-navbar">
        <div>
          <ul className="navItems">
            <li>Basketball shoes</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="cart-icon"></div>
      </nav>
    </div>
  );
}
