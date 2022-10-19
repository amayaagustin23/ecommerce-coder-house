/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import DetailAccordion from './detailAccordion';
import Images from './seccionImages';

const Product = () => {
  const [producto, setProducto] = useState();
  const [mainImage, setMainImage] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState('');
  const [countProduct, setCountProduct] = useState(0);
  const [listCart, setListCart] = useState();
  const { id } = useParams();
  const { updateCount } = useCart();

  const loadingData = () => {
    const list = JSON.parse(localStorage.getItem('products'));
    const productFind = list.find((item) => item.id === parseInt(id, 10));
    setProducto(productFind);
    setMainImage(productFind.imagenes[0]);
    setListCart(JSON.parse(localStorage.getItem('listCart')));
  };

  const handleImage = (img) => {
    setMainImage(img);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const handleCount = (e) => {
    setCountProduct(e.target.value);
  };

  useEffect(() => {
    loadingData();
  }, []);

  const AddProductCart = () => {
    const list = [];
    if (listCart === undefined) setListCart([]);
    if (countProduct === 0) {
      alert('no se ingreso cantidad');
    } else if (size === '') {
      alert('no se ingreso talle');
    } else {
      const productCart = { ...producto, talle: size, cantidad: countProduct };
      list.push(...listCart, productCart);
      setListCart(list);
      alert(JSON.stringify(list));
      localStorage.setItem('listCart', JSON.stringify(list));
      updateCount(list.length);
    }
  };

  return (
    <div>
      {producto !== undefined
        && (
        <div className="product-container">
          <div className="product-container__box-image">
            <Images
              data={producto}
              mainImage={mainImage}
              onImage={handleImage}
            />
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
              {producto.tallesDisponibles.map((item) => (
                <button type="button" key={item} onClick={handleSize} className={item !== size ? 'product-container__size' : 'product-container__size product-container__active-size'} value={item}>
                  {item}
                </button>
              ))}
            </div>
            <div className="product-container__box-cart">
              <button type="button" className="product-container__button-cart" onClick={AddProductCart}>Agregar al carrito</button>
              <input className="product-container__count-input" onChange={handleCount} value={countProduct} min={0} type="number" />
            </div>
          </div>
          <DetailAccordion data={producto} />
        </div>
        )}
    </div>
  );
};

export default Product;
