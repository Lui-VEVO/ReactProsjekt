import React from "react";

export default function Welcome() {
  return (
    <div className="Welcome">
      <h1 className="Welcome-text">Welcome to Ballerz</h1>
      <p className="Intro-text">
        We are a team of basketball enthusiasts who are passionate about
        basketball shoes.
      </p>
      <div>
        <button className="ShopNow-button">Shop Now</button>
        <button className="Basketballs-button">Basketballs</button>
      </div>
    </div>
  );
}
