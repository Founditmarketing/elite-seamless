import { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LightBox from '../components/LightBox';

export default function Gallery({ setIsRevealed }: { setIsRevealed?: (val: boolean) => void }) {
  const [lightBoxSrc, setLightBoxSrc] = useState<string | null>(null);

  // Always scroll to top on mount when coming from another page
  useEffect(() => {
    window.scrollTo(0, 0);
    if (setIsRevealed) setIsRevealed(true);
  }, [setIsRevealed]);

  const galleryImages = useMemo(() => {
    const images = [
      '/eliteseamlesswork1.jpeg',
      '/eliteseamlesswork2.jpeg',
      '/eliteseamlesswork3.jpeg',
      '/eliteseamlesswork4.jpeg',
      '/eliteseamlesswork5.jpeg',
      '/eliteseamlesswork6.jpeg',
      '/eliteseamlesswork7.jpeg',
      '/eliteseamlesswork8.jpeg',
      '/eliteseamlesswork9.jpeg',
      '/eliteseamlesswork10.jpeg',
      '/eliteseamlesswork11.jpeg',
      '/eliteseamlesswork12.jpeg',
      '/eliteseamlesswork13.jpeg',
      '/eliteseamlesswork14.jpeg',
      '/eliteseamlesswork15.jpeg',
      '/eliteseamlesswork16.jpeg',
      '/eliteseamlesswork17.jpeg'
    ];
    // Fisher-Yates generic shuffle algorithm
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-open-sans">
      
      {/* 1. SKINNY HEADER BANNER */}
      <section className="relative bg-deep-blue min-h-[300px] md:min-h-[400px] flex items-end pt-24 pb-10 overflow-hidden border-b-4 border-bright-cyan">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center w-full focus-visible:outline-none"
          >
            <p className="font-open-sans text-white/40 uppercase tracking-wider text-sm sm:text-base mb-4">
              Our Track Record
            </p>
            <h1 className="font-oswald font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] text-white tracking-tight uppercase leading-none">
              Project <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Gallery</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. DYNAMIC CONTENT SECTION: MASSIVE GALLERY */}
      <section className="flex-grow pt-8 pb-20 lg:pt-12 lg:pb-32 relative bg-white overflow-hidden border-t-8 border-gray-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                onClick={() => setLightBoxSrc(src)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="relative overflow-hidden group aspect-square bg-gray-100 shadow-md border-b-4 border-transparent hover:border-bright-cyan transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={src} 
                  alt={`Elite Seamless Installation ${index + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-deep-blue/0 group-hover:bg-deep-blue/40 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full border-2 border-bright-cyan flex items-center justify-center bg-deep-blue/80 text-white backdrop-blur-sm shadow-xl">
                      <ArrowRight className="w-5 h-5 -rotate-45" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SMALL CALL TO ACTION */}
      <section className="bg-deep-blue relative overflow-hidden py-16">
        {/* Background accent */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              rgba(255, 255, 255, 0.1) 0px,
              rgba(255, 255, 255, 0.1) 2px,
              transparent 2px,
              transparent 12px
            )`
          }}
        />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
          <h2 className="font-oswald font-bold text-3xl sm:text-4xl text-white uppercase tracking-wider mb-6">
            Ready To Upgrade Your Home's Defense?
          </h2>
          <p className="text-cyan-50/80 max-w-2xl mx-auto text-lg mb-8">
            Contact us today for a free, no-obligation inspection and custom quote.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-bright-cyan hover:bg-white text-white hover:text-deep-blue font-bold text-lg sm:text-xl py-4 flex-wrap whitespace-nowrap px-8 sm:px-12 transition-all duration-300 uppercase tracking-widest group border-2 border-transparent hover:border-white shadow-xl"
          >
            <span>Get A Free Quote</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <LightBox isOpen={!!lightBoxSrc} src={lightBoxSrc} onClose={() => setLightBoxSrc(null)} />
    </main>
  );
}
