import React, { Component } from "react";
import "./Background.css";

class Background extends Component {
  render() {
    return (
      <div className="background">
        <BackgroundSide background={"linear-gradient(to bottom right, #00A6B2, #0AC9A1)"} />
        <BackgroundSide background={"#F7F5F7"} />
      </div>
    );
  }
}

const BackgroundSide = (props) => {
  return (
    <div className="background-side" style={{ background: `${props.background}` }}></div>
  );
};

export default Background;
