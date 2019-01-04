import React from "react";
import "./StoreButton.css";

const StoreButton = (props) => {
  return (
    <a className="store-link" href={props.href}>
      <img className="store-image unselectable" src={props.src} alt={props.alt} />
    </a>
  );
};

export default StoreButton;
