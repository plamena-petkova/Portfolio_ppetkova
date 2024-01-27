import "./Navigation.scss";
import logo from "../../assets/LogoProfile.png";

export function Navigation() {
  return (
    <nav className="container__nav">
      <div className="container__nav--logo">
        <img src={logo} alt="" className="container__nav--logo-img" />
      </div>
      <button className="container__nav--btn">Home</button>
      <button className="container__nav--btn">Projects</button>
      <button className="container__nav--btn">Timeline</button>
      <button className="container__nav--btn">Certificates</button>
    </nav>
  );
}
