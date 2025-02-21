import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" foot text-light py-4">
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="#attractions" className="text-light text-decoration-none">Atracciones</a></li>
              <li><a href="#tickets" className="text-light text-decoration-none">Entradas</a></li>
              <li><a href="#info" className="text-light text-decoration-none">Información</a></li>
              <li><a href="#testimonials" className="text-light text-decoration-none">Testimonios</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contacto</a></li>
            </ul>
          </div>
          
          <div className="col-12 col-md-4 mb-3 text-center text-md-start">
            <h5>Síguenos</h5>
            <ul className="list-unstyled d-flex gap-3 justify-content-center justify-content-md-start">
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light"><FaFacebook size={24} /></a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light"><FaTwitter size={24} /></a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light"><FaInstagram size={24} /></a></li>
              <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-light"><FaWhatsapp size={24} /></a></li>
            </ul>
          </div>
          
          <div className="col-12 col-md-4 mb-3 text-center text-md-start">
            <h5>Contacto</h5>
            <p>Dirección: Av. Ferroviaria No 123</p>
            <p>Ciudad: Potosí</p>
            <p>Celular: (+591) 64361005</p>
            <p>Email: contacto@parqueLunaPark.com</p>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-3 border-top pt-3">
        <p>&copy; 2025 Parque Diversiones LunaPark. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

