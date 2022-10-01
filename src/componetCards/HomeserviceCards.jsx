import React from "react";
import { HomeServiceCards } from "./CardData";

function HomeserviceCards() {
  return (
    <>
      {HomeServiceCards.map((serviceData, index) => (
        <div className="homeservice-cards" key={index}>
          <div className="cardimg"> {serviceData.img} </div>
          <div className="cardtitle"> {serviceData.title}</div>
          <div className="cardtext"> {serviceData.content} </div>
        </div>
      ))}
    </>
  );
}

export default HomeserviceCards;
