import React, { useEffect } from 'react';
import './App.scss';
import AppRoutes from './routes/route';
import { setLocalStorage } from './utils/data';

function App() {
  useEffect(() => {
    setLocalStorage();
  }, []);

  return (
    <AppRoutes />
  );
}

export default App;
