export default function Card({ name, imgUrl }) {
  return (
    <div className="card">
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
}
