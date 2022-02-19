import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Profiles from "../components/Profiles";

const About = () => {
  const profiles = [
    {
      name: "Amruta Varshini",
      post: "Founder, CEO",
      avatar: "/images/Amruta.jpg",
      detail: `
       Amruta Varshini founded IsKool in 2019 with a strong desire to launch the platform, 
       uniting creative and technical minds. She applies strategic thinking to align the product, 
       business to meet the user goals perfectly. Her experience in a wide variety of business sectors, 
       geographic locations bring innovative ideas to the table. </br> </br>
	   Amruta Varshini is an Alumni of PSG College of Technology, India.
      `,
    },
    {
      name: "Chaithanya Karuna",
      post: "Director of Development",
      avatar: "/images/chaithanya.jpeg",
      detail: `
        Chaithanya Kumar is an experienced developer with work experience in different 
        fortune 500 companies as a technical fellow. 
        His deliverables are efficiently servicing millions of customers across the globe. 
        He is a true leader, visionary, passionate coder, teacher, and a great asset to IsKool,
        who has been with us right from the launch. </br> </br>
		Chaithanya Kumar has a Master’s degree in Computer Technology from EIU, Illinois,
		and he earned his Master’s in Business Administration from CU Boulder.

      `,
    },
    {
      name: "Pavan Kumar Teja",
      post: "Director of Operations",
      avatar: "/images/teja.jpg",
      detail: `
        Pavan Kumar Theja is the Head of Operations and Control, and runs our operations from India.
        Animator at heart, Pavan is a creator, designer, and the most enthusiastic
         member of IsKool. 
		From a technical, design, user, or client perspective — he's there for 
		you, fully aware of the context of a project. </br> </br>
		Pavan Kumar Theja is an Alumni of Amrita Vishwa Vidyapeetham University, India.
          `,
    },
    {
      name: "Nikhila K",
      post: "Software Engineer",
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
