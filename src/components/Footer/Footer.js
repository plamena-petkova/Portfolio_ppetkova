import logo from "../../assets/LogoProfile.png";
import "./Footer.scss";
import { SocialIcon } from "react-social-icons";
import { ContactForm } from "../ContactForm/ContactForm";
import { useDeveloperContext } from "../../context/developerContext";
import { useEffect, useState } from "react";

export function Footer() {

  const {developer} = useDeveloperContext();

  const [developerInfo, setDeveloperInfo] = useState({});

useEffect(() => {
  if(developer) {
    setDeveloperInfo(developer);
  }
}, [developer])

  return (
    <footer id="footer" className="container__footer">
      <div className="container__footer--image">
        <img src={logo} alt="logo" className="container__footer--image-logo" />
      </div>
      <div className="container__footer--contact-form">
        <label
          htmlFor="contact-form"
          className="container__footer--contact-form-label"
        >
          Get in touch
        </label>
        <ContactForm />
      </div>
      <div className="container__footer--socials">
        <p>&copy;Plamena Petkova 2024. All rights reserved.</p>
        <div className="container__footer--socials-heading"></div>
        <div className="container__footer--socials-icons">
          <label htmlFor="linkedin">
            <button className="btn__socials">
              <SocialIcon
                bgColor="transparent"
                url="https://linkedin.com"
                href={developerInfo.linkedin}
              />
            </button>
          </label>
          <label htmlFor="facebook">
            <button className="btn__socials">
              <SocialIcon
                bgColor="transparent"
                url="https://github.com"
                href={developerInfo.github}
              />
            </button>
          </label>
          <label htmlFor="email">
            <button className="btn__socials">
              <SocialIcon bgColor="transparent" url={developerInfo.email} />
            </button>
          </label>
        </div>
      </div>
    </footer>
  );
}
