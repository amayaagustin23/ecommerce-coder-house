import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const SliderContainer = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <Slider
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...settings}
    >
      {data.map((item) => (
        <div className="carrusel-item-container" key={item.id}>
          <img src={item.imagenes[0]} alt="Avatar" className="carrusel-item-container__image" />
          <div className="carrusel-item-container__overlay">
            <Link className="carrusel-item-container__carrusel-text" to={`/new/${item.id}`}>
              {item.tituloCarrucel}
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};
SliderContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
export default SliderContainer;
