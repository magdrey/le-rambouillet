import React from "react";
import MOP1 from "../../assets/MOP1.svg";
import MOP2 from "../../assets/MOP2.svg";
import MOP3 from "../../assets/MOP3.svg";
import MOP4 from "../../assets/MOP4.png";
import MOP5 from "../../assets/MOP5.svg";

function MeetOurPartners() {
  return (
    <div className="MeetOurPartners">
      <img className="MOP" src={MOP1} alt="img" />
      <img className="MOP" src={MOP2} alt="img" />
      <img className="MOP" src={MOP3} alt="img" />
      <img className="MOP km" src={MOP4} alt="img" />
      <img className="MOP kmbg" src={MOP5} alt="img" />
    </div>
  );
}

export default MeetOurPartners;
