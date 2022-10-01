import React, { useState } from "react";

function Requestform() {
  const [REQfirstName, setREQFirstName] = useState("");
  const [REQlastName, setREQLastName] = useState("");
  const [REQemail, setREQEmail] = useState("");
  const [REQphnum, setREQPhnum] = useState("");
  const [REQtypeOfService, setREQtypeOfService] = useState("");
  const [REQDesYourNeeds, setREQDesYourNeeds] = useState("");
  const [REQDateofService, setREQDateofService] = useState("");
  const [REQabtself, setREQABTself] = useState("");
  const [REQref, setREQRef] = useState("");
  const [REQrefName, setREQRefName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    setREQFirstName("");
    setREQLastName("");
    setREQEmail("");
    setREQPhnum("");
    setREQtypeOfService("");
    setREQDesYourNeeds("");
    setREQDateofService("");
    setREQABTself("");
    setREQRef("");
    setREQRefName("");
  };

  return (
    <form className="MIF-form" onSubmit={onSubmit}>
      <div className="req-two">
        <div className="MIF-field">
          <label className="MIF-label"> First Name</label> <br />
          <input
            type="text"
            className="MIFnameInput"
            placeholder=" "
            value={REQfirstName}
            onChange={(e) => setREQFirstName(e.target.value)}
            required
          />
        </div>

        <div className="MIF-field">
          <label className="MIF-label"> Last Name</label> <br />
          <input
            type="text"
            className="MIFnameInput"
            placeholder=" "
            value={REQlastName}
            onChange={(e) => setREQLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="MIF-field">
        <label className="MIF-label"> Email Address </label> <br />
        <input
          type="email"
          className="MIFnameInput"
          placeholder=" "
          value={REQemail}
          onChange={(e) => setREQEmail(e.target.value)}
          required
        />
      </div>
      <div className="req-two">
        <div className="MIF-field">
          <label className="MIF-label"> Phone Number</label> <br />
          <input
            type="number"
            className="MIFnameInput phn"
            value={REQphnum}
            onInput={(e) => setREQPhnum(e.target.value)}
          />
        </div>

        <div className="MIF-field">
          <label className="MIF-label"> Type of Service</label> <br />
          <select
            type="text"
            className="MIFnameInput"
            name=""
            id=""
            value={REQtypeOfService}
            onChange={(e) => setREQtypeOfService(e.target.value)}
          >
            <option />
            <option value="Your Personal Chauffeur">
              Your Personal Chauffeur
            </option>
            <option value="On-Demand Air Travel">On-Demand Air Travel</option>
            <option value="Red Carpet Ready"> Red Carpet Ready</option>
            <option value="Aircraft Services">Aircraft Services</option>
            <option value="Yacht/Watercraft Services">
              {" "}
              Yacht/Watercraft Services
            </option>

            <option value="Estate/Property Consultation">
              Estate/Property Consultation
            </option>
            <option value="Private Security Services">
              Private Security Services
            </option>
            <option value="Standby Lifestyle Managers">
              Standby Lifestyle Managers
            </option>
            <option value="Premium Event Access & VIP Support">
              Premium Event Access & VIP Support
            </option>
            <option value="Other Services">Other Services</option>
          </select>
        </div>
      </div>

      <div className="MIF-field">
        <label className="MIF-label"> Describe Your Needs</label> <br />
        <textarea
          name="DYNmessage"
          id="DYNmessage"
          placeholder=" Enter how we can help you "
          className="MIFnameInput MIFtextarea"
          value={REQDesYourNeeds}
          onChange={(e) => setREQDesYourNeeds(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="MIF-field">
        <label className="MIF-label"> Date of service</label> <br />
        <input
          type="text"
          className="MIFnameInput"
          value={REQDateofService}
          onChange={(e) => setREQDateofService(e.target.value)}
        />
      </div>
      <div className="MIF-field">
        <label className="MIF-label"> Tell us about yourself</label> <br />
        <textarea
          name="DYNmessage"
          placeholder=" "
          className="MIFnameInput MIFtextarea"
          value={REQabtself}
          onChange={(e) => setREQABTself(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="MIF-field">
        <label className="MIF-label">
          How did you hear about us? (Enter Referer’s name if you were referred)
        </label>
        <br />
        <select
          type="text"
          className="MIFnameInput"
          name=""
          id=""
          value={REQref}
          onChange={(e) => setREQRef(e.target.value)}
        >
          <option value=""></option>
          <option value="Referred">Referred</option>
          <option value="Facebook">Facebook</option>
          <option value="Twitter">Twitter</option>
          <option value="Instagram"> Instagram</option>
          <option value="le-rambouillet">le-rambouillet</option>
          <option value="Youtube"> Youtube</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Billboard">Billboard</option>
          <option value="Advert">Advert</option>
        </select>
      </div>
      {REQref === "Referred" && (
        <div className="MIF-field">
          <label className="MIF-label"> Referer's Name</label> <br />
          <input
            type="text"
            className="MIFnameInput"
            placeholder=" "
            value={REQrefName}
            onChange={(e) => setREQRefName(e.target.value)}
          />
        </div>
      )}
      <button type="submit" className="MIF-btn">
        <p>Submit</p>
      </button>
    </form>
  );
}

export default Requestform;
