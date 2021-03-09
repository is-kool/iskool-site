import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ProductCards from "../components/ProductCards";

const Services = () => {
  const productArr = [
    {
      title: "Node and Kafka",
      avatar: "/images/kafka.png",
      description: `
      Then I do something a little more challenging: the Node.JS application consumes messages from an Apache Kafka topic and writes these messages to a MongoDB database collection, to make the results available for many clients to read and query. Finally I will show a little analytical query against the MongoDB collection, to retrieve some information we would not have been able to get from the plain Kafka Topic (although with Kafka Streams it just may be possible as well).`,
    },
    {
      title: "Microservices",
      avatar: "/images/microservices.png",
      description: `
      Microservices came in a picture for building systems that were too big. The idea behind microservices is that there are some applications which can easily build and maintain when they are broken down into smaller applications which work together. Each component is continuously developed and separately managed, and the application is then merely the sum of its constituent elements. Whereas in traditional “monolithic” application which is all developed all in one piece. `,
    },
  ];
  return (
    <>
      <HeroSection title="Architecture" content="How we Do" />
      <ProductCards data={productArr} />
      <Footer />
    </>
  );
};

export default Services;
