import React from "react";
import Aboutus from "../componetCards/aboutpagecomponentsandCards/Aboutus";
import MeetOurPartners from "../componetCards/aboutpagecomponentsandCards/MeetOurPartners";
import OurHistory from "../componetCards/aboutpagecomponentsandCards/OurHistory";
import VisionMission from "../componetCards/aboutpagecomponentsandCards/VisionMission";
import arc from "../assets/arc.png";
import O2arc from "../assets/O2arc.png";

function AboutPage() {
  return (
    <div className="Page">
      <section className="overview OPages abt-us-bgc">
        <Aboutus />
      </section>

      <section id="History" className="overview OPages">
        <div className="overview-head ">
          <h3 className="section-heads">Our History</h3>
          <img className="arc Warc" src={arc} alt="arc" />
          <img className="arc Carc" src={O2arc} alt="arc" />
        </div>
        <OurHistory />
      </section>

      <section>
        <VisionMission />
      </section>

      <section className="overview OPages">
        <div className="overview-head ">
          <h3 className="section-heads">Meet Our Partners</h3>
          <img className="arc Warc" src={arc} alt="arc" />
          <img className="arc Carc" src={O2arc} alt="arc" />
        </div>
        <MeetOurPartners />
      </section>
    </div>
  );
}

export default AboutPage;
