// import React from "react";
import "../css/main.css";
import shuffle from "../shuffle.png";

import React, { Component } from "react";

export default class Shuffle extends Component {
  handleClick = e => {
    this.props.shuffleCards();
  };

  render() {
    return (
      <button onClick={this.handleClick} className={this.props.className}>
        <img className="Shuffle-icon" src={shuffle} alt="shuffle deck" />
      </button>
    );
  }
}
