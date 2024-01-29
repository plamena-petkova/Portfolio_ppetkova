import "./Modal.scss";
import iconSet from "../../assets/selection.json";
import IcomoonReact from "icomoon-react";
import { SocialIcon } from "react-social-icons";

export function Modal({ setOpenModal }) {
  return (
    <div className="modal__background">
      <div className="modal__background--container">
        <div className="modal__background--container--close">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="modal__background--container--close-btn"
          >
            x
          </button>
        </div>
        <div className="modal__background--container-title">
          <h1>
            Contact{" "}
            <span className="modal__background--container-title-span">Me</span>
          </h1>
          <h3 className="modal__background--container-title-name">
            Plamena Petkova
          </h3>
        </div>
        <div className="modal__background--container-body">
          <div className="modal__background--container-body-left">
            <div className="modal__background--container-body-left-location">
              <button className="modal__btn">
                <IcomoonReact
                  iconSet={iconSet}
                  color="#00db00"
                  size={50}
                  icon="location"
                />
              </button>
              Varna, Bulgaria
            </div>
            <div className="modal__background--container-body-left-email">
              {" "}
              <button className="modal__btn">
                <IcomoonReact
                  iconSet={iconSet}
                  color="#00db00"
                  size={50}
                  icon="mail"
                />
              </button>
              pl.petkova@gmail.com
              <button className="modal__btn">
                <IcomoonReact
                  iconSet={iconSet}
                  color="#00db00"
                  size={20}
                  icon="copy"
                />
              </button>
            </div>
          </div>
          <div className="modal__background--container-body-right">
            <div className="modal__background--container-body-right-linkedin">
              {" "}
              <button className="modal__btn">
                <SocialIcon
                  bgColor="#00db00"
                  url="https://linkedin.com"
                  href="https://www.linkedin.com/in/plamena-petkova-a1280163/"
                />
              </button>
              LinkedIn
            </div>
            <div className="modal__background--container-body-right-github">
              <button className="modal__btn">
                <SocialIcon
                  bgColor="#00db00"
                  url="https://github.com"
                  href="https://github.com/plamena-petkova"
                />
              </button>
              Github
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
        <div className="modal__background--container-footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
            className="modal__background--container-footer-btn"
          >
            Cancel
          </button>
          <button className="modal__background--container-footer-btn">
            Continue
          </button>
        </div>
*/
