import React from "react";
import { otherServiceCards } from "./ServiceCardData";

function OtherServices() {
  return (
    <div className="Contact-1">
      <div className="sev-imgs osev-mb">
        {otherServiceCards.map(({ img, title }, index) => (
          <div className="sev-cards " key={index}>
            <div className="sev-cardimg"> {img} </div>
            <div className=" cardtitle"> {title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherServices;
