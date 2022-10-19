import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from './sideBar';
import Loading from '../../components/loading';
import CardProduct from './card';

const products = JSON.parse(localStorage.getItem('products'));
const Shop = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { liga } = useParams();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (liga === 'all') {
        setProductos(products);
      } else {
        const productsLiga = products.filter((item) => item.liga === liga);
        setProductos(productsLiga);
      }
    }, 2000);
  }, [liga]);
  return (
    <div className="shop-container">
      <SideBar />
      {isLoading ? <Loading />
        : (
          <section>
            <div className="shop-container__box-articles">
              <CardProduct data={productos} />
            </div>
          </section>
        )}
    </div>
  );
};

export default Shop;
