import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../footer';
import Navbar from '../navbar';

const PageContainer = ({ children }) => (
  <div>
    <Navbar />
    <main className="page-Container">{children}</main>
    <Footer />
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageContainer;
