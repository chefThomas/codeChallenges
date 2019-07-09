import React from "react";
import "../css/main.css";

const Header = props => {
  return (
    <div className="Header-container">
      <h1 className="Header">
        <span className="Header-title">Card Dealer</span>
        <span className="Header-counter">Remaining {props.cardsRemaining}</span>
      </h1>
    </div>
  );
};

export default Header;
