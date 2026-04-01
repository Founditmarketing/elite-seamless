import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Rain = () => {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 0.8 + Math.random() * 0.4,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="rain-container absolute inset-0 overflow-hidden pointer-events-none z-10 opacity-40 md:opacity-100">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="drop"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            ['--drop-duration' as any]: drop.duration,
          }}
        />
      ))}
    </div>
  );
};

interface HeroProps {
  isRevealed?: boolean;
  setIsRevealed?: (val: boolean) => void;
}

export default function Hero({ isRevealed = true, setIsRevealed }: HeroProps) {
  // Master Controller: Reveal the site following the shimmer
  useEffect(() => {
    if (setIsRevealed && !isRevealed) {
      // 1s fade + 1.5s shimmer = 2.5s total orchestration time before full reveal
      const timer = setTimeout(() => {
        setIsRevealed(true);
        sessionStorage.setItem('elite_loaded', 'true');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isRevealed, setIsRevealed]);

  return (
    <section className={`relative pt-48 pb-28 sm:pt-56 sm:pb-32 lg:pt-64 lg:pb-36 flex items-center justify-center overflow-hidden bg-white transition-colors duration-1000 ${isRevealed ? 'border-b border-gray-200' : 'border-b border-transparent'}`}>
      {/* Rain Overlay */}
      <div className={`transition-opacity duration-1000 ${isRevealed ? 'opacity-100' : 'opacity-0 delay-0'}`}>
        <Rain />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            className={`flex justify-center w-full mb-8 lg:mb-12 transition-transform duration-1000 ${isRevealed ? 'scale-100' : 'scale-105'}`}
          >
            <div className={`shimmer-wrapper w-[80%] max-w-[400px] sm:w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] ${isRevealed ? 'shimmer-complete' : ''}`}>
              <img 
                src="/eliteseamlesslogo.png" 
                alt="Elite Seamless Gutter" 
                className="w-full h-auto object-contain drop-shadow-xl block mx-auto"
              />
            </div>
          </motion.div>
          
          <div className={`transition-all duration-1000 ease-out transform ${isRevealed ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 font-medium">
              Expertly engineered gutter systems designed for year-round Louisiana defense. Built tough. Looks sharp.
            </p>

            <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-6 pt-8 w-full">
            <a
              href="#services"
              className="relative overflow-hidden group w-full max-w-[280px] sm:max-w-[320px] bg-transparent border-2 border-bright-cyan flex items-center justify-center py-6 px-6 text-center rounded-none"
            >
              <span className="relative z-10 font-oswald font-bold text-xl md:text-2xl text-bright-cyan group-hover:text-white transition-colors duration-300 uppercase tracking-wider leading-tight">
                View Our Gutters
              </span>
              <div className="absolute inset-0 h-full w-0 bg-bright-cyan transition-all duration-300 ease-out group-hover:w-full left-0 top-0"></div>
            </a>
            
            <Link
              to="/colors"
              className="relative overflow-hidden group w-full max-w-[280px] sm:max-w-[320px] bg-transparent border-2 border-deep-blue flex items-center justify-center py-6 px-6 text-center rounded-none"
            >
              <span className="relative z-10 font-oswald font-bold text-xl md:text-2xl text-deep-blue group-hover:text-white transition-colors duration-300 uppercase tracking-wider leading-tight">
                View Color Chart
              </span>
              <div className="absolute inset-0 h-full w-0 bg-deep-blue transition-all duration-300 ease-out group-hover:w-full left-0 top-0"></div>
            </Link>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
