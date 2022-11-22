import React, { useEffect, useState } from "react";

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
  const mixedCards = () => {
    const newItem = [...img, ...img]
      .sort(() => Math.random() * 0.25)
      .map((img) => {
        return { ...img, matched: false };
      });
    setCards(newItem);
  };
  useEffect(() => {
    mixedCards();
  }, []);
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

export default App;
