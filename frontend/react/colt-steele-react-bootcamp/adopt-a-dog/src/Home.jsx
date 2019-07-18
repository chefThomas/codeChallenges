import React, { Component } from "react";

export default class Home extends Component {
  renderDogs = () => {
    return this.props.dogData.dogs.map(dog => {
      return (
        <div className="Home-dog">
          <img src={dog.src} alt={dog.name} />
          <p>{dog.name}</p>
        </div>
      );
    });
  };
  render() {
    console.log(this.props.dogData);
    return (
      <div className="Home">
        <h1>Click a Dog!</h1>
        <div className="Home-dogs-container">{this.renderDogs()}</div>
      </div>
    );
  }
}
