import "./Card.css";

export default function Card({
  cardData,
  animationClassName,
  handleClick,
  handleAnimationEnd
}) {
  return (
    <div className="card">
      <div
        className={`card__content ${animationClassName}`}
        onClick={() => {
          handleClick(cardData);
        }}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="card__front">
          <div className="card-img-container">
            <img src={cardData.spriteUrl} alt={cardData.name} />
          </div>
          <p className="card-title">{cardData.name}</p>
        </div>

        <div className="card__back"></div>
      </div>
    </div>
  );
}
