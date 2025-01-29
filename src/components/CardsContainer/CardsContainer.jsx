import Card from "./Card.jsx";

export default function CardsContainer({ cardsData, handleCardClick }) {
  return (
    <section className="cards-container">
      <div>
        {cardsData.map((cardData) => {
          return (
            <Card
              key={cardData.id}
              imgUrl={cardData.spriteUrl}
              name={cardData.name}
              selected={cardData.selected}
              handleClick={handleCardClick}
            ></Card>
          );
        })}
      </div>
    </section>
  );
}
