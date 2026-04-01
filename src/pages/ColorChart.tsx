import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ColorInteractive from '../components/ColorInteractive';

export default function ColorChart({ setIsRevealed }: { setIsRevealed?: (val: boolean) => void }) {
  // Always scroll to top on mount when coming from another page
  useEffect(() => {
    window.scrollTo(0, 0);
    if (setIsRevealed) setIsRevealed(true);
  }, [setIsRevealed]);

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
              Premium Seamless Finishes
            </p>
            <h1 className="font-oswald font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] text-white tracking-tight uppercase leading-none">
              Color <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Chart</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. DYNAMIC CONTENT SECTION: INTERACTIVE SWATCH BOARD */}
      <ColorInteractive />

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

    </main>
  );
}
