import React from "react";
import HeroSection from "../components/HeroSection";
import HomeContentSection from "../components/HomeContentSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection title="Your Idea, Our Solution"/> 
  
      <HomeContentSection />
      <Footer />
    </>
  );
}

export default Home;
