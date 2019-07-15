import React, { Component } from "react";
import GetJokesButton from "./GetJokesButton";
import Joke from "./Joke";
import axios from "axios";

import "../css/main.css";

export default class JokeList extends Component {
  state = {
    jokes: []
  };

  componentDidMount() {
    // set state to jokes in local storage. If none, then query API
    const localJokes = JSON.parse(window.localStorage.getItem("jokes"));
    console.log(localJokes);
    localJokes ? this.setState({ jokes: localJokes }) : this.get10UniqueJokes();
  }

  // get single unique joke
  getJoke = async () => {
    const config = {
      headers: { Accept: "application/json" }
    };

    const res = await axios.get("https://icanhazdadjoke.com/", config);

    if (this.state.jokes.some(joke => joke.id === res.id)) {
      return;
    } else {
      return res.data;
    }
  };

  componentDidUpdate() {
    window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
  }

  updateVote = (jokeId, voteButton) => {
    console.log(jokeId, voteButton);
    this.setState(st => ({
      jokes: st.jokes
        .map(joke => {
          const voteCountAdjust = voteButton === "upVote" ? 1 : -1;
          return joke.id === jokeId
            ? { ...joke, votes: joke.votes + voteCountAdjust }
            : joke;
        })
        .sort((jokeA, jokeB) => {
          return jokeB.votes - jokeA.votes;
        })
    }));
  };

  // get jokes in 10 count batch and sets state
  get10UniqueJokes = async () => {
    let tenUniqueJokes = [];

    while (tenUniqueJokes.length < 10) {
      let joke = await this.getJoke();
      tenUniqueJokes.push({ ...joke, votes: 0 });
    }
    this.setState(st => ({ jokes: [...st.jokes, ...tenUniqueJokes] }));
    tenUniqueJokes = [];
  };

  renderJokes = () => {
    return this.state.jokes.map(jokeObj => {
      const { joke, id, votes } = jokeObj;
      return (
        <Joke joke={joke} id={id} votes={votes} handleVote={this.updateVote} />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <GetJokesButton getJokes={this.get10UniqueJokes} />
        <div className="JokeList">
          <div className="JokeList-jokes">{this.renderJokes()}</div>
        </div>
      </div>
    );
  }
}
