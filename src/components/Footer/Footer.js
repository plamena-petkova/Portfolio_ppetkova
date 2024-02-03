import logo from "../../assets/LogoProfile.png";
import "./Footer.scss";
import { SocialIcon } from "react-social-icons";
import { ContactForm } from "../ContactForm/ContactForm";

export function Footer() {
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
                href="https://www.linkedin.com/in/plamena-petkova-a1280163/"
              />
            </button>
          </label>
          <label htmlFor="facebook">
            <button className="btn__socials">
              <SocialIcon
                bgColor="transparent"
                url="https://github.com"
                href="https://github.com/plamena-petkova"
              />
            </button>
          </label>
          <label htmlFor="email">
            <button className="btn__socials">
              <SocialIcon bgColor="transparent" url="https://gmail.com" />
            </button>
          </label>
        </div>
      </div>
    </footer>
  );
}
