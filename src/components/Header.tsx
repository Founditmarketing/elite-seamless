import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Facebook, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { 
    name: 'Products & Services', 
    href: '/#services',
    subItems: [
      { name: '6" Seamless Gutters', href: '/services/6-inch' },
      { name: '7" Seamless Gutters', href: '/services/7-inch' },
      { name: 'Gutter Guards', href: '/services/gutter-guards' },
      { name: 'Round Downspouts', href: '/services/round-downspouts' },
      { name: 'Square Downspouts', href: '/services/square-downspouts' },
    ]
  },
  { name: 'About Us', href: '/about' },
  { name: 'Color Chart', href: '/colors' },
  { name: 'Gallery', href: '/projects' },
  { name: 'Contact Us', href: '/contact' }
];

interface HeaderProps {
  isRevealed?: boolean;
}

export default function Header({ isRevealed = true }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isDarkHeader = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 flex flex-col transition-opacity duration-1000 ${
      isRevealed ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Top Bar */}
      <div 
        className={`bg-deep-blue px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out overflow-hidden ${
          isScrolled ? 'max-h-0 py-0 opacity-0 border-none' : 'max-h-12 py-2 opacity-100 border-b border-white/20'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center text-sm h-full relative">
          
          {/* Desktop Left: Contact Info */}
          <div className="hidden lg:flex items-center space-x-6 text-gray-300 text-xs font-semibold tracking-widest uppercase z-10">
            <a href="tel:3187094447" className="flex items-center gap-2 hover:text-bright-cyan transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>(318) 709-4447</span>
            </a>
            <a href="/contact" className="hover:text-bright-cyan transition-colors z-10">
              Get A Quote
            </a>
          </div>

          {/* Center/Mobile-Left: Message */}
          <div className="flex items-center text-gray-300 font-medium tracking-wide text-xs sm:text-sm lg:absolute lg:left-1/2 lg:-translate-x-1/2 whitespace-nowrap z-0">
            <span className="hidden sm:inline">Louisiana's Premier Seamless Gutter Protection & Installation Provider</span>
            <span className="sm:hidden">Louisiana's Premier Seamless Gutter Provider</span>
          </div>

          {/* Right: Social */}
          <div className="flex items-center z-10">
            <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-bright-cyan transition-colors">
              <span className="hidden sm:inline font-semibold text-xs uppercase tracking-widest text-gray-300">Follow Us</span>
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`w-full transition-all duration-300 ease-in-out shadow-none ${
        isDarkHeader ? 'bg-transparent' : 'bg-transparent'
      } ${
        isScrolled && !isMobileMenuOpen && !isDarkHeader ? 'md:bg-white md:border-b md:border-gray-200' : ''
      } ${
        isScrolled && !isMobileMenuOpen && isDarkHeader ? 'md:bg-deep-blue/95 md:border-b md:border-white/30 md:backdrop-blur-md' : ''
      }`}>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
          <div className={`flex justify-center items-center transition-all duration-300 ${
            isScrolled ? 'py-3' : 'py-2 md:py-5'
          }`}>
            {/* Desktop Nav Links */}
            <nav className={`hidden md:flex items-center divide-x ${isDarkHeader ? 'divide-white/30' : 'divide-gray-200'} py-2`}>
              {NAV_LINKS.map((item) => (
                <div key={item.name} className="relative group px-6 lg:px-12 first:pl-0 last:pr-0 inline-block">
                  <a
                    href={item.href}
                    className={`hover:text-bright-cyan font-oswald font-semibold transition-colors uppercase text-sm md:text-base tracking-widest whitespace-nowrap flex items-center gap-1 ${isDarkHeader ? 'text-white' : 'text-gray-700'}`}
                  >
                    {item.name}
                    {item.subItems && (
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    )}
                  </a>
                  
                  {item.subItems && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[220px]">
                      <div className="bg-deep-blue border-t-4 border-bright-cyan shadow-xl overflow-hidden shadow-2xl flex flex-col">
                        {item.subItems.map(sub => (
                          <a 
                            key={sub.name}
                            href={sub.href}
                            className="px-6 py-4 text-white text-sm font-oswald tracking-widest uppercase hover:bg-bright-cyan hover:text-white transition-colors border-b border-white/10 last:border-0 whitespace-nowrap"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Header */}
            <div className="md:hidden flex justify-between items-center w-full">
              
              {/* Stylized Phone Number (Disappears on Scroll) */}
              <div className={`transition-all duration-300 ${isScrolled ? 'opacity-0 pointer-events-none -translate-x-4' : 'opacity-100 translate-x-0'}`}>
                <a 
                  href="tel:3187094447" 
                  className={`font-oswald font-bold text-[1.7rem] tracking-tight flex items-center gap-1 ${isDarkHeader ? 'text-white' : 'text-deep-blue'}`}
                >
                  <span className="text-transparent" style={{ WebkitTextStroke: isDarkHeader ? '1px white' : '1px #041E42' }}>(318)</span> 
                  <span className={`${isDarkHeader ? 'text-white' : 'text-deep-blue'}`}>709-4447</span>
                </a>
              </div>

              {/* Toggle Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`flex items-center justify-center p-2 mt-2 rounded-none focus:outline-none transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'bg-transparent text-white shadow-none border-2 border-transparent scale-95 hover:text-red-400' 
                    : 'bg-bright-cyan text-white hover:bg-deep-blue hover:text-white shadow-none hover:scale-105 border-4 border-white ring-2 ring-deep-blue'
                }`}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" strokeWidth={2.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" strokeWidth={2.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-deep-blue/95 backdrop-blur-md md:hidden flex flex-col pt-20 pb-6 px-6"
          >
            {/* Decorative Top Line */}
            <div className="w-full h-[1px] bg-bright-cyan/30 absolute top-20 left-0"></div>

            <nav className="flex-1 flex flex-col justify-center overflow-y-auto mt-2">
              {NAV_LINKS.map((item, i) => (
                <div key={item.name} className="border-b border-bright-cyan/20 last:border-0">
                  {item.subItems ? (
                     <div className="py-2.5 sm:py-4 font-oswald flex flex-col group">
                        <div className="flex items-center justify-between text-white uppercase tracking-widest w-full text-left focus:outline-none">
                           <a href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl sm:text-2xl hover:text-bright-cyan transition-colors">{item.name}</a>
                        </div>
                        <div className="flex flex-col mt-3 border-l-2 border-bright-cyan/50 pl-4 space-y-3">
                           {item.subItems.map(subItem => (
                              <a 
                                key={subItem.name} 
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white/70 hover:text-bright-cyan uppercase tracking-widest text-sm sm:text-base flex items-center justify-between group/sub"
                              >
                                 <span>{subItem.name}</span>
                                 <span className="text-bright-cyan/0 group-hover/sub:text-bright-cyan transition-colors">→</span>
                              </a>
                           ))}
                        </div>
                     </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2.5 sm:py-4 font-oswald text-xl sm:text-2xl text-white hover:text-bright-cyan uppercase tracking-widest transition-colors flex items-center justify-between group"
                      >
                        <span>{item.name}</span>
                        <span className="text-bright-cyan/0 group-hover:text-bright-cyan transition-colors">→</span>
                      </a>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-auto border-t border-bright-cyan/30 pt-6"
            >
              <a 
                href="tel:3187094447"
                className="flex items-center justify-center gap-3 w-full bg-bright-cyan hover:bg-white text-white hover:text-deep-blue font-bold py-3 sm:py-4 transition-colors uppercase tracking-widest rounded-none"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Direct</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
