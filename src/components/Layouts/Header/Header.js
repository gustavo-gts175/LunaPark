import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} fixed-top`}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src="/Imagenes/logolunapark2.png" alt="LogoLunaPark" width="50" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#attractions" onClick={toggleMenu}>Atracciones</a></li>
              <li className="nav-item"><a className="nav-link" href="#tickets" onClick={toggleMenu}>Entradas</a></li>
              <li className="nav-item"><a className="nav-link" href="#info" onClick={toggleMenu}>Información</a></li>
              <li className="nav-item"><a className="nav-link" href="#testimonials" onClick={toggleMenu}>Testimonios</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact" onClick={toggleMenu}>Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
