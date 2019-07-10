import React, { Component } from "react";

export default class Joke extends Component {
  render() {
    return <div id={this.props.id}>{this.props.joke}</div>;
  }
}
