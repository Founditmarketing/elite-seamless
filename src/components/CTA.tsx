import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const CTARain = () => {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 0.5 + Math.random() * 0.3,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute bottom-[100%] w-[1px] h-[15px]"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
            animationName: 'drop',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(2, 175, 238, 0.5))'
          }}
        />
      ))}
    </div>
  );
};

export default function CTA() {
  return (
    <section id="quote" className="py-16 bg-deep-blue relative z-20 overflow-hidden">
      {/* Subtle Background Rain Animation */}
      <CTARain />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-oswald font-bold text-4xl md:text-5xl tracking-tight uppercase flex flex-wrap justify-center gap-3">
            <span className="text-white">SUPERIOR</span>
            <span className="text-outline-cyan">SOLUTION?</span>
          </h2>
          <p className="mt-6 text-lg text-white/90 font-open-sans max-w-2xl mx-auto">
            Upgrade your home's defense today. Leave your details below and an expert will be in touch with a free, custom quote.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-transparent border-none shadow-none"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border border-white/30 text-white placeholder:text-cyan-200/70 focus:border-white focus:ring-1 focus:ring-white focus:outline-none p-4 rounded-none transition-all"
                  placeholder="Name"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-transparent border border-white/30 text-white placeholder:text-cyan-200/70 focus:border-white focus:ring-1 focus:ring-white focus:outline-none p-4 rounded-none transition-all"
                  placeholder="Phone"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border border-white/30 text-white placeholder:text-cyan-200/70 focus:border-white focus:ring-1 focus:ring-white focus:outline-none p-4 rounded-none transition-all"
                  placeholder="Email"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  id="address" 
                  className="w-full bg-transparent border border-white/30 text-white placeholder:text-cyan-200/70 focus:border-white focus:ring-1 focus:ring-white focus:outline-none p-4 rounded-none transition-all"
                  placeholder="Address"
                />
              </div>
            </div>

            <div>
              <textarea 
                id="details" 
                rows={3}
                className="w-full bg-transparent border border-white/30 text-white placeholder:text-cyan-200/70 focus:border-white focus:ring-1 focus:ring-white focus:outline-none p-4 rounded-none transition-all resize-none"
                placeholder="Project Details..."
              ></textarea>
            </div>

            <div className="pt-6 text-center">
              <button 
                type="button"
                className="w-full md:w-auto bg-bright-cyan hover:bg-cyan-500 text-white font-bold py-4 px-16 rounded-none transition-colors uppercase tracking-wider"
              >
                Submit & Protect
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
