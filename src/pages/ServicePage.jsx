import React from "react";
import OtherServices from "../componetCards/servicepagecomponentsandcards/OtherServices";
import Review from "../componetCards/servicepagecomponentsandcards/Review";
import Services from "../componetCards/servicepagecomponentsandcards/Services";
import arc from "../assets/arc.png";
import O2arc from "../assets/O2arc.png";
import dotdotdot from "../assets/dot-dot-dot.png";

function ServicePage() {
  return (
    <div className="Page">
      <section id="service" className="overview OPages">
        <div className="overview-head ">
          <h3 className="section-heads">Services</h3>
          <img className="arc Warc" src={arc} alt="arc" />
          <img className="arc Carc" src={O2arc} alt="arc" />
        </div>
        <div className="sectionoverbody">
          <img className="semielipse d-o-t abt-dot" src={dotdotdot} alt="img" />
          <Services />
        </div>
      </section>

      <section className="overview OPages">
        <div className="overview-head ">
          <h3 className="section-heads">Other Services</h3>
          <img className="arc Warc" src={arc} alt="arc" />
          <img className="arc Carc" src={O2arc} alt="arc" />
        </div>
        <OtherServices />
      </section>

      <section id="Reviews" className="overview OPages">
        <div className="overview-head ">
          <h3 className="section-heads">Reviews</h3>
          <img className="arc Warc" src={arc} alt="arc" />
          <img className="arc Carc" src={O2arc} alt="arc" />
        </div>
        <Review />
      </section>
    </div>
  );
}

export default ServicePage;
