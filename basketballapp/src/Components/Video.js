import React from "react";

export default function Video() {
  return (
    <div className="Video">
      <video src="/videos/video.mp4" autoPlay loop muted />
    </div>
  );
}
