import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../../assets/icons/socials/facebook.png';
import Instagram from '../../assets/icons/socials/instagram.png';
import Youtube from '../../assets/icons/socials/youtube.png';
import Twitter from '../../assets/icons/socials/twitter.png';
import Logo from '../../assets/logo/logo.png';

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-container__body">
      <div className="footer-container__logo">
        <a href="../index.html" title="Home"><img src={Logo} alt="Logo" width="100" /></a>
      </div>
      <div className="footer-container__categories">
        <h2 className="footer-container__legal">Legal</h2>
        <div className="footer-container__categories-box">
          <Link className="footer-container__category" to="/">Inicio</Link>
          <Link className="footer-container__category" to="/contact">Contactanos</Link>
          <Link className="footer-container__category" to="/about" title="About">Quiénes Somos</Link>
        </div>
      </div>
      <div className="footer-container__socials">
        <a className="footer-container__socials-icon" target="_blank" href="https://www.facebook.com/search/top?q=style%20pics%20sports" rel="noreferrer"><img src={Facebook} alt="facebook" width="32" /></a>
        <a className="footer-container__socials-icon" target="_blank" href="https://www.instagram.com/stylepics.sports/" rel="noreferrer"><img src={Instagram} alt="instagram" width="32" /></a>
        <a className="footer-container__socials-icon" target="_blank" href="https://twitter.com/home" rel="noreferrer"><img src={Twitter} alt="twitter" width="32" /></a>
        <a className="footer-container__socials-icon" target="_blank" href="https://www.youtube.com/" rel="noreferrer"><img src={Youtube} alt="youtube" width="32" /></a>
      </div>
    </div>
    <div className="footer-container__copy">
      <p>&copy; Copyright © 2022 — SPS.</p>
    </div>
  </footer>
);

export default Footer;
