import React from "react";
import "./HeroSection.css";

const HeroSection = ({ title, content = null }) => {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default HeroSection;
