/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const New = () => {
  const [setNews] = useState();
  const { id } = useParams();
  useEffect(() => {
    const listNews = JSON.parse(localStorage.getItem('news'));
    setNews(listNews.filter((item) => item.id === id));
  }, []);

  return (
    <div>
      hola
    </div>
  );
};

export default New;
