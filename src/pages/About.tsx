import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About({ setIsRevealed }: { setIsRevealed?: (val: boolean) => void }) {
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
              Our Heritage & Quality
            </p>
            <h1 className="font-oswald font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] text-white tracking-tight uppercase leading-none">
              About <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Elite</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. DYNAMIC CONTENT SECTION */}
      <section className="flex-grow py-20 lg:py-32 relative bg-white overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-50 rounded-br-[100px] -z-10 opacity-50 border-r border-b border-gray-100" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Image Block with dynamic offset styling */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative order-2 lg:order-1"
            >
              {/* Offset decorative frame */}
              <div className="absolute inset-0 bg-deep-blue transform translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 -z-10 shadow-xl" />
              {/* The Image */}
              <img 
                src="/eliteseamlesswork1.jpeg" 
                alt="Elite Seamless Gutter Installation Output" 
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover shadow-2xl relative z-10"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-bright-cyan p-6 sm:p-8 shadow-2xl z-20 max-w-[200px]">
                <p className="font-oswald font-bold text-4xl sm:text-6xl text-white leading-none">100%</p>
                <p className="text-white font-bold font-oswald tracking-widest uppercase text-sm mt-2">Custom Fit</p>
              </div>
            </motion.div>

            {/* Text & Value Prop Block */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-oswald font-bold text-3xl sm:text-4xl lg:text-5xl text-deep-blue tracking-tight uppercase leading-none mb-6">
                Engineered For <br/>
                <span className="text-bright-cyan border-b-4 border-gray-200 pb-2 inline-block mt-2">Louisiana Weather</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Elite Seamless Gutter, we don't just hang aluminum. We engineer robust, permanent water-diversion systems designed specifically to withstand the intense, unpredictable storms of the Pelican State. 
                </p>
                <p>
                  Our seamless systems are custom-extruded on-site to fit your home's exact dimensions, ensuring a perfect, leak-free seal that protects your foundation, landscaping, and peace of mind.
                </p>
                
                <ul className="pt-4 space-y-4">
                  {[
                    "Heavy-Gauge Aluminum Construction",
                    "Custom On-Site Extrusion Mitigating Leaks",
                    "Aesthetic Color-Matching Integrations",
                    "Expert Installation & Unmatched Durability"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

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
            className="inline-flex items-center gap-3 bg-bright-cyan hover:bg-white text-white hover:text-deep-blue font-bold text-lg sm:text-xl py-4 flex-wrap whitespace-nowrap px-8 sm:px-12 transition-all duration-300 uppercase tracking-widest group"
          >
            <span>Get A Free Quote</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </main>
  );
}
