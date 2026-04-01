import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ColorStatic() {
  return (
    <section id="colors" className="py-24 relative bg-gray-50 overflow-hidden border-t-4 border-gray-200">
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
              src="/Galvalume Plus Steel.png" 
              alt="Elite Premium Metal Options" 
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover shadow-2xl relative z-10"
            />
            
            {/* Floating Stat Card */}
            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-bright-cyan p-6 sm:p-8 shadow-2xl z-20 max-w-[200px]">
              <p className="font-oswald font-bold text-4xl sm:text-6xl text-white leading-none">30+</p>
              <p className="text-white font-bold font-oswald tracking-widest uppercase text-sm mt-2">Factory Tones</p>
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
              Matching Your <br/>
              <span className="text-bright-cyan border-b-4 border-gray-200 pb-2 inline-block mt-2">Home Exterior</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                A gutter system shouldn't just protect your foundation—it should elevate your home's curb appeal. We offer over 30 premium factory-baked enamel coatings.
              </p>
              <p>
                Whether you're looking for standard white, a deep bronze to match wooden fascias, or high-end aesthetic metals like Rustic Copper and Galvalume Steel, Elite has the inventory to manufacture the exact seamless system your property requires.
              </p>
              
              <ul className="pt-4 space-y-4">
                {[
                  "Baked-On Factory Enamel Coating",
                  "Resistant to Hard Chipping & Peeling",
                  "Custom Aesthetic Color-Matching",
                  "Premium Metallic Options (Copper, Steel)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-gray-200 mt-8">
                <Link to="/colors" className="inline-block bg-bright-cyan text-white hover:bg-deep-blue font-bold py-4 px-10 rounded-none transition-colors uppercase tracking-widest text-sm">
                  View Full Interactive Color Chart &rarr;
                </Link>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
