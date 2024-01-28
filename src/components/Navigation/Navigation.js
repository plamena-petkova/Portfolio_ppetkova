import "./Navigation.scss";
import logo from "../../assets/LogoProfile.png";
import {Button} from "../Button/Button"
import { Modal } from "../Modal/Modal";
import { useState } from "react";

export function Navigation() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    
    <nav className="container__nav">
     
      <div className="container__nav--left-side">
        <div className="container__nav--logo">
          <img src={logo} alt="" className="container__nav--logo-img" />
        </div>
        <div className="container__nav--buttons">
          <button className="container__nav--btn">Home</button>
          <button className="container__nav--btn">Timeline</button>
          <button className="container__nav--btn">Projects</button>
          <button className="container__nav--btn">Certificates</button>
        </div>
      </div>
     
      <div className="contaner__nav--contact">
        <Button buttonClass={'btn btn--transparent'} caption={'Contacts'} btnClicked={setModalOpen} />
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </nav>
  );
}
