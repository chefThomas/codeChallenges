import React, { Component } from "react";
// import whiskey from "./whiskey.jpeg";
// import hazel from "./hazel.jpeg";
// import tubby from "./tubby.jpeg";

export default class Dog extends Component {
  render() {
    const dogName = this.props.match.params.name;
    const dogArr = this.props.dogData.dogs.filter(dog => {
      return dog.name === dogName;
    });

    const { src, name, age, facts } = dogArr[0];

    console.log(this.props);
    return (
      <div className="Dog">
        <img className="Dog-image" src={src} alt={dogName} />
        <h1 className="Dog-name">{name}</h1>
        <p className="Dog-age">{age}</p>
        <ul>
          {facts.map(fact => (
            <li>{fact}</li>
          ))}
        </ul>
      </div>
    );
  }
}
