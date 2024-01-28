import "./Modal.scss";

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
          <div className="modal__container-body-location">
            <p>Varna</p>
          </div>
          <div className="modal__container-body-mobile-phone">
            <p>+359000000000</p>
          </div>
          <div className="modal__container-body-email">
            <p>pl.petkova@gmail.com</p>
          </div>
          <div className="modal__container-body-github">
            <p>Github</p>
          </div>
          <div className="modal__container-body-linkedin">
            <p>Linkedin</p>
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
