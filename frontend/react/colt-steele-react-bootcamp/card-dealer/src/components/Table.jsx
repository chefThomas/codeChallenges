import React, { Component } from "react";
import axios from "axios";

import Button from "./Button";
import Card from "./Card";
import Header from "./Header";
import Shuffle from "./Shuffle";

import "../css/main.css";

export default class Table extends Component {
  state = {
    deck_id: "",
    hand: [],
    remaining: 52
  };

  // get deck id from card API
  async componentDidMount() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const res = await axios.get(url);
    const deck_id = res.data.deck_id; // check
    // set deck id in state
    this.setState({ deck_id });
  }

  drawCard = async () => {
    const url = `https://deckofcardsapi.com/api/deck/${
      this.state.deck_id
    }/draw/?count=1
    `;
    const res = await axios.get(url);
    const imageUrl = await res.data.cards[0].image;
    const remaining = await res.data.remaining;
    const transform = this.generateTransformCss();
    console.log(transform);
    this.setState(st => ({
      hand: [...st.hand, { imageUrl, transform }],
      remaining
    }));
  };

  generateTransformCss = () => {
    const randDeg = Math.ceil(Math.random() * 25);
    const randPx = () => Math.floor(Math.random() * 20);
    const sign = () => (Math.random() > 0.5 ? 1 : -1);

    return {
      transform: `rotate(${randDeg * sign()}deg) translate(${randPx() *
        sign()}px, ${randPx() * sign()}px)`
    };
  };

  shuffleCards = async () => {
    // api call for shuffle
    const url = `https://deckofcardsapi.com/api/deck/${
      this.state.deck_id
    }/shuffle/`;

    const res = await axios.get(url);

    // empty state.hand and reset remaining
    this.setState({ hand: [], ...res.data });
    console.log("in shuffle cards");
  };

  renderHand = () => {
    let zIndex = 0;
    return this.state.hand.map(card => {
      const newCard = (
        <Card
          src={card.imageUrl}
          zIndex={zIndex}
          className="Card"
          style={card.transform}
        />
      );
      zIndex++;
      return newCard;
    });
  };

  render() {
    return (
      <div className="Table">
        <Header
          cardsRemaining={this.state.remaining}
          drawCard={this.drawCard}
        />
        <Shuffle
          shuffleCards={this.shuffleCards}
          className={this.state.remaining ? "hide" : "Shuffle"}
        />
        <div className="hand">{this.renderHand()}</div>
        <Button cardsRemaining={this.state.remaining} addCard={this.drawCard} />
      </div>
    );
  }
}
