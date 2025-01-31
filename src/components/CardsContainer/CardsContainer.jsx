import { useState } from "react";
import Card from "./Card.jsx";
import "./CardsContainer.css";

export default function CardsContainer({
  cardsData,
  handleCardAnimationEnd,
  gameStatus,
}) {
  const [flipUpAnimation, setFlipUpAnimation] = useState(true);
  const [currentCardData, setCurrentCardData] = useState({});
  const animationClassName = flipUpAnimation ? "flipUp" : "flipDown";

  function handleClick(cardData) {
    setFlipUpAnimation(false);
    setCurrentCardData(cardData);
  }

  function handleAnimationEnd(event) {
    if (event.animationName === "flipDown") {
      handleCardAnimationEnd(currentCardData);
      setFlipUpAnimation(true);
    }
  }

  if (gameStatus !== "active") return null;
  else {
    return (
      <section className="cards-container">
        <div>
          {cardsData.map((cardData) => {
            return (
              <Card
                key={cardData.id}
                cardData={cardData}
                animationClassName={animationClassName}
                handleClick={handleClick}
                handleAnimationEnd={handleAnimationEnd}
              ></Card>
            );
          })}
        </div>
      </section>
    );
  }
}
