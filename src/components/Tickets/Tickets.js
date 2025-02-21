import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tickets.css';

const Tickets = () => {
  const games = [
    { id: 1, name: 'Montaña Rusa', price: 10 },
    { id: 2, name: 'Rueda de la Fortuna', price: 10 },
    { id: 3, name: 'Barco vikingo', price: 10 },
    { id: 4, name: 'Autos Chocadores', price: 10 },
    { id: 5, name: 'Sillas Voladoras', price: 7 },
    { id: 6, name: 'Samba Rock', price: 8 },
    { id: 7, name: 'Toro Mecanico', price: 10 },
    { id: 8, name: 'Kamikaze', price: 10 },
    { id: 9, name: 'Trampolin', price: 6 },
    { id: 10, name: 'Futbolin', price: 1 },
    { id: 11, name: 'Trencito', price: 7 },
    { id: 12, name: 'Carrusel', price: 5 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart([...cart, game]);
  };

  const removeFromCart = (gameId) => {
    const index = cart.findIndex(item => item.id === gameId);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="tickets" className="tickets-section">
      <div className="container">
        <h2 className="tickets-title text-center text-primary py-4 mt-4">Compra de Tickets</h2>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {games.map((game) => (
            <div key={game.id} className="col">
              <div className="card shadow-lg border-0 rounded-3">
                <div className="card-body text-center">
                  <h5 className="game-name">{game.name}</h5>
                  <p className="game-price text-success">Bs. {game.price}</p>
                  <button
                    className="btn btn-warning add-to-cart-btn"
                    onClick={() => addToCart(game)}
                  >
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart mt-5">
          <h3 className="cart-title text-center text-warning">Carrito</h3>
          {cart.length === 0 ? (
            <h3 className="cart-empty text-danger text-center">El carrito está vacío.</h3>
          ) : (
            <>
              <ul className="cart-items list-group">
                {cart.map((item, index) => (
                  <li key={index} className="cart-item list-group-item d-flex justify-content-between align-items-center">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">Bs. {item.price}</span>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-total text-end mt-3">
                <strong>Total:</strong> Bs. {total}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tickets;
