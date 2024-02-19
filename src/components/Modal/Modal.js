import "./Modal.scss";
import { Link } from 'react-router-dom';
import iconSet from "../../assets/selection.json";
import IcomoonReact from "icomoon-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDeveloperContext } from "../../context/developerContext";

export function Modal({ setOpenModal }) {

  const {developer} = useDeveloperContext();

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
            {developer?.names}
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
              {developer?.address}
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
              {developer?.email}
              <CopyToClipboard text={developer.email}>
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
              <Link to={developer?.github}>
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
            <Link to={developer?.linkedin}>
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
