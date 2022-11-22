import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import "./app.css";
const img = [
  { src: "./img/helmet-1.png" },
  { src: "./img/potion-1.png" },
  { src: "./img/ring-1.png" },
  { src: "./img/scroll-1.png" },
  { src: "./img/shield-1.png" },
  { src: "./img/sword-1.png" },
];
const App = () => {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const mixedCards = () => {
    const newItem = [...img, ...img]
      .sort(() => Math.random() * 0.25)
      .map((img) => {
        return { ...img, matched: false, _id: Math.random() };
      });
    setCards(newItem);
  };
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };
  useEffect(() => {
    mixedCards();
  }, []);
  return (
    <div className="container">
      <div className="game-center">
        <h1>Memory Game</h1>
        <div className="cards">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                handleChoice={handleChoice}
                key={card._id}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
