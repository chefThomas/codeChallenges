import React, { Component } from "react";
import "../css/main.css";
//TODO add alt to cards
export default class Card extends Component {
  render() {
    return (
      <img
        className={this.props.className}
        src={this.props.src}
        style={this.props.style}
        alt=""
      />
    );
  }
}
