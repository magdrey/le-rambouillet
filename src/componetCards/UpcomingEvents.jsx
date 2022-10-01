import React from "react";
import { upcomingEvents } from "./CardData";

function UpcomingEvents() {
  return (
    <>
      {upcomingEvents.map(({ img, event, day, location }, index) => (
        <div className="UE-cards" key={index}>
          {img}
          <div className="UVtext">
            <div className="UEevent Gilroy-B"> {event}</div>
            <div className="UEday Gilroy-M"> {day} </div>
            <div className="UEloca Gilroy-M"> {location} </div>
            <div className="UEbtn">
              {" "}
              <h2>RSVP</h2>{" "}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default UpcomingEvents;
