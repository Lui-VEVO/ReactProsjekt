import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // JSX code.
  return (
    <footer className="footer">
      <p className="footer-text">
        ©{currentYear} Ballerz, All rights reserved.
      </p>
    </footer>
  );
}
