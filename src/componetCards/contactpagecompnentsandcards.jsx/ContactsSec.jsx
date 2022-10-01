import React from "react";
import contimg1 from "../../assets/contimg1.jpg";

function ContactsSec() {
  return (
    <div className="Contact-1">
      <div className="Contact-text ">
        <p className="AbtText">
          Whether you are buying or selling your private real estate, or
          planning your next pleasure or business travel, our dedicated team of
          lifestyle professionals is just a click or a phone call away. Our
          luxury concierge team will reply to your enquiry as quickly and
          efficiently as possible.ces? Fill the forms below in respect to the
          service you require <br /> <br />
        </p>
      </div>
      <div className="Contact-img">
        <img src={contimg1} alt="img" />
      </div>
    </div>
  );
}

export default ContactsSec;
