import React, { Component } from "react";

import "../css/main.css";

export default class Joke extends Component {
  handleClick = e => {
    const voteButton = e.target.getAttribute("name");
    const jokeId = e.target.parentNode.parentNode.getAttribute("id");
    console.log();
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
          <span className="vote-count">{this.props.votes}</span>
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
