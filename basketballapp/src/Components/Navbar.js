import React from "react";
import "../styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <ul className="navItems">
          <li>Basketball shoes</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="cart-icon"></div>
    </nav>
  );
}
