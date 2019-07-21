import React from "react";

import whiskey from "./whiskey.jpeg";
import hazel from "./hazel.jpeg";
import tubby from "./tubby.jpeg";

import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Dog from "./Dog";

function App() {
  App.defaultProps = {
    dogs: [
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Tubby",
        age: 1,
        src: tubby,
        facts: [
          "Tubby is rambunctious",
          "Tubby loves tummy rubs.",
          "Tubby loves pepperoni."
        ]
      }
    ]
  };

  return (
    <div className="App">
      <Navbar routes={App.defaultProps} />
      <Switch>
        <Route
          exact
          path="/dogs"
          render={routeProps => (
            <Home {...routeProps} dogData={App.defaultProps} />
          )}
        />
        <Route
          exact
          path="/dogs/:name"
          render={routeProps => (
            <Dog {...routeProps} dogData={App.defaultProps} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
