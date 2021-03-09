import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Address from "../components/Address";

const Contacts = () => {
  const addressInfo = [
    {
      name: "10049 Park Meadows Dr",
      address: "#003, Lone Tree",
      phone: "Co - 80124, USA",
    },
    {
      name: "10049 Park Meadows Dr",
      address: "#003, Lone Tree",
      phone: "Co - 80124, USA",
    },
    {
      name: "10049 Park Meadows Dr",
      address: "#003, Lone Tree",
      phone: "Co - 80124, USA",
    },
  ];

  return (
    <>
      <HeroSection title="Contact" content="Reach Us Now" />
      <Address data={addressInfo} />
      <Form />
      <Footer />
    </>
  );
};

export default Contacts;
