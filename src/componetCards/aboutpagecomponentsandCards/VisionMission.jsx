import React from "react";
import redarr from "../../assets/redArr.svg";

function VisionMission() {
  return (
    <div className="Vision-Mission">
      <div id="vision" className="V-M">
        <div className="VM-head PFD">
          <h2>Our Vision</h2>
          <div className="VM-circle"></div>
        </div>

        <div className="VM-body">
          <p>
            To be the World's most unique, endearing and quality-driven
            professional outfit that renders efficient services through
            effective and professional competence.
          </p>
          <p className="red-readmore">
            {" "}
            Read more <img src={redarr} alt="arr" />{" "}
          </p>
        </div>
      </div>

      <div id="mission" className="V-M">
        <div className="VM-head PFD">
          <h2>Our Mission</h2>
          <div className="VM-circle"></div>
        </div>

        <div className="VM-body ">
          <p>
            We strive to offer excellent services by leveraging on both tech and
            human competence to drive improved outcomes, towards birthing
            desired results and creating long lasting impressions.
          </p>
          <p className="red-readmore">
            {" "}
            Read more <img src={redarr} alt="arr" />{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VisionMission;
