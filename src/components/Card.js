import React from "react";
import "./card.css";
const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="front" className="front" />
        <img
          src="/img/cover.png"
          alt="back"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
