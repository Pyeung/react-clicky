import React from "react";
const Card = props => {
  const cardSytle = {
    maxWitdh: "150px",
    display: "inline-block",
    backgroundImage: `url(${props.background})`,
    backgroundSize: "cover",
    backgroundPosition: "top"
  
  };
  return (
    <div
      className="card"
      style={cardSytle}
      onClick={() => props.handleClick(props.card.id)}
    >
      {/* unable to link any img */}

      <h3>{props.card.id}</h3>
    </div>
  );
};

export default Card;
