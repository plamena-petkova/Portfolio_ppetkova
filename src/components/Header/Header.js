import { Button } from "../Button/Button";
//import avatar from "../../assets/profile-avatar.png";
import CV from "../../assets/CV_Plamena_Petkova.pdf";
import "./Header.scss";
import { ButtonDownload } from "../Button/ButtonDownload";
import { useDeveloperContext } from "../../context/developerContext";

export function Header() {

  const {developer} = useDeveloperContext();

  return (
    <section className="container">
      <div className="container__header">
        <h2 className="container__header--heading">
          About <span className="container__header--italic">Me</span>
        </h2>
        <p className="container__header--text">
          {developer?.about}
      
        </p>
        <div className="container__header--btn">
          <Button caption={"Projects"} buttonClass={"btn btn--green"} hrefLink={'#projects'} />
          <ButtonDownload
            caption={"Download CV"}
            buttonClass={"btn btn--transparent"}
            hrefLink={CV}
            download={true}
          />
        </div>
      </div>

      <div className="container__image">
        <img
          src={developer?.avatar}
          alt="profile-avatar"
          className="container__image-profile"
        />
      </div>
    </section>
  );
}
