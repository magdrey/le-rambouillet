import React from "react";
import Logo from "../assets/Logo.svg";
import fb from "../assets/Facebook.svg";
import insta from "../assets/Instagram.svg";
import tw from "../assets/Twitter.svg";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <div className="foot">
      <div className="foot-body">
        <div className="foot-level1">
          <HashLink smooth to="#top">
            <img className="foot-logo" src={Logo} alt="logo" />
          </HashLink>

          <p className="foot-level1-text">
            {" "}
            Connect with the transformative journey of a lifetime. We climb to
            great heights to enrich your jet-set lifestyle with unrivaled
            culture and luxury. Your vision of vacation excellence is our
            masterpiece to deliver.
          </p>
        </div>
        <div className="foot-level2">
          <div className="level2">
            <p className="FH-head">Home</p>
            <HashLink to="/#UEEVENTS" smooth className="FH-body">
              Event
            </HashLink>
            <HashLink to="/service#Reviews" className="FH-body">
              Testimonials
            </HashLink>
          </div>
          <div className="level2">
            <p className="FH-head">About</p>
            <HashLink to="/about#History" className="FH-body">
              History
            </HashLink>
            <HashLink to="/about#mission" className="FH-body">
              Mission
            </HashLink>
            <HashLink to="/about#vision" className="FH-body">
              Vision
            </HashLink>
          </div>
        </div>
        <div className="foot-level2">
          <div className="level2">
            <p className="FH-head">Service</p>
            <HashLink to="/#UEEVENTS" className="FH-body">
              Reservation
            </HashLink>
            <HashLink className="FH-body">Sky diving</HashLink>
            <HashLink to="/contact#FAQs" className="FH-body">
              FAQ
            </HashLink>
          </div>
          <div className="level2 bg-exd">
            <p className="FCH-head">Contacts</p>
            <div className="foot-contact-body">
              <p className="FC-head Gilroy-B"> A T L A N T A</p>
              <p className="FC-body">
                3340 Peachtree Road NE Ste 1010 <br /> Atlanta, GA 30326 <br />{" "}
                Tel: +1 470 242-1783
              </p>
            </div>
            <div className="foot-contact-body">
              <p className="FC-head Gilroy-B"> A T L A N T A</p>
              <p className="FC-body">
                3340 Peachtree Road NE Ste 1010 <br /> Atlanta, GA 30326 <br />{" "}
                Tel: +1 470 242-1783
              </p>
            </div>
            <div className="foot-socials">
              <img className="soc" src={fb} alt="fb " />
              <img className="soc mt" src={insta} alt="insta " />
              <img className="soc" src={tw} alt="tw " />
            </div>
          </div>
        </div>
      </div>
      <p className="foot-by">© 2022 by Le'Rambouillet.</p>
      {/* <p className="foot-by"> Johnson Goodness.</p>   */}
    </div>
  );
}

export default Footer;
