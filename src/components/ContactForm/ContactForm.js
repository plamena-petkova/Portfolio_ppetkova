import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Footer/Footer.scss";
import { ButtonSend } from "../Button/ButtonSend";
//import { types, useNotificationContext } from "../../context/notificationContext";

export function ContactForm() {

//const { addNotification } = useNotificationContext();

 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

  const form = useRef();


  const resetValues = () => {
    setEmail('');
    setName('');
    setMessage('');
  };

  const sendEmail = (e) => {
    e.preventDefault();

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
          //addNotification('Message sent!', types.success);
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="container__footer--contact-form-email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="container__footer--contact-form--contact-message">
        <input
          type="text"
          placeholder="Message..."
          className="container__footer--contact-form-msg"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
