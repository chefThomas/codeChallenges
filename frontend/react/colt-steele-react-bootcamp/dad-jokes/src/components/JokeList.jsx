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

    if (this.state.jokes.some(joke => joke.data.id === res.id)) {
      console.log("joke is already there");
      return;
    } else {
      console.log(res);
      return res;
    }
  };

  // get jokes in 10 count batch
  get10UniqueJokes = async () => {
    let tenUniqueJokes = [];

    while (tenUniqueJokes.length < 10) {
      const joke = await this.getJoke();
      tenUniqueJokes.push(joke);
    }

    this.setState(st => ({ jokes: [...st.jokes, ...tenUniqueJokes] }));
    tenUniqueJokes = [];
    console.log("after set state in get10jokes", tenUniqueJokes);
  };

  // render joke list
  renderJokes = () => {
    return this.state.jokes.map(jokeObj => {
      const { joke, id } = jokeObj.data;
      return <Joke joke={joke} id={id} />;
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
