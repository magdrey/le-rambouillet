import React from "react";

import { HashLink } from "react-router-hash-link";
import heroimg from "../assets/Hero-image.svg";
import dotdotdot from "../assets/dot-dot-dot.png";
import semielipse from "../assets/Ellipse59.svg";
import arc from "../assets/arc.png";
import ueARC from "../assets/ueARC.png";
import OverviewCards from "../componetCards/OverviewCards";
import HomeserviceCards from "../componetCards/HomeserviceCards";
import RMArr from "../assets/readmoreArr.svg";
import DestinationAwaits from "../componetCards/DestinationAwaits";
import UpcomingEvents from "../componetCards/UpcomingEvents";
import polygon from "../assets/Polygon.svg";

function HomePage() {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="ws-dot-dot">
          <img src={dotdotdot} alt="..." />
        </div>
        <div className="hero-text">
          <h2> The World is a Gift To Be Delivered </h2>
          <p>
            {" "}
            Le Rambouillet is your premier luxury concierge, designed to help
            you savor the escape you envision.
          </p>
          <div className="apply-btn">
            <HashLink className="HsLink" smooth to="/contact#MemInq">
              Apply for membership
            </HashLink>
          </div>
        </div>

        <div className="heroimg">
          <img className="heroimg1" src={heroimg} alt="img" />
        </div>
      </section>

      {/* overview section */}
      <section className="overview">
        <div className="overview-head">
          <h3 className="section-heads">Overview</h3>
          <img className="arc" src={arc} alt="arc" />
        </div>
        <div className="sectionoverbody">
          <img className="semielipse" src={semielipse} alt="img" />
          <div className="overview-body">
            <OverviewCards />
          </div>
        </div>
      </section>

      {/* service section */}
      <section className="servicehome">
        <div className="overview-head">
          <img className="polygon" src={polygon} alt="arc" />
          <h3 className="section-heads">Our Services</h3>
          <img className="arc" src={arc} alt="arc" />
        </div>
        <div className="service-view-more">
          <HashLink className="HsLink" to="/service#service" smooth>
            View more <img src={RMArr} alt="arr" />
          </HashLink>
        </div>
        <div className="sectionoverbody">
          <img className="semielipse d-o-t" src={dotdotdot} alt="img" />
          <div className="overview-body mini-body ">
            <HomeserviceCards />
          </div>
        </div>
      </section>

      {/* your destination awaits section */}
      <section className="overview">
        <div className="overview-head">
          <h3 className="section-heads">Your Destination Awaits</h3>
          <img className="arc" src={arc} alt="arc" />
        </div>
        <div className="homeslider-body">
          <DestinationAwaits />
        </div>
      </section>

      {/* upcoming section */}
      <section id="UEEVENTS" className="overview upcoming-section">
        <div className="overview-head">
          <h3 className="section-heads">Upcoming Events</h3>
          <img className="arc" src={ueARC} alt="arc" />
        </div>
        <div className="service-view-more">
          View more <img src={RMArr} alt="arr" />
        </div>
        <div className="UE-body">
          <UpcomingEvents />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
