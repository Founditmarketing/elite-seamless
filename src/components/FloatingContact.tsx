import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Phone, X, Send } from 'lucide-react';

interface FloatingContactProps {
  isRevealed?: boolean;
}

export default function FloatingContact({ isRevealed = true }: FloatingContactProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close the popup if user hits Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-[100] flex flex-col items-end transition-all duration-1000 transform ${
      isRevealed ? 'opacity-100 translate-y-0 delay-[600ms]' : 'opacity-0 translate-y-12 pointer-events-none'
    }`}>
      
      {/* Popover Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-6 w-[320px] sm:w-[350px] bg-white border-[6px] border-deep-blue shadow-[0_0_0_1px_rgba(2,175,238,0.5)] rounded-none overflow-hidden origin-bottom-right"
          >
            {/* Header / Dismiss */}
            <div className="bg-gray-100 flex justify-between items-center px-4 py-3 border-b border-gray-200">
              <span className="font-oswald uppercase text-xs font-bold tracking-widest text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-bright-cyan animate-pulse"></span>
                Rapid Response Team
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Top Half: Call Now */}
            <a 
              href="tel:3187094447"
              className="block bg-deep-blue hover:bg-bright-cyan transition-colors duration-300 p-8 text-center group border-b-4 border-bright-cyan"
            >
              <Phone className="w-10 h-10 text-bright-cyan group-hover:text-white mx-auto mb-4 transition-colors duration-300" strokeWidth={1.5} />
              <div className="font-oswald text-white uppercase text-3xl font-bold tracking-widest mb-1">
                Call Now
              </div>
              <div className="text-gray-300 group-hover:text-gray-100 font-semibold tracking-wider text-base">
                (318) 709-4447
              </div>
            </a>

            {/* Bottom Half: Quick Quote */}
            <div className="p-6 bg-white relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                <span className="font-oswald text-xs font-bold uppercase tracking-widest text-gray-400">
                  OR
                </span>
              </div>
              
              <h4 className="font-oswald font-bold text-gray-800 text-xl uppercase tracking-wide mb-5 text-center mt-2">
                Get A Quick Quote
              </h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-gray-50 border-2 border-transparent border-b-gray-200 p-3 rounded-none focus:outline-none focus:bg-white focus:border-b-bright-cyan font-open-sans text-sm transition-colors"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-gray-50 border-2 border-transparent border-b-gray-200 p-3 rounded-none focus:outline-none focus:bg-white focus:border-b-bright-cyan font-open-sans text-sm transition-colors"
                  required
                />
                <select 
                  defaultValue=""
                  className="w-full bg-gray-50 border-2 border-transparent border-b-gray-200 p-3 rounded-none focus:outline-none focus:bg-white focus:border-b-bright-cyan font-open-sans text-sm transition-colors text-gray-600"
                  required
                >
                  <option value="" disabled>Select Service Needed</option>
                  <option value="6-inch-k-style">6" K Style Seamless Gutters</option>
                  <option value="7-inch-k-style">7" K Style Seamless Gutters</option>
                  <option value="gutter-guards">Gutter Guards / Filtering</option>
                  <option value="round-downspouts">Round Downspouts</option>
                  <option value="square-downspouts">Square Downspouts</option>
                  <option value="commercial-custom">Commercial & Custom</option>
                </select>
                <button 
                  type="submit"
                  className="w-full bg-transparent border-2 border-bright-cyan text-bright-cyan hover:bg-bright-cyan hover:text-white font-bold py-4 uppercase tracking-widest text-sm transition-colors rounded-none flex items-center justify-center gap-2 mt-4"
                >
                  <span>Submit Form</span>
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-300 rounded-none focus:outline-none focus:ring-4 focus:ring-bright-cyan/30 ${
          isOpen 
            ? 'bg-deep-blue text-white shadow-none scale-95 border-2 border-deep-blue hover:text-red-400' 
            : 'bg-bright-cyan text-white hover:bg-deep-blue hover:text-white shadow-none hover:scale-105 border-4 border-white ring-2 ring-deep-blue'
        }`}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

    </div>
  );
}
