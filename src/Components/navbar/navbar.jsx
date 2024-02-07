import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import Lottie from 'lottie-react';
import lockAnimation from '/Projets/MGO Serrurerie/mgo-serrurerie/src/Assets/lock-animation.json';
import logo from '../../Assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="cadenas">
        <Lottie
          className="lock"
          animationData={lockAnimation}
          loop={false}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <img className="logo" src={logo} alt="logo" />
      <div className="navMenu">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-160}
          duration={500}
          className="navMenuList"
        >
          Accueil
        </Link>
        <Link
          activeClass="active"
          to="prices"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="navMenuList"
        >
          Tarifs
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navMenuList"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
