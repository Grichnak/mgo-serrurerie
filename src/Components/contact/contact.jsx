import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // On récupère les valeurs des champs
    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    // Alerte si les champs sont vides
    if (!userName || !userEmail || !message) {
      alert("Veuillez remplir tous les champs avant d'envoyer l'e-mail.");
      return;
    }

    emailjs
      .sendForm('service_f20oqj4', 'template_gzco2zv', form.current, {
        publicKey: 'IGmNqpNcObhBQqieJ',
      })
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email envoyé !');
        },
        (error) => {
          console.log(error.text);
          alert("Une erreur s'est produite lors de l'envoi de l'e-mail.");
        }
      );
  };

  return (
    <section id="contact-page">
      <div id="contact">
        <h1 className="contact-page-title">Contact</h1>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Votre nom"
            name="user_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Votre mail"
            name="user_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Votre message"
          ></textarea>
          <button type="submit" value="Send" className="submit-button">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
