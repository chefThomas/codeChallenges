import React, { Component } from "react";

export default class Joke extends Component {
  // // default props votes = 0
  // static defaultProps = {
  //   votes: 0
  // };

  handleClick = e => {
    const voteButton = e.target.getAttribute("name");
    const jokeId = e.target.parentNode.getAttribute("id");
    this.props.handleVote(jokeId, voteButton);
  };

  render() {
    return (
      <div id={this.props.id}>
        <i name="upVote" onClick={this.handleClick} class="fas fa-arrow-up" />
        <span>{this.props.votes}</span>
        <i
          name="downVote"
          onClick={this.handleClick}
          class="fas fa-arrow-down"
        />{" "}
        <p>{this.props.joke}</p>
      </div>
    );
  }
}
