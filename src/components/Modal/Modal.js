import "./Modal.scss";
import { Link } from 'react-router-dom';
import iconSet from "../../assets/selection.json";
import IcomoonReact from "icomoon-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export function Modal({ setOpenModal }) {

  const valueToCopy = "pl.petkova@gmail.com";

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
                  size={40}
                  icon="location"
                />
              </button>
              Varna, Bulgaria
            </div>
            <div className="modal__background--container-body-left-email">
              {" "}
              <button
                className="modal__btn"
              >
                <IcomoonReact
                  iconSet={iconSet}
                  color="#00db00"
                  size={40}
                  icon="mail"
                />
              </button>
              pl.petkova@gmail.com
              <CopyToClipboard text={valueToCopy}>
                <button className="modal__btn">
                  <IcomoonReact
                    iconSet={iconSet}
                    color="#00db00"
                    size={20}
                    icon="copy"
                  />
                </button>
              </CopyToClipboard>
            </div>
          </div>
          <div className="modal__background--container-body-right">
            <div className="modal__background--container-body-right-linkedin">
              {" "}
              <Link to="https://github.com/plamena-petkova">
              <button className="modal__btn">
              <IcomoonReact
                    iconSet={iconSet}
                    color="#00db00"
                    size={40}
                    icon="github"
                  />
              </button>
              </Link>
              Github
            </div>
            <div className="modal__background--container-body-right-github">
            <Link to="https://www.linkedin.com/in/plamena-petkova-a1280163/">
              <button className="modal__btn">
              <IcomoonReact
                    iconSet={iconSet}
                    color="#00db00"
                    size={40}
                    icon="linkedin"
                  />
              </button>
              </Link>
              LinkedIn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
