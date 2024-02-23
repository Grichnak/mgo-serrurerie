import React from 'react';
import serrurier from '../../Assets/serrurier.png';
import './hero.css';

const Hero = () => {
  return (
    <section id="hero" className="heroSection">
      <div className="intro-section">
        <div className="introBox">
          <h1 className="title">Besoin d'un serrurier ?</h1>

          <p className="intro">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            commodi enim vero sunt. Id doloremque expedita consectetur ex quos
            earum? Enim sapiente delectus laudantium nisi earum, dolorum
            temporibus repudiandae excepturi voluptatum harum at ipsum,
            voluptatibus maiores labore eum! Officia dignissimos qui voluptas.
          </p>
        </div>
        <a href="tel:06 84 80 37 11 " style={{ textDecoration: 'none' }}>
          <button className="introContactButton">Appelez-nous</button>
        </a>
      </div>

      <img src={serrurier} alt="illustration serrurier" className="img" />
    </section>
  );
};

export default Hero;
