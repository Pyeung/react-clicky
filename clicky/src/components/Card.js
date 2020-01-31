import React from "react";

const Card = props => {
    const cardSytle = {
        maxWitdh: '300px',
        display: 'inline-block'
    }
  return (
    <div className="card" style={ cardSytle } onClick={()=>props.handleClick(props.card.id)}>
      <h3>{props.card.id}</h3>
    </div>
  );
};

export default Card;
