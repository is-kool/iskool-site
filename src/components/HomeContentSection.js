import React from "react";
import { Link } from "react-router-dom";
import "./HomeContentSection.css";

const HomeContentSection = () => {
  return (
    <>
      <div className="container">
        <div>
          <div className="section-1">
            <p className="title">
            NO MORE WANDERING IDEAS.
              <br />
              WITH ISKOOL, ALL YOUR IDEAS FIND HOME. 
            </p>
            <p>
              Our Mission
              <br />  <br />
              <span>
                IsKool seeks to create a platform that unifies your innovative ideas with 
                our powerful solutions. <br />We strive to grow our business with the 
                same honesty and integrity we use to craft our ideas, <br />
                with modern technology and expertise.
              </span>
            </p>
            <p>
              Our Experience
              <br />  <br />
              <span>IsKool has been a successful software application development company for 
              the past three years. <br />We have worked on different products, created software for
               various software problems, opportunities,<br /> cloud solutions, web services, 
               hosting and product design. <br />Client’s time, product purpose,
                end quality are our major focus points that we strive to excel. 
				<br />Contact us to find out more.
</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContentSection;
