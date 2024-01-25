import "./Navigation.scss";

export function Navigation() {
  return (
    <nav className="container__nav">
      <button className="container__nav--btn">Home</button>
      <button className="container__nav--btn">Timestamp</button>
      <button className="container__nav--btn">Certificates</button>
      <button className="container__nav--btn">TechStack</button>
      <button className="container__nav--btn">Projects</button>
    </nav>
  );
}
