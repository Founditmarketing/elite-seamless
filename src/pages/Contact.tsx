import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useEffect, useState } from 'react';

// Specialized lightweight rain for the contact panel
const ContactRain = () => {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 0.8 + Math.random() * 0.4,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="drop"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            ['--drop-duration' as any]: drop.duration,
          }}
        />
      ))}
    </div>
  );
};

export default function Contact({ setIsRevealed }: { setIsRevealed?: (val: boolean) => void }) {
  // Always scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    if (setIsRevealed) setIsRevealed(true);
  }, [setIsRevealed]);

  return (
    <main className="min-h-screen pt-24 pb-0 flex flex-col bg-deep-blue relative overflow-hidden">
      {/* Spread the rain across the entire contact page now that it's all blue */}
      <ContactRain />

      <div className="flex-grow flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto xl:py-12 xl:min-h-[800px] relative z-10">
        
        {/* Left Atmosphere Column - 40% Width on Desktop */}
        <section className="relative w-full lg:w-[45%] text-white p-6 sm:p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
          
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-oswald font-bold text-5xl lg:text-7xl tracking-tight uppercase leading-none mb-6 text-white drop-shadow-md">
                Let's <span className="text-bright-cyan">Talk</span>
              </h1>
              <p className="font-open-sans text-gray-300 text-lg mb-12 max-w-sm">
                Whether you need a full seamless system installation, gutter guards, or a custom repair, the Elite team is ready.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="bg-bright-cyan/10 p-4 border border-bright-cyan group-hover:bg-bright-cyan transition-colors duration-300 shadow-[0_0_15px_rgba(2,175,238,0.2)]">
                    <Phone className="w-6 h-6 text-bright-cyan group-hover:text-deep-blue" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-cyan-200/70 font-bold tracking-widest uppercase text-xs mb-1">Call Us Direct</h3>
                    <p className="font-oswald text-white text-2xl tracking-wider">(318) 709-4447</p>
                    <p className="text-gray-400 text-sm mt-1">Available Anytime Mon-Sun</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="bg-bright-cyan/10 p-4 border border-bright-cyan group-hover:bg-bright-cyan transition-colors duration-300 shadow-[0_0_15px_rgba(2,175,238,0.2)]">
                    <Mail className="w-6 h-6 text-bright-cyan group-hover:text-deep-blue" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-cyan-200/70 font-bold tracking-widest uppercase text-xs mb-1">Email</h3>
                    <p className="font-oswald text-white text-lg tracking-wider break-all">Jmorgan@eliteseamlessgutterllc.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="bg-bright-cyan/10 p-4 border border-bright-cyan group-hover:bg-bright-cyan transition-colors duration-300 shadow-[0_0_15px_rgba(2,175,238,0.2)]">
                    <MapPin className="w-6 h-6 text-bright-cyan group-hover:text-deep-blue" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-cyan-200/70 font-bold tracking-widest uppercase text-xs mb-1">Mailing Address</h3>
                    <p className="font-oswald text-white text-lg tracking-wider">P.O. Box 3401</p>
                    <p className="text-gray-400 text-sm mt-1">Pineville, LA 71361</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Right Form Column - 55% Width on Desktop */}
        <section className="w-full lg:w-[55%] p-6 sm:p-12 lg:p-24 lg:flex lg:flex-col lg:justify-center">
          <div className="w-full max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="font-oswald font-bold text-3xl sm:text-4xl tracking-tight uppercase mb-8 border-b-2 border-bright-cyan pb-4 inline-block text-white">
                Request A Quote
              </h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full bg-deep-blue/50 border border-white/20 text-white placeholder:text-cyan-100/50 focus:border-bright-cyan focus:ring-1 focus:ring-bright-cyan focus:outline-none focus:bg-deep-blue p-4 transition-all tracking-wide"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full bg-deep-blue/50 border border-white/20 text-white placeholder:text-cyan-100/50 focus:border-bright-cyan focus:ring-1 focus:ring-bright-cyan focus:outline-none focus:bg-deep-blue p-4 transition-all tracking-wide"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="tel" 
                      id="contactPhone" 
                      className="w-full bg-deep-blue/50 border border-white/20 text-white placeholder:text-cyan-100/50 focus:border-bright-cyan focus:ring-1 focus:ring-bright-cyan focus:outline-none focus:bg-deep-blue p-4 transition-all tracking-wide"
                      placeholder="Phone: (318) 555-0123"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      id="contactEmail" 
                      className="w-full bg-deep-blue/50 border border-white/20 text-white placeholder:text-cyan-100/50 focus:border-bright-cyan focus:ring-1 focus:ring-bright-cyan focus:outline-none focus:bg-deep-blue p-4 transition-all tracking-wide"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <select 
                    id="serviceSelect"
                    defaultValue=""
                    className="w-full bg-deep-blue/50 border border-white/20 text-white focus:border-bright-cyan focus:ring-1 focus:ring-bright-cyan focus:outline-none focus:bg-deep-blue p-4 transition-all cursor-pointer tracking-wide appearance-none"
                    required
                  >
                    <option value="" disabled className="text-gray-400">Select a specific service</option>
                    <option value="quote" className="text-deep-blue bg-white">Free Installation Quote</option>
                    <option value="6-inch" className="text-deep-blue bg-white">6" K Style Seamless Gutters</option>
                    <option value="7-inch" className="text-deep-blue bg-white">7" K Style Seamless Gutters</option>
                    <option value="guards" className="text-deep-blue bg-white">Gutter Guards / Protection</option>
                    <option value="repairs" className="text-deep-blue bg-white">Custom Work & Repairs</option>
                  </select>
                </div>

                <div>
                  <textarea 
                    id="projectDetails" 
                    rows={4}
                    className="w-full bg-deep-blue/50 border border-white/20 text-white placeholder:text-cyan-100/50 focus:border-bright-cyan focus:ring-1 focus:ring-bright-cyan focus:outline-none focus:bg-deep-blue p-4 transition-all resize-none tracking-wide"
                    placeholder="Tell us a little bit about your home and what you are looking for..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-bright-cyan hover:bg-white text-white hover:text-deep-blue border-2 border-bright-cyan hover:border-white font-bold py-5 px-8 flex items-center justify-center gap-3 transition-colors uppercase tracking-widest text-lg group shadow-[0_0_20px_rgba(2,175,238,0.4)]"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
