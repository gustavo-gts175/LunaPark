import React from 'react';
import Header from './components/Layouts/Header/Header';
import Hero from './components/Hero/Hero';
import Attractions from './components/Attractions/Attractions';
import Tickets from './components/Tickets/Tickets';
import Info from './components/Info/Info';
import Testimonials from './components/Testimonios/Testimonios';
import Contact from './components/Contacto/Contacto';
import Footer from './components/Layouts/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Attractions />
      <Tickets />
      <Info />
      <Testimonials /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;