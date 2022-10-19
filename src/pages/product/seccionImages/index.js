import React from 'react';
import PropTypes from 'prop-types';
import ReactImageMagnify from 'react-image-magnify';

const Images = ({ data, mainImage, onImage }) => (
  <div className="product-container__box-image">
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: data.nombre,
          isFluidWidth: true,
          src: mainImage,
        },
        largeImage: {
          src: mainImage,
          width: 1000,
          height: 1000,
        },
      }}
    />
    <div className="product-container__all-images">
      {data.imagenes.map((item) => (
        <button className="product-container__extra-images-button" key={item} onClick={() => onImage(item)} type="button">
          <img className="product-container__extra-images" src={item} alt="" />
        </button>
      ))}
    </div>
  </div>
);
Images.propTypes = {
  data: PropTypes.objectOf.isRequired,
  mainImage: PropTypes.string.isRequired,
  onImage: PropTypes.func.isRequired
};

export default Images;
