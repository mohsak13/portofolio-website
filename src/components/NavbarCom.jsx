import React, { useState } from "react";
import "./style/navbarCom.css";

const NavbarCom = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar d-flex align-items-start justify-content-between">
      <div className="navbar-img">
        <img src="/images/cross_top.png" alt="" />
      </div>
      <div onClick={() => setToggle(!toggle)} className="navbar-links">
        <i class="bi bi-list"></i>
      </div>
      <ul style={{ left: toggle === true ? "0" : "-250px" }} className="links">
        <li>Home</li>
        <li>About Me</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavbarCom;
