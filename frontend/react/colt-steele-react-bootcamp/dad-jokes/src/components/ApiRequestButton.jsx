import React, { Component } from "react";

export default class ApiRequestButton extends Component {
  handleClick = e => {
    console.log("in handle click");
    this.props.getJokes();
  };
  render() {
    return <button onClick={this.handleClick}>Get Jokes</button>;
  }
}
