import React, { Component } from "react";
import ApiRequestButton from "./ApiRequestButton";
import Joke from "./Joke";
import axios from "axios";

export default class JokeList extends Component {
  state = {
    jokes: []
  };

  componentDidMount() {
    this.get10UniqueJokes();
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

  updateVote = (jokeId, voteButton) => {
    console.log(jokeId, voteButton);
    this.setState(st => ({
      jokes: st.jokes.map(joke => {
        const voteCountAdjust = voteButton === "upVote" ? 1 : -1;
        return joke.id === jokeId
          ? { ...joke, votes: joke.votes + voteCountAdjust }
          : joke;
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
    console.log(this.state);
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
      <div>
        <ApiRequestButton getJokes={this.get10UniqueJokes} />
        {this.renderJokes()}
      </div>
    );
  }
}
