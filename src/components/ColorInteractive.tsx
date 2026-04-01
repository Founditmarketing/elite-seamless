import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Phone } from 'lucide-react';

const colorCategories = [
  {
    name: "Traditional Painted Aluminum",
    colors: [
      { id: '001', name: '30° White', hex: '#FFFFFF' },
      { id: '002', name: 'Royal Brown', hex: '#4A3B32' },
      { id: '003', name: 'Antique Ivory', hex: '#E2D4B7' },
      { id: '004', name: 'Black', hex: '#111111' },
      { id: '005', name: 'Raffia Beige', hex: '#D9CBAE' },
      { id: '006', name: 'Beaver Brown', hex: '#6B5A4A' },
      { id: '007', name: 'Classic Cream', hex: '#E8DBC3' },
      { id: '008', name: 'Clay', hex: '#A59C8F' },
      { id: '009', name: 'Colonial Blue', hex: '#5A7B8C' },
      { id: '010', name: 'Sherwood Green', hex: '#3E6150' },
      { id: '011', name: 'Musket Brown', hex: '#423730' },
      { id: '013', name: 'Wicker', hex: '#C8B89E' },
      { id: '014', name: 'Dove Gray', hex: '#8F9295' },
      { id: '015', name: 'Almond', hex: '#E2D7C1' },
      { id: '017', name: 'Linen', hex: '#EFEAE0' },
      { id: '018', name: 'Light Bronze', hex: '#8C7761' },
      { id: '019', name: 'Tuxedo Gray', hex: '#4A4D4E' },
      { id: '020', name: 'Heritage Cream', hex: '#E0D2B8' },
      { id: '021', name: 'Colonial Gray', hex: '#7D838A' },
      { id: '022', name: 'Buckskin Brown', hex: '#8C735B' },
      { id: '023', name: '80° White', hex: '#F4F5F0' },
      { id: '024', name: 'Colonial Red', hex: '#7A3E39' },
      { id: '025', name: 'Dark Bronze', hex: '#3B332C' },
      { id: '026', name: 'Herringbone', hex: '#D9CDB8' },
      { id: '027', name: 'Copper Metallic', hex: 'linear-gradient(135deg, #C47D3A, #955923)' },
      { id: '028', name: 'Paint Grip Metallic', hex: 'linear-gradient(135deg, #B0B5B9, #767B7F)' },
    ]
  },
  {
    name: "Armor Tough Painted Aluminum",
    colors: [
      { id: '130', name: 'Satin White', hex: '#F3F4F1' },
      { id: '131', name: 'Wood Beige', hex: '#A09689' },
      { id: '132', name: 'Cameo', hex: '#EBE5D6' },
    ]
  },
  {
    name: "Dual Tone Painted Aluminum",
    colors: [
      { id: '129', name: 'Rustic Copper', hex: '#A85926', image: '/Rustic%20Copper.png' },
    ]
  },
  {
    name: "Premium Metals",
    colors: [
      { id: 'B90', name: 'Solid Copper', hex: '#C57B43' },
      { id: '920', name: 'Galvalume Plus Steel', hex: '#A5B0B4', image: '/Galvalume%20Plus%20Steel.png' },
    ]
  }
];

export default function ColorChart() {
  const [activeColor, setActiveColor] = useState(colorCategories[0].colors[0]);
  const [stickState, setStickState] = useState<'top' | 'sticky' | 'bottom'>('top');
  
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Determine if checkmark should be light or dark based on the color to maintain contrast
  const useDarkCheckmark = ['001', '003', '005', '007', '013', '015', '017', '020', '023', '026', '130', '132'].includes(activeColor.id);

  useEffect(() => {
    const handleScroll = () => {
      // Don't apply sticky logic to large desktop displays where the flex layout naturally handles it side-by-side
      if (window.innerWidth >= 1024) {
        if (stickState !== 'top') setStickState('top');
        return;
      }

      if (!triggerRef.current || !sectionRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportBottom = window.innerHeight;

      if (triggerRect.top > 80) {
        setStickState('top');
      } else if (sectionRect.bottom < viewportBottom) {
        setStickState('bottom');
      } else {
        setStickState('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize check on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [stickState]);

  return (
    <section id="colors" ref={sectionRef} className="py-24 bg-gray-50 relative z-20 border-y border-gray-200">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="font-oswald font-bold text-4xl md:text-5xl tracking-tight uppercase flex flex-col md:flex-row flex-wrap justify-center gap-2 md:gap-3">
            <span className="text-deep-blue">CHOOSE YOUR</span>
            <span className="text-outline-blue">ELITE FINISH.</span>
          </h2>
          <p className="font-open-sans text-lg text-gray-500 max-w-2xl mx-auto mt-6">
            With over 30 traditional and specialty baked-on finish options, we have the perfect shade to complement your home's exterior durability and style.
          </p>
        </motion.div>

        {/* Dual Layout: Spotlight & Grid */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-6xl mx-auto items-start relative">
          
          {/* Spotlight Viewer (Left Side Sticky) */}
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:sticky lg:top-32 self-start relative">
            
            <div 
              className={`w-full max-w-[320px] sm:max-w-md transition-all duration-300 origin-bottom-left bg-white ${
                stickState === 'sticky' 
                  ? 'fixed bottom-6 left-4 scale-[0.45] sm:scale-50 shadow-2xl p-2 border-[4px] border-deep-blue pointer-events-none z-30 opacity-100 translate-y-0' 
                  : stickState === 'bottom'
                  ? 'fixed bottom-6 left-4 scale-[0.45] sm:scale-50 shadow-none p-2 border-[4px] border-deep-blue pointer-events-none z-30 opacity-0 translate-y-8'
                  : 'relative scale-100 p-0 border-0 opacity-100 z-10 translate-y-0'
              }`}
            >
               {/* 3D Render Illusion Frame - Square Design */}
               <div className="aspect-square w-full rounded-none shadow-2xl relative overflow-hidden border-[12px] border-white bg-white group ring-1 ring-gray-200">
                 
                 {/* Framer motion animate block to cross-fade active colors */}
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={activeColor.id}
                     initial={{ opacity: 0, scale: 1.05 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     className="absolute inset-0 w-full h-full shadow-[inset_0_-30px_60px_rgba(0,0,0,0.5)]"
                     style={{ background: activeColor.image ? `url('${activeColor.image}') center/cover no-repeat` : activeColor.hex }}
                   />
                 </AnimatePresence>
                 
                 {/* Shiny Metallic Lighting Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/60 pointer-events-none mix-blend-overlay"></div>
                 <div className="absolute inset-0 border border-white/20 pointer-events-none"></div>
               </div>
               
               {/* Selected Color Information Block */}
               <div className={`mt-8 bg-white shadow-xl rounded-none border-t-4 border-bright-cyan relative overflow-hidden ${stickState !== 'top' ? 'p-8' : 'p-6 md:p-8'}`}>
                 <div className="absolute -right-4 -top-4 text-[8rem] font-black text-gray-50 leading-none pointer-events-none select-none">
                   {activeColor.id.replace(/[^\d]/g, '')}
                 </div>
                 
                 <div className="relative z-10 flex flex-col h-full bg-white/40 mix-blend-multiply">
                   <span className="block text-gray-500 font-bold tracking-widest text-[0.85rem] mb-1 uppercase">Selection / {activeColor.id}</span>
                   <h3 className="font-oswald font-bold text-4xl text-deep-blue uppercase leading-tight">
                     {activeColor.name}
                   </h3>
                 </div>
               </div>
            </div>

            {/* Layout jump placeholder to retain height when the spotlight extracts itself from the document layout flow */}
            {stickState !== 'top' && <div className="block lg:hidden w-full max-w-[320px] sm:max-w-md h-[480px]"></div>}

            {/* Invisible trigger div placed right below the original spotlight position to calculate scroll mathematically */}
            <div ref={triggerRef} className="h-[1px] w-full invisible absolute bottom-0 left-0"></div>
          </div>

          {/* Interactive Swatch Grid (Right Side) */}
          <div className="w-full lg:w-3/5">
             <div className="bg-white p-6 sm:p-10 shadow-xl rounded-none border border-gray-100">
               
               {colorCategories.map((category) => (
                 <div key={category.name} className="mb-12 last:mb-0">
                   <h4 className="font-oswald font-bold text-gray-800 text-lg tracking-wide uppercase mb-6 pb-2 border-b border-gray-100">
                     {category.name}
                   </h4>
                   
                   {/* Grid Layout - Square Swatches */}
                   <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
                     {category.colors.map((color) => {
                       const isActive = activeColor.id === color.id;
                       return (
                         <button
                           key={color.id}
                           onClick={() => setActiveColor(color)}
                           title={`${color.id} - ${color.name}`}
                           className={`group relative aspect-square rounded-none flex items-center justify-center transition-all duration-300 focus:outline-none ${
                              isActive 
                                ? 'ring-4 ring-offset-4 ring-bright-cyan scale-110 shadow-lg z-10' 
                                : 'ring-1 ring-gray-300 hover:ring-2 hover:ring-offset-2 hover:ring-deep-blue hover:scale-110 shadow-sm z-0'
                           }`}
                           style={{ background: color.image ? `url('${color.image}') center/cover no-repeat` : color.hex }}
                         >
                           {/* Subtle bevel effect inside swatch */}
                           <div className="absolute inset-0 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)] pointer-events-none mix-blend-multiply"></div>
                           <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.5)] pointer-events-none mix-blend-screen"></div>
                           
                           {/* SVG Checkmark when Active */}
                           {isActive && (
                             <motion.div
                               initial={{ scale: 0 }}
                               animate={{ scale: 1 }}
                               transition={{ type: "spring", stiffness: 300, damping: 20 }}
                             >
                               <Check className={`w-5 h-5 sm:w-6 sm:h-6 drop-shadow-md ${useDarkCheckmark ? 'text-gray-900' : 'text-white'}`} strokeWidth={3} />
                             </motion.div>
                           )}

                           {/* Hover Tooltip Label */}
                           <div className="absolute -top-12 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 bg-deep-blue text-white text-xs font-bold py-1.5 px-3 rounded shadow-xl whitespace-nowrap z-50 transform origin-bottom translate-y-2 group-hover:translate-y-0 hidden md:block border border-bright-cyan/30">
                             {color.id} - {color.name}
                             <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-deep-blue rotate-45 border-r border-b border-bright-cyan/30"></div>
                           </div>
                         </button>
                       );
                     })}
                   </div>
                 </div>
               ))}
               
               <div className="mt-12 pt-6 border-t border-gray-100">
                 <p className="text-center text-xs sm:text-sm text-gray-500 font-medium italic mb-2">
                   * The colors shown may vary from actual material due to monitor limitations.
                 </p>
                 <p className="text-center text-xs sm:text-sm text-gray-500 font-medium">
                   Request a physical color chip during your free estimate for an exact match.
                 </p>
               </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
