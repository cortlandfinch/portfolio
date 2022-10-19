import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Background from './components/Background';
import TechnicalSkills from './components/TechnicalSkills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Background />
      <TechnicalSkills />
      <Portfolio />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
