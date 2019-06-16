import React, { Component } from "react";
import "./Cell.css";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  handleClick = index => {
    this.props.handleClick(this.props.dataindex);
    // target with ref
  };

  render() {
    return (
      <div
        ref={this.ref}
        className={this.props.className}
        onClick={this.handleClick}
      />
    );
  }
}
