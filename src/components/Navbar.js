import React, { Component } from "react";
import "./Navbar.css";
import Vertical from "./Vertical";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavbarSide align={"left"}>
          <img className="navbar-logo unselectable" src="./images/logo.png" alt="Hupaze logo" />
        </NavbarSide>
        <NavbarSide align={"right"}>
          <NavbarLink title={"Privacy"} href={"./privacy"} />
          <NavbarLink title={"Support"} href={"mailto:support@hupaze.com"} />
        </NavbarSide>
      </div>
    );
  }
}

const NavbarSide = (props) => (
  <div className="navbar-side" style={{ textAlign: `${props.align}` }}>
    {props.children}
    <Vertical />
  </div>
);

const NavbarLink = (props) => (
  <a className="navbar-link" href={props.href}>{props.title}</a>
);

export default Navbar;
