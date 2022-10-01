import React from "react";
import { OverviewContent } from "./CardData";
import RMArr from "../assets/readmoreArr.svg";
function OverviewCards() {
  return (
    <>
      {OverviewContent.map((overviewData, index) => (
        <div className="overview-cards" key={index}>
          <div className="cardtitle"> {overviewData.title}</div>
          <div className="cardtext"> {overviewData.content} </div>
          <div className="read-more">
            Read more <img src={RMArr} alt="arr" />
          </div>
        </div>
      ))}
    </>
  );
}

export default OverviewCards;
