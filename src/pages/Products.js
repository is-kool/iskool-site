import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ProductCards from "../components/ProductCards";

const Products = () => {
  const productArr = [
    {
      title: "IsKool",
      avatar: "/images/is-kool.jpeg",
      description: `
        Our product IsKool is a simple, cool way for Parents, 
        Teachers, and Students to use one web application 
        for all their school activities. </br> </br>
		Students </br> </br>
		•	Manage Assignments and Submissions </br>
		•	Class Timetables, Due Dates </br>
		•	Quizzes, Tests </br>
		•	Evaluations, Grades </br> </br>
		Teachers </br> </br>
		•	Mange Curriculum, Modules </br>
		•	Manage Schedules, Custom Dashboards </br>
 		•	School Feeds </br>
		•	Student Activities and Monitoring </br> </br>
		Parents </br> </br>
		•	Registration </br>
		•	Payments </br>
		•	Kid’s activities and Monitoring </br> </br>
		Additional Features </br> </br>
		•		Customizable Admin options
        `,
    },
    {
      title: "LiveKool",
      avatar: "/images/live-kool.jpeg",
      description: `
      Our product Live Kool is a simple, cool Apartment Renters application
      where owners and renters can manage their rental activities with ease.</br> </br>
		Owners</br> </br>
		•	Manage and Screen Applications </br>
		•	Resident Management </br>
		•	Customize Lease	</br>
		•	Apartment management and Operations</br> </br>
		Lessees</br> </br>
		•	Apartment Listing </br>
		•	Tour Apartments </br>
		•	Renters Payments </br>
		•	Apartment Maintenance </br> </br>
		Additional Features</br> </br>
		•	Credit reports </br>
		•	Rent Price Analysis </br>
       `,
    },
    {
      title: "DocKool",
      avatar: "/images/Docit.jpeg",
      description: `
      Our product Doc – Kool is a simple, cool Document collaboration application
       where your teams can manage notes, documents, projects, deliverables, 
       tech specs, guides all in one place and fast. </br> </br>
		Features </br> </br>
		•	Multiple Workspaces </br>
		•	Auto Formatting </br>
		•	Automated Tables </br>
		•	Document Themes and Branding.</br>
      
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
