import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ProductCards from "../components/ProductCards";

const Products = () => {
  const productArr = [
    {
      title: "is-kool",
      avatar: "/images/is-kool.jpeg",
      description: `
        Is-kool designed to make student, teachers and parents interactions lively and easy.
        </br></br>
        Simple and easy to access and use.`,
    },
    {
      title: "live-kool",
      avatar: "/images/live-kool.jpeg",
      description: `
      Live-kool designed to make partment communities life lively and easy.
      </br></br>
      Simple and easy to access and use. `,
    },
    {
      title: "docit",
      avatar: "/images/Docit.jpeg",
      description: `
      Store all your important family files in one place. One access for entire family, easy to access and use.
      `,
    },
  ];
  return (
    <>
      <HeroSection title="Products" content="What we Have" />
      <ProductCards data={productArr} />
      <Footer />
    </>
  );
};

export default Products;
