import React from "react";

const MessageCard = ({primary, secondary}) => {
  return (
    <div className="movie_card">
      <h3>{primary}</h3>
      <p>{secondary}</p>
    </div>
  );
}

export default MessageCard;