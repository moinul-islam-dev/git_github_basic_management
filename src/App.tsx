import React from 'react';
import Navbar from './components/Navbar';
import "./App.css"
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        
        <HeroSection />

      </main>
    </div>
  );
};

export default App;