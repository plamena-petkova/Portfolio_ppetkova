import "./ButtonToggle.scss";

export function ButtonToggle() {
  return (
    <>
      <input className="tgl tgl-flat" id="toggle" type="checkbox" />
      <label className="tgl-btn" for="toggle"></label>
    </>
  );
}
