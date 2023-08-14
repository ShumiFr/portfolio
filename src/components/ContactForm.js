import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../assets/img/logo.png";

const ContactForm = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" }); // Nouvel état pour les messages d'erreur

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, message } = form.current;

    // Vérifier les champs requis
    if (!name.value || !email.value || !message.value) {
      setErrors({
        name: name.value ? "" : "Veuillez entrer votre nom",
        email: email.value ? "" : "Veuillez entrer votre email",
        message: message.value ? "" : "Veuillez entrer votre message",
      });
      return;
    }

    // Réinitialiser les erreurs en cas de succès d'envoi
    setErrors({ name: "", email: "", message: "" });

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
          setIsSent(true);
          form.current.reset();
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
              <label>Nom</label>
              <input className="form-control" type="text" name="name" />
              {errors.name && (
                <div className="error-message">{errors.name}</div>
              )}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" type="email" name="email" />
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea className="message form-control" name="message" />
              {errors.message && (
                <div className="error-message">{errors.message}</div>
              )}
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
