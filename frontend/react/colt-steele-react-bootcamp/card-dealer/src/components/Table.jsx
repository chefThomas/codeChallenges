import React, { Component } from "react";
import axios from "axios";

import Button from "./Button";
import Card from "./Card";

//CSS
import "../css/main.css";

export default class Table extends Component {
  state = {
    deck_id: "",
    hand: []
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
    const rotation = this.generateRotationCSS();

    this.setState(st => ({ hand: [...st.hand, { imageUrl, rotation }] }));
  };

  generateRotationCSS = () => {
    const rand = Math.ceil(Math.random() * 360);
    return {
      transform: `rotate(${rand}deg)`
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
          style={card.rotation}
        />
      );
      zIndex++;
      return newCard;
    });
  };

  render() {
    return (
      <div className="Table">
        <Button drawCard={this.drawCard} />
        <div className="hand">{this.renderHand()}</div>
      </div>
    );
  }
}
