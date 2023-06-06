import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimoni from './components/Testimoni';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import components

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimoni />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
