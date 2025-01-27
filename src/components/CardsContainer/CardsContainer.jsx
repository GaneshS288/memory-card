import Card from "./Card.jsx";

export default function CardsContainer({ cardsData }) {
  return (
    <section className="cards-container">
      <div>
        {cardsData.map((cardData) => {
          console.log(cardData);
          return (
            <Card
              key={cardData.id}
              imgUrl={cardData.spriteUrl}
              name={cardData.name}
            ></Card>
          );
        })}
      </div>
    </section>
  );
}
