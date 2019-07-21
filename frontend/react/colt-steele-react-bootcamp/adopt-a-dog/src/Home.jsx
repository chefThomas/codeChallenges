import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  navVisible = e => {
    this.setState({ showNav: true });
  };
  renderDogs = () => {
    return this.props.dogData.dogs.map(dog => {
      // inline styling necessary because img source is dynamic
      const imgStyle = {
        backgroundImage: `url(${dog.src})`
      };
      return (
        <Link to={`/dogs/${dog.name}`} className="Home-dog">
          <div className="Home-dog-img-container" style={imgStyle} />
          <div className="Home-dog-name">{dog.name}</div>
        </Link>
      );
    });
  };
  render() {
    return (
      <div className="Home">
        <h1 className="Home-header">Choose a dog</h1>
        <div className="Home-dogs-container">{this.renderDogs()}</div>
      </div>
    );
  }
}
