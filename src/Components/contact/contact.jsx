import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f20oqj4', 'template_gzco2zv', form.current, {
        publicKey: 'IGmNqpNcObhBQqieJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
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
