import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from './sideBar';
import CardProduct from './card';

const products = JSON.parse(localStorage.getItem('products'));
const Shop = () => {
  const [productos, setProductos] = useState([]);
  const { liga } = useParams();
  useEffect(() => {
    if (liga === 'all') {
      setProductos(products);
    } else {
      const productsLiga = products.filter((item) => item.liga === liga);
      setProductos(productsLiga);
    }
    console.log(liga);
  }, [liga]);
  return (
    <div className="shop-container">
      <SideBar />
      <section>
        <div className="shop-container__box-articles">
          <CardProduct data={productos} />
        </div>
      </section>
    </div>
  );
};

export default Shop;
