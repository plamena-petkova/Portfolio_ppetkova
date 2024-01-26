import { Button } from "../Button/Button";
import logo from "../../assets/LogoProfile.png";
import "./Footer.scss";
import { SocialIcon } from 'react-social-icons'

export function Footer() {
  return (
    <footer className="container__footer">
      <div className="container__footer--image">
        <img src={logo} alt="logo" className="container__footer--image-logo" />
      </div>
      <div className="container__footer--contact-form">
        <label
          for="contact-form"
          className="container__footer--contact-form-label"
        >
          Contact <span>Me</span>
        </label>
        <form
          id="contact-form"
          action="#"
          className="container__footer--contact-form-inputs"
        >
          <div className="container__footer--contact-form--input-items">
            <input
              type="text"
              placeholder="First Name Last Name"
              className="container__footer--contact-form-name"
            />
            <input
              type="email"
              placeholder="Email"
              className="container__footer--contact-form-email"
            />
          </div>

          <div className="container__footer--contact-form--contact-message">
            <input
              type="text"
              placeholder="Message..."
              className="container__footer--contact-form-msg"
            />
          </div>
          <Button caption={"Send"} buttonClass={"btn btn--footer"} />
        </form>
      </div>
      <div className="container__footer--socials">
       <p>&copy;Plamena Petkova 2024. All rights reserved.</p> 
        <div class="container__footer--socials-heading">
          Social Networks
        </div>
        <div className="container__footer--socials-icons">
          <label for="linkedin">
            <button class="btn__socials">
            <SocialIcon bgColor="transparent" url="https://linkedin.com" href="https://www.linkedin.com/in/plamena-petkova-a1280163/" />
            </button>
          </label>
          <label for="facebook">
            <button class="btn__socials">
            <SocialIcon bgColor="transparent" url="https://github.com" href="https://github.com/plamena-petkova" />
            </button>
          </label>
          <label for="email">
            <button class="btn__socials">
            <SocialIcon bgColor="transparent" url="https://gmail.com" />
            </button>
          </label>
        </div>
      </div>
    </footer>
  );
}
