import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const LouisianaShieldIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-bright-cyan shrink-0" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M32 4L12 12v18c0 14 14 26 20 30 6-4 20-16 20-30V12L32 4z" />
    <path d="M24 20h10v12h6v8h-4v6h-4v-4h-8v-10h-2v-8h2z" strokeDasharray="2 2" />
  </svg>
);

const SatisfactionRibbonIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-bright-cyan shrink-0" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M20 40l-8 20 12-6 8 6v-12" />
    <path d="M44 40l8 20-12-6-8 6v-12" />
    <circle cx="32" cy="28" r="16" />
    <path d="M32 18l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
  </svg>
);

const HelmetIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-bright-cyan shrink-0" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M12 40c0-12 8-20 20-20s20 8 20 20" />
    <path d="M8 40h48v4H8z" />
    <path d="M30 28h6M30 32h4M30 36h6M26 28v8" />
    <path d="M40 48l6 6 10-12" strokeWidth="2" />
  </svg>
);

export default function About() {
  return (
    <section id="why-us" className="relative z-20 bg-white border-t border-gray-100 overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        
        {/* Left Side (Text Stack) */}
        <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[38%] py-24 pb-32 pr-0 md:pr-12 flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-oswald font-bold text-4xl md:text-5xl tracking-tight uppercase flex flex-wrap gap-3">
              <span className="text-deep-blue">ABOUT</span>
              <span className="text-outline-blue">ELITE.</span>
            </h2>
            
            <p className="font-open-sans text-lg text-gray-600 leading-relaxed">
              We are more than just a gutter installer; we are your partners in home defense. With decades of local Louisiana experience, Elite Seamless Gutter is dedicated to providing premium, long-lasting solutions, backed by an unmatched satisfaction guarantee.
            </p>

            {/* High-Trust Points */}
            <div className="space-y-8 pt-4 pb-8">
              <div className="flex items-start gap-5 md:gap-6">
                <LouisianaShieldIcon />
                <div className="pt-1">
                  <h4 className="font-oswald font-bold text-gray-800 text-lg md:text-xl tracking-wide uppercase">LOUISIANA WEATHER PROVEN.</h4>
                  <p className="font-open-sans text-gray-500 text-base mt-2">Decades of local performance against torrential Gulf Coast rains.</p>
                </div>
              </div>

              <div className="flex items-start gap-5 md:gap-6">
                <SatisfactionRibbonIcon />
                <div className="pt-1">
                  <h4 className="font-oswald font-bold text-gray-800 text-lg md:text-xl tracking-wide uppercase">UNMATCHED SATISFACTION GUARANTEE.</h4>
                  <p className="font-open-sans text-gray-500 text-base mt-2">We stand behind every installation with flawless execution or we fix it.</p>
                </div>
              </div>

              <div className="flex items-start gap-5 md:gap-6">
                <HelmetIcon />
                <div className="pt-1">
                  <h4 className="font-oswald font-bold text-gray-800 text-lg md:text-xl tracking-wide uppercase">FULLY INSURED & TRAINED TECHNICIANS.</h4>
                  <p className="font-open-sans text-gray-500 text-base mt-2">A dedicated, professional Elite team. Zero subcontractors, ever.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <Link
                to="/about"
                className="relative overflow-hidden group inline-block bg-bright-cyan text-white font-bold py-4 px-8 rounded-none uppercase tracking-wider"
              >
                <span className="relative z-10">Meet Our Team</span>
                <div className="absolute inset-0 h-full w-0 bg-deep-blue transition-all duration-300 ease-out group-hover:w-full left-0 top-0"></div>
              </Link>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Right Side (Image Container - Desktop) */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden md:block absolute top-0 right-0 w-[55%] lg:w-[60%] h-full"
      >
        <img 
          src="/eliteseamlesswork6.jpeg"  
          alt="Elite Technician Installing Gutter" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-deep-blue/20 to-transparent mix-blend-multiply" />
      </motion.div>

      {/* Right Side (Image Container - Mobile) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:hidden w-full h-[400px] relative"
      >
        <img 
          src="/eliteseamlesswork6.jpeg" 
          alt="Elite Technician Installing Gutter" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-deep-blue/20 to-transparent mix-blend-multiply" />
      </motion.div>

    </section>
  );
}
