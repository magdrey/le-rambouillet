import React, { useState } from "react";
import dropda from "../../assets/dropdownarr.png";

function FaqItem({ ques, ans }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="FAQ-Q">
      <div className="Faq-head">
        <p onClick={() => setExpanded(!expanded)} className="Faq-ques">
          {ques}
        </p>
        <img
          className={`${expanded ? "arrup" : " "} "DParr" `}
          src={dropda}
          onClick={() => setExpanded(!expanded)}
          alt=" ^ "
        />
      </div>
      {expanded && <p className="Faq-ans"> {ans} </p>}
    </div>
  );
}

export default FaqItem;
