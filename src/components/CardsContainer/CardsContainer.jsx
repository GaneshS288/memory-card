import Card from "./Card.jsx";
import "./CardsContainer.css"

export default function CardsContainer({
  cardsData,
  handleCardClick,
  gameStatus,
}) {
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
                handleClick={handleCardClick}
              ></Card>
            );
          })}
        </div>
      </section>
    );
  }
}
