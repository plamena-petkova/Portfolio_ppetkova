import { Button } from "../Button/Button";
import avatar from "../../assets/profile-avatar.png";
import "./Header.scss";

export function Header() {
  return (
    <section className="container">
      <div className="container__header">
        <h2 className="container__header--heading">
          About <span className="container__header--italic">Me</span>
        </h2>
        <p className="container__header--text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rem sed
          quas est dignissimos a sunt tempora similique cupiditate quasi
          veritatis, magni error sit, ratione repellat? Quibusdam est laborum
          quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          autem sit. Accusamus, aperiam repudiandae doloribus ea sed, eligendi
          reprehenderit officia odio non cupiditate ipsum suscipit magni ipsa
          repellendus? Quasi, vitae! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Laudantium incidunt expedita non quam sed ut
          perferendis porro harum voluptatem, dolor eum, obcaecati praesentium
          reiciendis illo tenetur repudiandae, dolores mollitia nam. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Vero expedita
          ratione nobis impedit quae asperiores consequuntur, dicta neque
          corporis sit dolorum, repellat voluptates quisquam aliquid adipisci
          similique ipsam alias minima?
        </p>
        <div className="container__header--btn">
          <Button caption={"Projects"} buttonClass={"btn btn--green"} />
          <Button
            caption={"Download CV"}
            buttonClass={"btn btn--transparent"}
          />
        </div>
      </div>

      <div className="container__image">
        <img
          src={avatar}
          alt="profile-avatar"
          className="container__image-profile"
        />
      </div>
    </section>
  );
}
