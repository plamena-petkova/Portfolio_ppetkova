import { Button } from "../Button/Button";
import CV from "../../assets/Plamena_Petkova_Resume.pdf";
import "./Header.scss";
import { ButtonDownload } from "../Button/ButtonDownload";
import { useDeveloperContext } from "../../context/developerContext";
import { useEffect, useState } from "react";


export function Header() {

  const {developer} = useDeveloperContext();

  const [developerInfo, setDeveloperInfo] = useState({});

  useEffect(() => {
    if(developer) {
      setDeveloperInfo(developer);
    }
  }, [developer])

  return (
    <section className="container">
      <div className="container__header">
        <h2 className="container__header--heading">
          About <span className="container__header--italic">Me</span>
        </h2>
        <p className="container__header--text">
          {developerInfo.about}
      
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
          src={developerInfo.avatar}
          alt="profile-avatar"
          className="container__image-profile"
        />
      </div>
    </section>
  );
}
