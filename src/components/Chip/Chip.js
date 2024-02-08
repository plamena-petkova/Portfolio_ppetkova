import "./Chip.scss";

export function Chip({ techName }) {
  return (
    <div className="chip__container">
      <p className="chip__container-name">{techName}</p>
    </div>
  );
}
