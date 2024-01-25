import { Button } from "../Button/Button";
import "./Header.scss";

export function Header() {
  return (
    <section className="container">
      <div className="container__header">
        <h2 className="container__header--heading">About Me</h2>
        <p className="container__header--text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rem sed
          quas est dignissimos a sunt tempora similique cupiditate quasi
          veritatis, magni error sit, ratione repellat? Quibusdam est laborum
          quam!
        </p>
        <div className="container__header--btn">
        <Button caption={'Projects'} buttonClass={'btn btn--green'} />
        <Button caption={'Download CV'} buttonClass={'btn btn--transparent'} />
        </div>
      </div>

      <div className="container__image">
        <img
          src=""
          alt="profile-avatar"
          className="container__image-profile"
        />
      </div>
    </section>
  );
}
