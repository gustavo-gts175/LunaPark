import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contacto.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(' Su Mensaje ha sido enviado');
  };

  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4 mt-5">Contacto</h2>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="text-white">Nombre:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="form-control" 
              placeholder="Ingresa tu nombre"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="text-white">Correo Electrónico:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-control" 
              placeholder="Ingresa tu correo electrónico"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="text-white">Mensaje:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              className="form-control" 
              placeholder="Escribe tu mensaje..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-warning btn-block">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
