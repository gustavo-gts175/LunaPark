import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Attractions = () => {
  const attractions = [
    { id: 1, name: 'Montaña Rusa', image: '/Imagenes/montaña-rusa.jpg', description: 'Velocidad, giros vertiginosos y caídas impresionantes te esperan en nuestra increíble Montaña Rusa. Si te gusta la emoción y la adrenalina, esta es la atracción perfecta para ti.'},
    { id: 2, name: 'Rueda de la Fortuna', image: '/Imagenes/rueda.jpg', description: 'Disfruta de una vista espectacular mientras giras en nuestra increíble Rueda de la Fortuna. Ideal para todas las edades.' },
    { id: 3, name: 'Barco Vikingo', image: '/Imagenes/barco.jpg', description: 'Siente la emoción de navegar en el mítico Barco Vikingo con un movimiento pendular emocionante.' },
    { id: 4, name: 'Autos Chocadores', image: '/Imagenes/autos.jpg', description: '¡Prepara tu volante y pon a prueba tus habilidades al volante en nuestros Autos Chocadores!' },
    { id: 5, name: 'Sillas Voladoras', image: '/Imagenes/sillas.jpg', description: 'Siente la libertad de volar en las Sillas Voladoras mientras disfrutas de vistas panorámicas.' },
    { id: 6, name: 'Samba Rock', image: '/Imagenes/samba.jpg', description: 'Déjate llevar por el ritmo del Samba Rock con giros y saltos llenos de energía.' },
    { id: 7, name: 'Toro Mecánico', image: '/Imagenes/toro.jpg', description: '¡Súbete al Toro Mecánico y pon a prueba tu destreza y resistencia!' },
    { id: 8, name: 'KamiKaze', image: '/Imagenes/Kami.jpg', description: '¡Prepárate para una experiencia extrema con giros y caídas de vértigo!' },
    { id: 9, name: 'Trampolín', image: '/Imagenes/trampolin.jpg', description: '¡Es hora de saltar hasta el cielo en nuestro trampolín!' },
    { id: 10, name: 'Futbolín', image: '/Imagenes/futbolin.jpg', description: '¡La diversión del futbolín en un formato gigante para toda la familia!' },
    { id: 11, name: 'Trencito', image: '/Imagenes/trencito.jpg', description: 'Sube al Trencito y disfruta de un paseo relajante por el parque.' },
    { id: 12, name: 'Carrusel', image: '/Imagenes/carrusel.jpg', description: 'Sube a bordo de nuestro Carrusel y disfruta de la magia de su movimiento.' },
  ];

  return (
    <section id="attractions" className="py-5 bg-light min-vh-100">
      <div className="container">
        <h2 className="text-center mb-4 mt-5">Nuestras Atracciones</h2>
        <div className="row">
          {attractions.map(attraction => (
            <div key={attraction.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm h-100">
                <img 
                  src={attraction.image} 
                  alt={attraction.name} 
                  className="card-img-top img-fluid"
                  style={{ height: '250px', objectFit: 'cover' }} 
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{attraction.name}</h5>
                  <p className="card-text">{attraction.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
