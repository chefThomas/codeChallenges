import React from "react";

function GetJokesButton(props) {
  const handleClick = e => {
    console.log("in handle click");
    props.getJokes();
  };
  return (
    <div className="GetJokeButton">
      <button onClick={handleClick}>Get Jokes</button>
    </div>
  );
}

export default GetJokesButton;
