import React, { Component } from "react";
import axios from "axios";

import Button from "./Button";
import Card from "./Card";
import Header from "./Header";

//CSS
import "../css/main.css";

import deal from "../deal.png";

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
    const imageUrl = res.data.cards[0].image;
    const transform = this.generateRotationCSS();
    // const translation = this.generateTranslationCSS();
    const remaining = res.data.remaining;
    console.log(transform);
    this.setState(st => ({
      hand: [...st.hand, { imageUrl, transform }],
      remaining
    }));
  };

  generateRotationCSS = () => {
    const randDeg = Math.ceil(Math.random() * 45);
    const randPx = () => Math.floor(Math.random() * 20);
    const sign = -1;

    return {
      transform: `rotate(${randDeg}deg) translate(${randPx() *
        sign}px, ${randPx() * sign}px)`
    };
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
        <div className="hand">{this.renderHand()}</div>
        <Button cardsRemaining={this.state.remaining} addCard={this.drawCard} />
      </div>
    );
  }
}
