import React from "react";
import "./HeroSection.css";

const HeroSection = ({ title, content = null }) => {
  return (
    <div className="hero-container">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default HeroSection;
