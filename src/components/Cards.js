import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-2.jpg"
              text="School app that connects teachers, parents and students in one place"
              label="Karunalaya"
              path="/products"
            />
            <CardItem
              src="images/img-2.jpg"
              text="School app that connects teachers, parents and students in one place"
              label="Karunalaya"
              path="/products"
            />
            <CardItem
              src="images/img-2.jpg"
              text="School app that connects teachers, parents and students in one place"
              label="Karunalaya"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;