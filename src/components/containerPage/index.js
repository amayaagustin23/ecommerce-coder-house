import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../footer';
import Navbar from '../navbar';
import Cart from '../cart';

const PageContainer = ({ children }) => {
  const [showCart, setShowCart] = useState(true);
  const handleShow = () => {
    setShowCart(!showCart);
  };
  return (
    <div>
      <Navbar onShow={handleShow} />
      <main className="page-Container">{children}</main>
      <Footer />
      {showCart && <Cart data={JSON.parse(localStorage.getItem('products')).slice(0, 4)} onClose={handleShow} />}
    </div>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageContainer;
