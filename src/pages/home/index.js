import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carrusel from '../../components/slider';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(async () => {
    setNews(JSON.parse(localStorage.getItem('news')));
    const productsList = await JSON.parse(localStorage.getItem('products')).slice(0, 4);
    setProducts(productsList);
  }, []);

  return (
    <div className="home-container">
      <section className="home-container__image-main" />
      <section className="home-container__carrusel">
        <Carrusel data={news} />
      </section>
      <section className="home-container__best-seller">
        <h2 className="home-container__title">Los más vendidos</h2>
        <div className="home-container__box-best-seller">
          {products?.map((item) => (
            <div key={item.id} className="home-container__article">
              <img className="home-container__image" src={item.imagenes[0]} alt="" />
              <div className="home-container__text-article">
                <h3 className="home-container__name">{item.nombre}</h3>
                <p className="home-container__price">
                  $
                  {new Intl.NumberFormat('de-DE').format(item.precio)}
                </p>
                <div className="home-container__overlay">
                  <div className="home-container__button">
                    <Link className="home-container__link" to={`/product/${item.id}`}>
                      comprar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="home-container__videos-container">
        <h2 className="home-container__videos-title">Videos recomendados en la comunidad</h2>
        <div className="home-container__box-videos">
          <div className="home-container__video">
            <iframe
              className="home-container__iframe"
              src="https://www.youtube.com/embed/QVFZVIOqbbc"
              title="🏀 JORDAN x PSG Jugada MAESTRA del Marketing 👈 Jersey del Paris Saint Germain Local 2021/22 Review"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="home-container__description">
              <h3 className="home-container__title-video">Camiseta PSG</h3>
              <p className="home-container__chanel">Canal: Trikots Jerseys - Camisetas de Fútbol </p>
            </div>
          </div>
          <div className="home-container__video">
            <iframe
              className="home-container__iframe"
              src="https://www.youtube.com/embed/KnTiDpkEtng"
              title="CÓMO DISTINGUIR una CAMISETA de FÚTBOL ADIDAS ORIGINAL de una FALSIFICACIÓN"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="home-container__description">
              <h3 className="home-container__title-video">Distinguir una camiseta de fútbol adidas de una falsa</h3>
              <p className="home-container__chanel">Canal: XAVISETAS - Camisetas Fútbol Room </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
