import "./Navigation.scss";
import logo from "../../assets/LogoProfile.png";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

//import { ButtonToggle } from "../ButtonToggle/ButtonToggle";

export function Navigation() {
  const [modalOpen, setModalOpen] = useState(false);

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  console.log('IsDarkMode', isDarkMode);

  return (
    <nav id="home" className="container__nav">
      <div className="container__nav--left-side">
        <div className="container__nav--logo">
          <img src={logo} alt="logo" className="container__nav--logo-img" />
        </div>
        <div className="container__nav--buttons">
          <a href="#home" className="container__nav--btn">
            Home
          </a>
          <a href="#timeline" className="container__nav--btn">
            Timeline
          </a>
          <a href="#projects" className="container__nav--btn">
            Projects
          </a>
          <a href="#skills" className="container__nav--btn">
            Skills
          </a>
          <a href="#certificates" className="container__nav--btn">
            Certificates
          </a>
        </div>
      </div>
      <div className="container__nav--contact">
        <DarkModeSwitch
          style={{ marginBottom: "2rem", marginTop:"2em" }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={25}
          moonColor="#00db00"
        />
        <Button
          buttonClass={"btn btn--transparent"}
          caption={"Contacts"}
          btnClicked={setModalOpen}
        />
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </nav>
  );
}

//<ButtonToggle />
