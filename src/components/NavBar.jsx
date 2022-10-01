import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import Ham from "../assets/Hamburger-menu.svg";
import Close from "../assets/Close.svg";

function NavBar() {
  const [hamopen, setHamopen] = useState(false);
  const toggleham = () => setHamopen(!hamopen);
  const toggleclose = () => setHamopen(false);

  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="Navbar">
      <div className="NavItem">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        {hamopen ? (
          <img className="ham" src={Close} onClick={toggleham} alt="close" />
        ) : (
          <img className="ham" src={Ham} onClick={toggleham} alt="menu" />
        )}

        <div className={`${hamopen ? "navshow" : "navhid"} "NavLinks" `}>
          {hamopen ? <img src={Logo} alt="Logo" /> : ""}
          <Link to="/" onClick={toggleclose} className="link-to">
            <p className={pathMatchRoute("/") && "activepage"}> Home</p>
          </Link>
          <Link to="/about" onClick={toggleclose} className="link-to">
            <p className={pathMatchRoute("/about") && "activepage"}>About </p>
          </Link>
          <Link to="/contact" onClick={toggleclose} className="link-to">
            <p className={pathMatchRoute("/contact") && "activepage"}>
              Contact
            </p>
          </Link>
          <Link to="/service" onClick={toggleclose} className="link-to">
            <p className={pathMatchRoute("/service") && "activepage"}>
              Services
            </p>
          </Link>

          <Link to="/request" onClick={toggleclose} className="link-to">
            <div className="req-btn">
              {" "}
              <p className={pathMatchRoute("/request") && "activepage"}>
                Request
              </p>{" "}
            </div>
          </Link>

          {hamopen ? (
            <p className="menu-foot"> © 2022 by Le'Rambouillet.</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
