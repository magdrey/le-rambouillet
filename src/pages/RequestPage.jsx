import React from "react";
import arc from "../assets/arc.png";
import O2arc from "../assets/O2arc.png";
import dotdotdot from "../assets/dot-dot-dot.png";
import Requestform from "../componetCards/requestpagecomponents/Requestform";
import RequestTop from "../componetCards/requestpagecomponents/RequestTop";

function RequestPage() {
  return (
    <div className="Page">
      <section className="overview OPages">
        <div className="overview-head ">
          <h3 className="section-heads">Request</h3>
          <img className="arc Warc" src={arc} alt="arc" />
          <img className="arc Carc" src={O2arc} alt="arc" />
        </div>
        <div className="sectionoverbody">
          <img className="semielipse d-o-t abt-dot" src={dotdotdot} alt="img" />
          <RequestTop />
        </div>
        <div className="req-form">
          <Requestform />
        </div>
      </section>
    </div>
  );
}

export default RequestPage;
