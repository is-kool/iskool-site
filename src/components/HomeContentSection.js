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
              No more wandering Ideas.
              <br />
              With Iskool, all ideas, find a home.
            </p>
            <p>
              Our Mission
              <br />
              <span>
                All ideas live as ideas once generated; All it matters is
                turning them into solutions. At iskool, our mission is to bring
                all living ideas to living solutions.
              </span>
            </p>
            <p>
              Our Experience
              <br />
              <span>So far experience</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContentSection;
