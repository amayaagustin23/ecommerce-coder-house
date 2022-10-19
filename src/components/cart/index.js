import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Button from '../button';

const Cart = ({ onClose, data }) => {
  const [price] = useState(4443);
  return (
    <div className="cart-container">
      <div className="cart-container__close-box">
        <button className="cart-container__close" type="button" onClick={onClose}>
          CERRAR
        </button>
      </div>
      <h2>CARRITO DE COMPRAS</h2>
      <div>
        <div className="cart-container__header">
          <p>PRODUCTO</p>
          <p>SUBTOTAL</p>
        </div>
        <div className="cart-container__product-container">
          {data.map((item) => (
            <div key={item.name} className="cart-container__product">
              <div className="cart-container__box">
                <div className="cart-container__detail">
                  <img className="cart-container__imagen" src={item.image} alt={item.name} />
                  <div className="cart-container__text-box">
                    <p className="cart-container__name">{item.name}</p>
                    <p className="cart-container__price">
                      $
                      {new Intl.NumberFormat('de-DE').format(item.price)}
                    </p>
                  </div>
                </div>
                <div className="cart-container__box-count">
                  <button type="button">-</button>
                  <input />
                  <button type="button">+</button>
                </div>
              </div>
              <div className="cart-container__box-delete">
                <p className="cart-container__price">
                  $
                  {new Intl.NumberFormat('de-DE').format(price)}
                </p>
                <button type="button">
                  ELIMINAR
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="cart-container__subtotal">
            <h3 className="cart-container__subtotal-text">Subtotal:</h3>
            <h3>$120.000</h3>
          </div>
          <div className="cart-container__total">
            <h4>Total</h4>
            <h4>$120.000</h4>
          </div>
          <div className="cart-container__action">
            <Link className="cart-container__link" to="/shop">VER MÁS PRODUCTOS</Link>
            <Button type="button" text="INICIAR COMPRA" />
          </div>
        </div>
      </div>
    </div>
  );
};
Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.objectOf({
    name: PropTypes.string,
    label: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    priceOld: PropTypes.number
  })).isRequired
};

export default Cart;
