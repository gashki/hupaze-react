import React, { Component } from "react";
import "./Content.css";
import Navbar from "./Navbar";
import Information from "./Information";
import Vertical from "./Vertical";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Navbar />
        <ContentSide>
          <Devices />
        </ContentSide>
        <ContentSide>
          <Information />
        </ContentSide>
      </div>
    );
  }
}

const ContentSide = (props) => (
  <div className="content-side" style={{ textAlign: `${props.align}` }}>
    {props.children}
    <Vertical />
  </div>
);

const Devices = () => (
  <img className="devices unselectable" src="./images/mobile.png" alt="Mobile screenshots" />
);

export default Content;
