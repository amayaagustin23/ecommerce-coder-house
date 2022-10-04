/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactImageMagnify from 'react-image-magnify';
import useCart from '../../hooks/useCart';

const Product = () => {
  const [producto, setProducto] = useState();
  const { id } = useParams();
  const { countCart: { count }, updateCount } = useCart();
  const loadingData = () => {
    const list = JSON.parse(localStorage.getItem('products'));
    setProducto(list.find((item) => item.id === parseInt(id, 10)));
  };
  useEffect(() => {
    loadingData();
  }, []);

  return (
    <div>
      {producto !== undefined
        && (
        <div className="product-container">
          <div className="product-container__box-image">
            <ReactImageMagnify
              imageClassName="imagenPrincipal"
              {...{
									  smallImage: {
									    alt: 'Wristwatch by Ted Baker London',
									    isFluidWidth: true,
									    src: producto.imagenes[0],
									  },
									  largeImage: {
									    src: producto.imagenes[0],
									    width: 1000,
									    height: 1000,
									  },
              }}
            />
            <div className="product-container__all-images">
              {producto.imagenes.map((item) => (
                <img key={item} className="product-container__extra-images" src={item} alt="" />
              ))}
            </div>
          </div>
          <div className="product-container__box">
            <h1 className="product-container__title">{producto.nombre}</h1>
            <p className="product-container__code">
              Item No.
              {producto.item}
            </p>
            <br />
            <h3 className="product-container__price">
              $
              {new Intl.NumberFormat('de-DE').format(producto.precio)}
            </h3>
            <div className="product-container__box-sizes">
              <button type="button" className="product-container__size" value="S">
                S
              </button>
              <button type="button" className="product-container__size" value="M">
                M
              </button>
              <button type="button" className="product-container__size" value="L">
                L
              </button>
              <button type="button" className="product-container__size" value="XL">
                XL
              </button>
            </div>
            <div className="product-container__box-cart">
              <button type="button" className="product-container__button-cart" onClick={() => updateCount(count + 1)}>Agregar al carrito</button>
              <input className="product-container__count-input" min={0} value={0} type="number" id="count" />
            </div>
          </div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Descripcion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="product-container__description-container">
                <div className="product-container__description">
                  <p>{producto.descripcion}</p>
                </div>
                <div className="product-container__box-description">
                  <ol className="product-container__list-description">
                    <li>
                      <span className="product-container__item-description">Género:</span>
                      {producto.genero}
                    </li>
                    <li>
                      <span className="product-container__item-description">Material:</span>
                      Poliéster
                    </li>
                    <li>
                      <span className="product-container__item-description">Manga: </span>
                      Corta
                    </li>
                    <li>
                      <span className="product-container__item-description">Garantía:</span>
                      Contra defecto de fabricación.
                    </li>
                    <li>
                      <span className="product-container__item-description">Marca: </span>
                      {producto.marca}
                    </li>
                  </ol>
                  <ol className="product-container__list-description">
                    <li>
                      <span className="product-container__item-description">Cuello:</span>
                      {producto.cuello}
                    </li>
                    <li>
                      <span className="product-container__item-description">Calce:</span>
                      {producto.calce}
                    </li>
                    <li>
                      <span className="product-container__item-description">Liga: </span>
                      {producto.liga}
                    </li>
                  </ol>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        )}
    </div>
  );
};

export default Product;
