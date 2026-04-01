import { motion } from 'motion/react';

export default function TrustBar() {
  const reasons = [
    "5-Star Rated",
    "Locally Owned & Operated",
    "Free Estimates",
    "Lifetime Material Warranty",
    "Premium Aluminum & Copper",
    "Fully Licensed & Insured",
    "Expert Installation",
    "Heavy Duty Hangers"
  ];

  return (
    <div className="bg-deep-blue text-white py-3 sm:py-4 overflow-hidden relative flex items-center border-b border-bright-cyan z-30 shadow-lg">
      {/* Dark gradient fades on edges for smoother entry/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-deep-blue to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-deep-blue to-transparent z-10 pointer-events-none"></div>
      
      <motion.div
        className="flex whitespace-nowrap items-center font-oswald font-bold text-sm sm:text-base tracking-widest uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35
        }}
      >
        {/* Map multiple sets to guarantee enough width for continuous scrolling */}
        {[...reasons, ...reasons, ...reasons, ...reasons].map((reason, index) => (
          <div key={index} className="flex items-center px-6 sm:px-12">
            <span className="text-bright-cyan mr-6 sm:mr-12 text-[10px] sm:text-xs">♦</span>
            {reason}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
