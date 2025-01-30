import "./Card.css"

export default function Card({ cardData, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(cardData)}>
      <div className="card-img-container"><img src={cardData.spriteUrl} alt={cardData.name} /></div>
      <p className="card-title">{cardData.name}</p>
    </div>
  );
}
