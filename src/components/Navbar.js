import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <div className="navbar">
    <img className="navbar-logo unselectable" src="./images/logo.png" alt="Hupaze logo" />
    <div style={{ flexGrow: 1 }} />
    <NavItem label={"Privacy"} href={"./privacy"} />
    <NavItem label={"Support"} href={"mailto:support@hupaze.com"} />
  </div>
);

const NavItem = (props) => (
  <a className="nav-item" href={props.href}>{props.label}</a>
);

export default Navbar;
