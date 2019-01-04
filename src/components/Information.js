import React, { Component } from "react";
import "./Information.css";
import StoreButton from "./StoreButton";

class Information extends Component {
  render() {
    return (
      <div className="info-container">
        <InfoSlogan verb={"Play"} object={"Credit Card Roulette"} color={"#0AC9A1"} />
        <InfoSlogan verb={"Find Out"} object={"Who Pays"} color={"#00A6B2"} />
        <p className="info-description">Hupaze is a credit card roulette app intended for individuals that like to eat out with their friends and family. You can save details about the occasion and view statistics for each person that you have paid for and who has paid for you.</p>
        <div className="info-download">
          <StoreButton href={"https://itunes.apple.com/app/hupaze/id1438329096"} src={"./images/app-store.png"} alt={"Available on the App Store"} />
          <StoreButton href={"https://play.google.com/store/apps/details?id=com.hinker.hupaze"} src={"./images/google-play.png"} alt={"Available on Google Play"} />
        </div>
      </div>
    );
  }
}

const InfoSlogan = (props) => (
  <h1 className="info-slogan">
    {props.verb} <span style={{ color: props.color }}>{props.object}</span>.
  </h1>
);

export default Information;
