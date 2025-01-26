import Card from "./Card.jsx";

export default function CardsContainer({ cardsData }) {
  return (
    <section className="cards-container">
      <div>
        {cardsData.map((cardData) => (
          <Card
            key={cardData.id}
            imgUrl={cardData.imgUrl}
            title={cardData.title}
          ></Card>
        ))}
      </div>
    </section>
  );
}
