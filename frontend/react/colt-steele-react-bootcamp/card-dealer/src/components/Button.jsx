import React, { Component } from "react";
import "../css/main.css";

import deal from "../deal.png";

export default class Button extends Component {
  handleClick = () => {
    console.log("button clicked");
    this.props.addCard();
  };

  render() {
    return (
      <button
        className="Button"
        disabled={!this.props.cardsRemaining}
        onClick={this.handleClick}
      >
        <img className="deal-icon" src={deal} alt="deal card button" />
      </button>
    );
  }
}
