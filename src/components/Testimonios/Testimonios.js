import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonios.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Juan Pérez',
      comment: '¡Un lugar increíble! Mis hijos no querían irse.',
      rating: 5,
    },
    {
      id: 2,
      name: 'María Gómez',
      comment: 'Las atracciones son emocionantes y seguras.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Carlos López',
      comment: 'Excelente servicio y atención al cliente.',
      rating: 5,
    },
  ]);

  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    comment: '',
    rating: 5,
  });

  
  const handleChange = (e) => {
    setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value });
  };


  const addTestimonial = () => {
    if (newTestimonial.name && newTestimonial.comment) {
      setTestimonials([...testimonials, { 
        id: testimonials.length + 1, 
        ...newTestimonial 
      }]);
      setNewTestimonial({ name: '', comment: '', rating: 5 }); 
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  
  const renderStars = (rating, isNew = false) => {
    const totalStars = 5;

    return (
      <div className="stars">
        {Array.from({ length: totalStars }, (_, index) => (
          <span
            key={index}
            className={index < rating ? 'filled' : 'empty'}
            onClick={() => isNew && setNewTestimonial({ ...newTestimonial, rating: index + 1 })}
          >
            {index < rating ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="testimonials  py-5">
      <div className="container">
        <h2 className="text-center text-black mb-4 mt-5">Testimonios</h2>
        
        <div className="row">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="col-md-4 mb-4">
              <div className="testimonial-card bg-light p-4 rounded shadow-sm text-center">
                <h3>{testimonial.name}</h3>
                {renderStars(testimonial.rating)}
                <p className="mt-3">{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </div>

      
        <div className="add-testimonial mt-5">
          <h3 className="text-white">Agregar un Nuevo Testimonio</h3>
          <input 
            type="text" 
            name="name" 
            className="form-control mb-3"
            placeholder="Tu Nombre" 
            value={newTestimonial.name} 
            onChange={handleChange} 
          />
          <textarea 
            name="comment" 
            className="form-control mb-3"
            placeholder="Escribe tu testimonio..." 
            value={newTestimonial.comment} 
            onChange={handleChange} 
          />
          {renderStars(newTestimonial.rating, true)}
          <button 
            className="btn btn-warning mt-3" 
            onClick={addTestimonial}
          >
            Agregar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
