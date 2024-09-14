import React from "react";
import videoBg from "../Assets/Baller.mp4";
import "../Components/Video.css";

export default function Video() {
  return (
    <div className="video-container">
      <video src={videoBg} autoPlay loop muted type="video/mp4" />
      <div className="video-overlay">
        <p>The best place to buy basketball shoes</p>
      </div>
    </div>
  );
}
