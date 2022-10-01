import React from "react";
import { HashLink } from "react-router-hash-link";
import Abtimg1 from "../../assets/AbtimgC1.png";
import Abtimg1s from "../../assets/Abtimg1.jpg";
import dotdotdot from "../../assets/dot-dot-dot.png";
import arc from "../../assets/arc.png";
import Oarc from "../../assets/Oarc.png";

function Aboutus() {
  return (
    <>
      <div className="overview-head ">
        <h3 className="section-heads">About Us</h3>
        <img className="arc Warc" src={arc} alt="arc" />
        <img className="arc Carc" src={Oarc} alt="arc" />
      </div>

      <div className="About-1">
        <img className="semielipse d-o-t abt-dot" src={dotdotdot} alt="img" />
        <div className="Aboutus-img">
          <img className="imgsm" src={Abtimg1s} alt="img" />
          <img className="imgbg" src={Abtimg1} alt="img" />
        </div>
        <div className="Aboutus-text">
          <p className="AbtText">
            Your lifestyle is marked by elevated taste and authenticity. With
            the world as your sandbox, only you possess the vision of your ideal
            immersive experience. All that stands between you and the indulgent
            adventure you crave is the dedicated team to make it happen.
          </p>
          <p className="AbtText">
            Le Rambouillet is your preeminent travel concierge. We are committed
            to delivering the transformative experience that suits your
            distinctive sense of wonder. Our exclusive network of high-end
            partnerships is trusted by the world’s most discerning travelers to
            transport you into a realm of superior elegance.
          </p>
          <p className="AbtText">
            Explore our collection of hand-crafted getaways to inspire your
            inner-globetrotter. With Le Rambouillet at your service, your access
            is limitless to the finest this world has to offer.
          </p>

          <div className="apply-btn">
            <HashLink className="HsLink" smooth to="/contact#MemInq">
              Apply for membership
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
