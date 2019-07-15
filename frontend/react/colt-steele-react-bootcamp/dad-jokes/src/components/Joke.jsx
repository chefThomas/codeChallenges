import React, { Component } from "react";

import "../css/main.css";

export default class Joke extends Component {
  // // default props votes = 0
  // static defaultProps = {
  //   votes: 0
  // };

  handleClick = e => {
    const voteButton = e.target.getAttribute("name");
    const jokeId = e.target.parentNode.parentNode.getAttribute("id");
    this.props.handleVote(jokeId, voteButton);
  };

  render() {
    return (
      <div className="Joke" id={this.props.id}>
        <div className="vote-container">
          <i
            name="upVote"
            onClick={this.handleClick}
            className="fas fa-arrow-up"
          />
          <span>{this.props.votes}</span>
          <i
            name="downVote"
            onClick={this.handleClick}
            className="fas fa-arrow-down"
          />{" "}
        </div>
        <p>{this.props.joke}</p>
      </div>
    );
  }
}
