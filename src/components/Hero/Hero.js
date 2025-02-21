import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero position-relative text-center text-white col-12">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <video className="hero-video w-100" src="/videos/vid.mp4" autoPlay loop muted></video>
      <div className="overlay"></div>
      <div className="container hero-content position-absolute top-50 start-50 translate-middle">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold">Bienvenido al Parque de Atracciones</h1>
            <h3>¡Diversión para toda la familia!</h3>
            <a href="#tickets" className="btn btn-warning mt-3 px-4 py-2">
              Comprar Entradas
            </a>
          </div>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default Hero;
