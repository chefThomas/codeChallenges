import React from "react";
import "../css/main.css";

function GetJokesButton(props) {
  const handleClick = e => {
    console.log("in handle click");
    props.getJokes();
  };
  return (
    <div className="GetJokeButton">
      <button className="joke-button" onClick={handleClick}>
        Get Jokes
      </button>
    </div>
  );
}

export default GetJokesButton;
