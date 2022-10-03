import React, { useState, useEffect } from 'react';
import SideBar from './sideBar';
import CardProduct from './card';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')));
  }, []);
  return (
    <div className="shop-container">
      <SideBar />
      <section>
        <div className="shop-container__box-articles">
          <CardProduct data={products} />
        </div>
      </section>
    </div>
  );
};

export default Shop;
