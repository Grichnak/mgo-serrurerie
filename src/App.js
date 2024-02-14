import React from 'react';
import Navbar from './Components/navbar/navbar';
import Hero from './Components/hero/hero';
import Prices from './Components/prices/prices';
import Footer from './Components/footer/footer';
import Contact from './Components/contact/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
