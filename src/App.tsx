import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Location from './components/Location';
import Sponsors from './components/Sponsors';
import Recruitment from './components/Recruitment';
import SnsSection from './components/SnsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Activities />
      <SnsSection />
      <Location />
      <Recruitment />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;