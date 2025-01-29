export default function Card({ cardData, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(cardData)}>
      <img src={cardData.spriteUrl} alt={cardData.name} />
      <p>{cardData.name}</p>
    </div>
  );
}
