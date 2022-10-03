import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const Card = ({ data }) => (
  <>
    {data.map((item) => (
      <div key={item.id} className="article-container" id={item.nombre}>
        <Link to={`/product/${item.id}`}>
          <div className="article-container__image">
            <img src={item.imagenes[0]} alt={item.nombre} title={item.nombre} />
          </div>
          <div className="article-container__text-box">
            <img className="article-container__brand" src={item.logoMarca} alt={item.nombre} title={item.nombre} />
            <h3 className="article-container__title">{item.nombre}</h3>
            <div className="article-container__price-box">
              <p className="article-container__price">
                $
                {new Intl.NumberFormat('de-DE').format(item.precio)}
              </p>
              <p className={classNames('article-container__label', {
                'article-container__label--oferta': item.etiqueta === 'OFERTA',
                'article-container__label--nuevo': item.etiqueta === 'NUEVO',
              })}
              >
                {item.etiqueta}
              </p>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </>
);
Card.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
export default Card;
