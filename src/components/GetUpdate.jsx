import React from "react";
import { useState } from "react";
import mail from "../assets/mail.png";

function GetUpdate() {
  const [email, setEmail] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <div className="NewsLetter">
      <div className="News-head PFD">
        {" "}
        Get updates straight into your inbox{" "}
      </div>
      <form className="News-form" onSubmit={handleClick}>
        <div className="mail-input">
          <img className="mailimg" src={mail} alt="mail" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="News-email"
            placeholder="Enter Your Email Address"
          />
        </div>
        <button type="submit" className="sub-btn">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default GetUpdate;
