import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Dog.css";

export default class Dog extends Component {
  render() {
    const dogName = this.props.match.params.name;
    const dogArr = this.props.dogData.dogs.filter(dog => {
      return dog.name === dogName;
    });

    if (dogArr.length < 1) {
      return <Redirect to="/dogs" />;
    }

    const { src, name, age, facts } = dogArr[0];

    const imgStyle = {
      backgroundImage: `url(${src})`
    };

    return (
      <div className="Dog">
        <div className="Dog-left-content" style={imgStyle}>
          {/* <img className="Dog-image" src={src} alt={dogName} /> */}
        </div>
        <div className="Dog-right-content">
          <h2 className="Dog-right-content-header">
            About {name}
            <span className="ellipses">...</span>
          </h2>
          <ul className="Dog-facts-container">
            <li className="Dog-facts">
              {name} is {age} years old
            </li>
            {facts.map(fact => (
              <li className="Dog-facts">{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
