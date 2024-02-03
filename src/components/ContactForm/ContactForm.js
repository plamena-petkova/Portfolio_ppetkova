import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Footer/Footer.scss";
import { ButtonSend } from "../Button/ButtonSend";

export function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const formValuesHandler = (event) => {
    setFormValues(event.target.value);
  };

  const resetValues = () => {
    setFormValues({ name: "", email: "", message: "" });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    resetValues();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      id="contact-form"
      action="#"
      className="container__footer--contact-form-inputs"
    >
      <div className="container__footer--contact-form--input-items">
        <input
          type="text"
          placeholder="Name"
          className="container__footer--contact-form-name"
          name="user_name"
          value={formValues?.name}
          onChange={formValuesHandler}
        />
        <input
          type="email"
          placeholder="Email"
          className="container__footer--contact-form-email"
          name="user_email"
          value={formValues?.email}
          onChange={formValuesHandler}
        />
      </div>

      <div className="container__footer--contact-form--contact-message">
        <input
          type="text"
          placeholder="Message..."
          className="container__footer--contact-form-msg"
          name="message"
          value={formValues?.message}
          onChange={formValuesHandler}
        />
      </div>
      <ButtonSend
        btnClicked={resetValues}
        caption={"Send"}
        buttonClass={"btn btn--footer"}
      />
    </form>
  );
}
