import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ABOUT_PATH, CONTACT_PATH, HELP_PATH
} from '../../routes/path';
import CartWidget from '../cartWidget';
import Logo from '../../assets/logo/logo.png';
import useCart from '../../hooks/useCart';
import Search from '../search';

const pages = [
  {
    title: 'HELP',
    route: HELP_PATH,
  },
  {
    title: 'CONTACT',
    route: CONTACT_PATH,
  },
  {
    title: 'ABOUT',
    route: ABOUT_PATH,
  }
];

// const tienda = [
//   {
//     title: 'Argentina',
//     route: '/shop/Argentina',
//   },
//   {
//     title: 'España',
//     route: '/shop/España',
//   },
//   {
//     title: 'Inglaterra',
//     route: '/shop/Inglaterra',
//   },
// ];

const Navbar = ({ onShow }) => {
  const { countCart: { count } } = useCart();
  const [logued] = useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-container__info">
        <p>Envíos a todo el país</p>
      </div>
      <div className="navbar-container__header">
        <Link to="/" className="navbar-container__logo-container">
          <img src={Logo} alt="SPS" />
        </Link>
        <div className="navbar-container__search-container">
          <Search />
        </div>
        <div className="navbar-container__cart-container">
          <button type="button" onClick={onShow}>
            <CartWidget count={count} />
          </button>
          <div>
            {logued ? <Link to="/me">Mi cuenta</Link>
              : <Link to="/login">Iniciar Session</Link>}
          </div>
        </div>
      </div>
      <div className="navbar-container__nav">
        {pages.map(({ title, route }) => (
          <Link className="navbar-container__route" to={route}>{title}</Link>
        ))}
      </div>
    </div>
  );
};
Navbar.propTypes = {
  onShow: PropTypes.func.isRequired,
};

export default Navbar;
