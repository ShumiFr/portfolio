import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../assets/img/logo.png";

const ContactForm = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false); // Nouvel état pour le message de validation

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_od1y284",
        "template_qksmxec",
        form.current,
        "nWAz14NEV7XCn6jnM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true); // Mettre à jour l'état après l'envoi réussi
          form.current.reset(); // Réinitialiser les champs du formulaire
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-section">
      <div className="text-form">
        <h2 className="form-title">Me contacter</h2>
        <div className="contact-text-form">
          N'hésitez pas à me contacter via ce formulaire, ou par{" "}
          <a className="link" href="mailto:gagnaire.pauline@gmail.com">
            mail
          </a>{" "}
          ! 😊
        </div>
      </div>

      <div className="row">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="form">
          <form ref={form} onSubmit={sendEmail} className="formular">
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" type="text" name="name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" type="email" name="email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea className="message form-control" name="message" />
            </div>
            <button className="btn btn-primary" type="submit">
              Envoyer
            </button>
          </form>
          {isSent && (
            <div className="validation-message">
              Votre email a bien été envoyé !
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
