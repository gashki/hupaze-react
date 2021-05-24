import React from "react";
import "./Details.css";

const Details = () => (
  <div className="details">
    <div>
      <h2>Play <span style={{ color: "#0ac9a1" }}>Credit Card Roulette</span>.</h2>
      <h2>Find Out <span style={{ color: "#00a6b2" }}>Who Pays</span>.</h2>
      <p>Hupaze is a credit card roulette app intended for individuals that like to eat out with their friends and family. You can save details about the occasion and view statistics for each person that you have paid for and who has paid for you.</p>
      <div className="details-stores">
        <AppStore href={"https://apps.apple.com/app/hupaze/id1438329096"} src={"./images/app-store.png"} alt={"Available on the App Store"} />
        <AppStore href={"https://play.google.com/store/apps/details?id=com.hinker.hupaze"} src={"./images/google-play.png"} alt={"Available on Google Play"} />
      </div>
    </div>
  </div>
);

const AppStore = (props) => (
  <a className="app-store" href={props.href}>
    <img className="unselectable" src={props.src} alt={props.alt} />
  </a>
);

export default Details;
