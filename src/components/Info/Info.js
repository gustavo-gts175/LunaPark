import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Info = () => {
  return (
    <section id="info" className="info-section py-5">
      <div className="container">
        
        <h2 className="info-title text-center text-primary py-4 mt-3">Información General</h2>

       
        <div className="row">
         
          <div className="col-md-6 mb-4">
            <div className="info-card p-4 shadow-lg rounded-3 bg-light">
              <h3 className="info-subtitle text-info">Sobre el Parque</h3>
              <p className="info-text">
                Bienvenido al Parque de Atracciones, el lugar perfecto para disfrutar en familia. Con más de 12 atracciones emocionantes, restaurantes temáticos y áreas de descanso, ofrecemos diversión para todas las edades. Fundado en 2010, nuestro parque se ha convertido en un referente de entretenimiento en la región.
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="info-card p-4 shadow-lg rounded-3 bg-light">
              <h3 className="info-subtitle text-success">Información Útil</h3>
              <ul className="info-list list-unstyled">
                <li className="info-item mb-3">
                  <span role="img" aria-label="location" className="me-2">📍</span>
                  <p><strong>Ubicación:</strong> Av. Ferroviaria #123, Ciudad, Potosi</p>
                </li>
                <li className="info-item mb-3">
                  <span role="img" aria-label="clock" className="me-2">🕒</span>
                  <p><strong>Horario:</strong> Lunes a Domingo, 9:00 AM - 9:00 PM</p>
                </li>
                <li className="info-item mb-3">
                  <span role="img" aria-label="phone" className="me-2">📞</span>
                  <p><strong>Contacto:</strong> +591 67787890</p>
                </li>
                <li className="info-item">
                  <span role="img" aria-label="ticket" className="me-2">🎟️</span>
                  <p><strong>Entradas:</strong> Disponibles en taquilla y online</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="info-images d-flex flex-wrap justify-content-between mt-4">
          <img
            src="/Imagenes/atraccion.jpg"
            alt="Atracción del parque"
            className="info-image mb-3 rounded-3 shadow-lg"
            style={{ width: '32%', height: 'auto' }}
          />
          <img
            src="/Imagenes/family.jpg"
            alt="Familia en el parque"
            className="info-image mb-3 rounded-3 shadow-lg"
            style={{ width: '32%', height: 'auto' }}
          />
          <img
            src="/Imagenes/restaurante.jpg"
            alt="Restaurante temático"
            className="info-image mb-3 rounded-3 shadow-lg"
            style={{ width: '32%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
