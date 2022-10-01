import React, { useState } from "react";

function MemInq() {
  const [MIFfirstName, setMIFFirstName] = useState("");
  const [MIFlastName, setMIFLastName] = useState("");
  const [MIFemail, setMIFEmail] = useState("");
  const [MIFphnum, setMIFPhnum] = useState("");
  const [MIFmessage, setMIFMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    setMIFFirstName("");
    setMIFLastName("");
    setMIFEmail("");
    setMIFPhnum("");
    setMIFMessage("");
  };

  return (
    <form className="MIF-form" onSubmit={onSubmit}>
      <div className="MIF-field">
        <label className="MIF-label"> First Name</label> <br />
        <input
          type="text"
          className="MIFnameInput"
          placeholder=" "
          value={MIFfirstName}
          onChange={(e) => setMIFFirstName(e.target.value)}
          required
        />
      </div>

      <div className="MIF-field">
        <label className="MIF-label"> Last Name</label> <br />
        <input
          type="text"
          className="MIFnameInput"
          placeholder=" "
          value={MIFlastName}
          onChange={(e) => setMIFLastName(e.target.value)}
        />
      </div>

      <div className="MIF-field">
        <label className="MIF-label"> Email Address </label> <br />
        <input
          type="email"
          className="MIFnameInput"
          placeholder=" "
          value={MIFemail}
          onChange={(e) => setMIFEmail(e.target.value)}
          required
        />
      </div>

      <div className="MIF-field">
        <label className="MIF-label"> Phone Number</label> <br />
        <input
          type="number"
          className="MIFnameInput phn"
          value={MIFphnum}
          onInput={(e) => setMIFPhnum(e.target.value)}
        />
      </div>

      <div className="MIF-field">
        <label className="MIF-label"> Message</label> <br />
        <textarea
          name="message"
          id="message"
          className="MIFnameInput MIFtextarea"
          value={MIFmessage}
          onChange={(e) => setMIFMessage(e.target.value)}
          required
        ></textarea>
      </div>

      <button type="submit" className="MIF-btn">
        <p>Send Message</p>
      </button>
    </form>
  );
}

export default MemInq;
