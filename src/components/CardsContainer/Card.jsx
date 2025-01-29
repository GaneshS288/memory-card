export default function Card({ name, imgUrl, selected, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(selected)}>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
}
