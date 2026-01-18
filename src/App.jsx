import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCarousel from './components/FeaturedCarousel';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import AboutModal from './components/AboutModal';

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedCarousel />
        <ProductGrid />
      </main>
      <Footer onAboutClick={() => setIsAboutOpen(true)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
}

export default App;
