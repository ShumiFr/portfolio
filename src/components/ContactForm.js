import logo from "../assets/img/logo.png";

import React from "react";

const ContactForm = () => {
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
          <form
            className="formular"
            action="#contact"
            method="post"
            name="sendmail"
            data-netlify="true"
            onSubmit="submit"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-name">
              <div className="form-group form-lastname">
                <label>Nom</label>
                <input
                  className="form-control"
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Nom"
                />
              </div>

              <div className="form-group form-firstname">
                <label>Prénom</label>
                <input
                  className="form-control"
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Prénom"
                />
              </div>
            </div>

            <div className="form-group form-email">
              <label>Email</label>
              <input
                className="form-control"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>

            <div className="form-group form-subject">
              <label>Sujet</label>
              <input
                className="form-control"
                type="text"
                id="subject"
                name="subject"
                placeholder="Sujet"
              />
            </div>

            <div className="form-group form-message">
              <label>Votre message</label>
              <textarea
                className="message form-control"
                id="message"
                name="message"
                placeholder="Votre message"
              ></textarea>
            </div>

            <button
              id="submit-message-form"
              name="sendmail"
              value="sendmail"
              className="btn btn-primary"
              type="submit"
            >
              Envoyer mon message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
