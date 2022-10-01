import React from "react";
import arc from "../assets/arc.png";
import O2arc from "../assets/O2arc.png";
import ContactsSec from "../componetCards/contactpagecompnentsandcards.jsx/ContactsSec";
import FAQ from "../componetCards/contactpagecompnentsandcards.jsx/FAQ";
import MemInq from "../componetCards/contactpagecompnentsandcards.jsx/MemInq";
import Ouroffice from "../componetCards/contactpagecompnentsandcards.jsx/Ouroffice";
import dotdotdot from "../assets/dot-dot-dot.png";

function ContactPage() {
  return (
    <div className="Page">
      <section className="overview OPages">
        <div className="overview-head ">
          <h3 className="section-heads">Contact</h3>
          <img className="arc Warc" src={arc} alt="arc" />
          <img className="arc Carc" src={O2arc} alt="arc" />
        </div>
        <div className="sectionoverbody">
          <img className="semielipse d-o-t abt-dot" src={dotdotdot} alt="img" />
          <ContactsSec />
        </div>
      </section>

      <section className="overview OPages">
        <div className="overview-head ">
          <h3 className="section-heads">Our Office</h3>
          <img className="arc Warc" src={arc} alt="arc" />
          <img className="arc Carc" src={O2arc} alt="arc" />
        </div>
        <Ouroffice />
      </section>

      <section id="MemInq" className="overview OPages">
        <div className="overview-head ">
          <h3 className="section-heads">Membership Inquiry</h3>
          <img className="arc Warc" src={arc} alt="arc" />
          <img className="arc Carc" src={O2arc} alt="arc" />
        </div>
        <MemInq />
      </section>

      <section id="FAQs" className="overview OPages">
        <div className="overview-head ">
          <h3 className="section-heads">Frequently Asked Questions</h3>
          <img className="arc Warc" src={arc} alt="arc" />
          <img className="arc Carc" src={O2arc} alt="arc" />
        </div>
        <FAQ />
      </section>
    </div>
  );
}

export default ContactPage;
