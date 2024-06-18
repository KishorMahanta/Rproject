import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Home />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;