import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import ColorChart from './pages/ColorChart';
import Gallery from './pages/Gallery';

import Service6Inch from './pages/Service6Inch';
import Service7Inch from './pages/Service7Inch';
import ServiceGuards from './pages/ServiceGuards';
import ServiceRoundDown from './pages/ServiceRoundDown';
import ServiceSquareDown from './pages/ServiceSquareDown';

export default function App() {
  const [isRevealed, setIsRevealed] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('elite_loaded') === 'true';
    }
    return false;
  });

  return (
    <Router>
      <div className="min-h-screen bg-white font-open-sans flex flex-col">
        {/* Suppress site navigation until Hero sequence is finished (on Home page) */}
        <Header isRevealed={isRevealed} />
        
        <div className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home isRevealed={isRevealed} setIsRevealed={setIsRevealed} />} />
            <Route path="/contact" element={<Contact setIsRevealed={setIsRevealed} />} />
            <Route path="/about" element={<About setIsRevealed={setIsRevealed} />} />
            <Route path="/colors" element={<ColorChart setIsRevealed={setIsRevealed} />} />
            <Route path="/projects" element={<Gallery setIsRevealed={setIsRevealed} />} />
            
            <Route path="/services/6-inch" element={<Service6Inch setIsRevealed={setIsRevealed} />} />
            <Route path="/services/7-inch" element={<Service7Inch setIsRevealed={setIsRevealed} />} />
            <Route path="/services/gutter-guards" element={<ServiceGuards setIsRevealed={setIsRevealed} />} />
            <Route path="/services/round-downspouts" element={<ServiceRoundDown setIsRevealed={setIsRevealed} />} />
            <Route path="/services/square-downspouts" element={<ServiceSquareDown setIsRevealed={setIsRevealed} />} />
          </Routes>
        </div>
        
        <div className={`transition-all duration-1000 ease-in-out flex flex-col ${isRevealed ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden pointer-events-none'}`}>
          <Footer />
          <FloatingContact isRevealed={isRevealed} />
        </div>
      </div>
    </Router>
  );
}
