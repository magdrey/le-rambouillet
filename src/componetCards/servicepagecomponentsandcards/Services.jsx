import React from "react";
import { servicesCards } from "./ServiceCardData";

function Services() {
  return (
    <div className="Contact-1">
      <div className="Contact-text ">
        <p className="AbtText">
          We understand what it means to indulge in an adventure that is both
          immersive and memorable which is why our getaways are hand-crafted to
          turn your dreams into reality. <br /> <br />
        </p>
      </div>
      <div className="sev-imgs ">
        {servicesCards.map(({ img, title }, index) => (
          <div className="sev-cards " key={index}>
            <div className="sev-cardimg"> {img} </div>
            <div className=" cardtitle"> {title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
