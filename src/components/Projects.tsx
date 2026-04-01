import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import LightBox from './LightBox';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightBoxSrc, setLightBoxSrc] = useState<string | null>(null);

  const projects = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    image: `/eliteseamlesswork${i + 1}.jpeg`,
    alt: `Elite Seamless Gutter recent work ${i + 1}`,
  }));

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <>
      <section id="projects" className="py-16 bg-white relative z-20">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-oswald font-bold text-4xl md:text-5xl tracking-tight uppercase flex flex-wrap justify-center gap-3">
            <span className="text-deep-blue">FEATURED</span>
            <span className="text-outline-blue">PROJECTS.</span>
          </h2>
        </motion.div>

        {/* Desktop Split & Mobile Stack Container */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6 mb-12 lg:items-stretch">
          
          {/* Spotlight Container (Left on Desktop, Top on Mobile) */}
          <div 
            className="w-full lg:w-3/5 relative aspect-video md:aspect-[21/9] lg:aspect-[21/9] bg-gray-100 overflow-hidden rounded-none shadow-xl group flex-shrink-0 cursor-pointer"
            onClick={() => setLightBoxSrc(projects[activeIndex].image)}
          >
            {/* Expand Icon Overlay */}
            <div className="absolute top-4 right-4 z-50 bg-deep-blue/60 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
              <Expand className="w-5 h-5" />
            </div>
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={projects[activeIndex].image}
                alt={projects[activeIndex].alt}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevProject(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-deep-blue/50 hover:bg-bright-cyan text-white p-3 rounded-none backdrop-blur-sm transition-colors duration-300 shadow-lg z-50"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextProject(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-deep-blue/50 hover:bg-bright-cyan text-white p-3 rounded-none backdrop-blur-sm transition-colors duration-300 shadow-lg z-50"
              aria-label="Next project"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Thumbnail Stack (Right on Desktop, Bottom on Mobile) */}
          <div className="w-full lg:w-2/5 grid grid-cols-3 lg:grid-rows-3 gap-2 sm:gap-3 lg:gap-4 h-auto lg:h-full lg:content-stretch">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveIndex(index)}
                className={`relative w-full aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden rounded-none transition-all duration-300 ${
                  index === activeIndex 
                    ? 'opacity-100 border-2 border-bright-cyan shadow-md scale-[1.02] z-10' 
                    : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100 border-2 border-transparent scale-100 z-0'
                }`}
              >
                <img 
                  src={project.image} 
                  alt={project.alt} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <a
            href="/projects"
            className="inline-block bg-transparent border-2 border-bright-cyan text-bright-cyan hover:bg-bright-cyan hover:text-white font-bold py-4 px-10 rounded-none transition-colors uppercase tracking-wider"
          >
            View Full Gallery
          </a>
        </motion.div>
      </div>
    </section>

    <LightBox isOpen={!!lightBoxSrc} src={lightBoxSrc} onClose={() => setLightBoxSrc(null)} />
    </>
  );
}
