import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Background from './components/Background';
import TechnicalSkills from './components/TechnicalSkills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/background' element={<Background />} />
        <Route path='/technical-skills' element={<TechnicalSkills />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
