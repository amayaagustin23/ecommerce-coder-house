/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import './App.scss';
import AppRoutes from './routes/route';
import { setLocalStorage } from './utils/data';
import CartContext from './context/CartContext';

const data = {
  count: 5
};
function App() {
  const [countCart, setCountCart] = useState(data);
  useEffect(() => {
    setLocalStorage();
  }, []);
  const updateCount = (value) => {
    setCountCart({ ...countCart, count: value });
  };

  return (
    <CartContext.Provider value={{ countCart, updateCount }}>
      <AppRoutes />
    </CartContext.Provider>
  );
}

export default App;
