import React, { Component } from "react";
import "../css/main.css";

export default class Button extends Component {
  handleClick = () => {
    console.log("button clicked");
    this.props.drawCard();
  };

  render() {
    return (
      <button className="Button" onClick={this.handleClick}>
        Draw card
      </button>
    );
  }
}
