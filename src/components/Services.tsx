import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const GutterIcon = () => (
  <svg className="w-16 h-16 text-bright-cyan" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M16 12v32c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-8l6-6V12" />
    <path d="M54 12h-6v6h6v-6z" />
    <path d="M16 16h32" strokeDasharray="2 2" />
    <path d="M24 16v8h24" />
    <path d="M32 16l4 8" />
    <path d="M20 36h20" strokeDasharray="1 3" />
  </svg>
);

const LeafGuardIcon = () => (
  <svg className="w-16 h-16 text-bright-cyan" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M12 28v20h32v-12l8-8" />
    <path d="M12 28h20l8-8h-20z" />
    <path d="M16 28l8-8" />
    <path d="M20 28l8-8" />
    <path d="M24 28l8-8" />
    <path d="M28 28l8-8" />
    <path d="M14 26h18" />
    <path d="M16 24h18" />
    <path d="M18 22h18" />
    <path d="M32 28h20l8-8H40z" />
    <path d="M44 12c-4-4-10-2-12 4 0 0 6-2 10 2s2 10 2 10c6-2 4-10 4-10s-2-2-4-6z" />
    <path d="M38 18l-4-4" strokeDasharray="2 2" />
    <path d="M42 22l-4-4" strokeDasharray="2 2" />
  </svg>
);

const DrainageIcon = () => (
  <svg className="w-16 h-16 text-bright-cyan" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M24 8h16v8H24z" />
    <path d="M28 16v16" />
    <path d="M36 16v16" />
    <path d="M26 32h12l4 8H22l4-8z" />
    <path d="M32 34v4m-2-2l2 2 2-2" />
    <path d="M22 40l-8 8v4" />
    <path d="M26 40l-8 8v8" />
    <path d="M10 54h8" strokeDasharray="2 2" />
    <path d="M38 40l8 8v8" />
    <path d="M42 40l8 8v4" />
    <path d="M42 56h12v4H42z" />
    <path d="M44 56v4m4-4v4m4-4v4" />
    <path d="M46 46l4 4m0 0l-4 4m4-4H42" />
  </svg>
);

export default function Services() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const cards = [
    {
      title: '6" K Style Seamless Gutters',
      description: 'The industry standard for residential properties, offering robust rainwater management with a classic profile.',
      icon: GutterIcon,
      hoverImage: '/6-In-Gutter.jpeg',
      linkText: 'View Details',
      to: '/services/6-inch'
    },
    {
      title: '7" K Style Seamless Gutters',
      description: 'Maximum capacity seamless gutters built for larger roofs and intense Louisiana downpours.',
      icon: GutterIcon,
      hoverImage: '/copper-7in-gut.jpeg',
      linkText: 'View Details',
      to: '/services/7-inch'
    },
    {
      title: 'Gutter Guards',
      description: 'Premium debris stoppers that keep your drainage clear year-round. Zero clogs, guaranteed.',
      icon: LeafGuardIcon,
      hoverImage: '/gutter-guard-debris-stopper1.jpeg',
      linkText: 'View Details',
      to: '/services/gutter-guards'
    },
    {
      title: 'Round Downspouts',
      description: 'Available in 4″. An elegant, traditional drainage solution perfect for historic homes or copper setups.',
      icon: DrainageIcon,
      hoverImage: '/copper-downspout.jpeg',
      linkText: 'View Details',
      to: '/services/round-downspouts'
    },
    {
      title: 'Square Downspouts',
      description: 'Available in 3″x 4″ and 4″x 5″. Modern, high-volume water routing for residential and commercial systems.',
      icon: DrainageIcon,
      hoverImage: '/clay-downspout.jpeg',
      linkText: 'View Details',
      to: '/services/square-downspouts'
    },
  ];

  return (
    <section id="services" className="relative z-20 bg-deep-blue border-t-4 border-bright-cyan overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-oswald font-bold text-4xl md:text-5xl tracking-tight uppercase flex flex-wrap justify-center gap-3">
            <span className="text-deep-blue">UNMATCHED</span>
            <span className="text-outline-blue">SOLUTIONS.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-200 border-y border-gray-200">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group perspective-[1000px] h-[460px] w-full bg-white cursor-pointer sm:cursor-auto"
              onClick={() => toggleFlip(index)}
            >
              <div className={`relative w-full h-full transition-transform duration-[600ms] ease-in-out [transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)] ${flippedIndex === index ? '[transform:rotateY(180deg)]' : ''}`}>
                
                {/* Front Face */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-deep-blue p-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-8 flex items-center justify-center">
                    <card.icon />
                  </div>
                  
                  <h3 className="font-oswald font-bold text-2xl mb-4 uppercase tracking-wide text-white">
                    {card.title}
                  </h3>
                  
                  <p className="font-open-sans leading-relaxed flex-grow text-gray-300">
                    {card.description}
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-opacity-20 border-gray-400 w-full">
                    <span className="inline-flex items-center font-bold uppercase tracking-wider text-sm text-bright-cyan transition-colors">
                      <span className="hidden sm:inline">Hover to view</span>
                      <span className="sm:hidden text-white">Click to view</span>
                      <svg className="w-5 h-5 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Back Face (Hover Image) */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white overflow-hidden shadow-2xl">
                  <img src={card.hoverImage} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute inset-0 bg-deep-blue/40 transition-colors hover:bg-deep-blue/20 pointer-events-none"></div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 space-y-3 z-20">
                     <Link to={card.to} className="w-4/5 text-center bg-bright-cyan hover:bg-deep-blue text-white font-bold px-6 py-4 transition-colors uppercase text-sm tracking-widest rounded-none">
                       {card.linkText}
                     </Link>
                     <Link to="/contact" className="w-4/5 text-center bg-transparent border-2 border-white hover:bg-white text-white hover:text-deep-blue font-bold px-6 py-3.5 transition-colors uppercase text-sm tracking-widest rounded-none">
                       Request Quote
                     </Link>
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}

          {/* 6th Slot: Basic Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="h-[460px] w-full bg-deep-blue flex flex-col items-center justify-center p-10 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/blueprint/800/800')] bg-cover bg-center mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 border-2 border-bright-cyan rounded-none flex items-center justify-center mb-6 text-bright-cyan group-hover:bg-bright-cyan group-hover:text-white transition-colors duration-500 rotate-45">
                <div className="-rotate-45">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-oswald font-bold text-3xl mb-4 uppercase tracking-wide text-white">
                Commercial & Custom
              </h3>
              <p className="font-open-sans leading-relaxed flex-grow text-gray-300 mb-8 max-w-[250px]">
                We also handle specialty projects, commercial installations, and custom fabrication.
              </p>
              <Link to="/contact" className="w-full text-center bg-transparent border-2 border-bright-cyan text-bright-cyan hover:bg-bright-cyan hover:text-white font-bold px-6 py-4 transition-colors uppercase text-sm tracking-widest rounded-none">
                Reach Out To Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
