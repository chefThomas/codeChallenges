import React from "react";

function ApiRequestButton(props) {
  const handleClick = e => {
    console.log("in handle click");
    props.getJokes();
  };
  return (
    <div>
      <button onClick={handleClick}>Get Jokes</button>
    </div>
  );
}

export default ApiRequestButton;
