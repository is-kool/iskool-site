import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Profiles from "../components/Profiles";

const About = () => {
  const profiles = [
    {
      name: "Amruta Varshini",
      post: "Founder (CEO)",
      avatar: "/images/Amruta1.jpg",
      detail: `
        Our Chief Executive Officer, Amruta, is enthusiastic in her work for Is-Kool because
        of the person-focused motivation of the company. He values that the company's overall
        success ripples into the success of our emloyees, their families, and our clients.
      `,
    },
    {
      name: "Chaithanya Karuna",
      post: "Director Of Development",
      avatar: "/images/chaithanya1.jpeg",
      detail: `
        Our Director Of Developent, Chaithanya Karuna, is enthusiastic in his work for Qualfon because
        of the person-focused motivation of the company. He values that the company's overall
        success ripples into the success of our emloyees, their families, and our clients.
      `,
    },
    {
      name: "Pavan Teja",
      post: "Director of Operations",
      avatar: "/images/teja1.jpg",
      detail: `
        Our Director of Operations, Paven Teja, is enthusiastic in his work for Qualfon because
        of the person-focused motivation of the company. He values that the company's overall
        success ripples into the success of our emloyees, their families, and our clients.
      `,
    },
  ];
  return (
    <>
      <HeroSection title="Meet out Team" content="Everything Begins Here" />
      <Profiles data={profiles} />
      <Footer />
    </>
  );
};

export default About;
