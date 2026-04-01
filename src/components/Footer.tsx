import { MapPin, Phone, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start lg:items-center xl:items-start">
            <img src="/eliteseamlesslogo.png" alt="Elite Seamless Gutter" className="w-48 sm:w-56 h-auto object-contain mb-6 drop-shadow-sm" />
            <p className="text-gray-500 text-sm font-open-sans">
              Premium, high-end gutter service business based in Louisiana. Projecting extreme reliability, architectural precision, and superior technology.
            </p>
          </div>

          {/* Location */}
          <div className="col-span-1 flex flex-col items-start">
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 text-bright-cyan mr-3" />
              <h4 className="font-oswald font-bold text-lg text-deep-blue uppercase tracking-wider">Mailing Address</h4>
            </div>
            <p className="text-gray-500 text-sm font-open-sans pl-8">
              P.O. Box 3401<br />
              Pineville, LA 71361
            </p>
          </div>

          {/* Contact */}
          <div className="col-span-1 flex flex-col items-start">
            <div className="flex items-center mb-4">
              <Phone className="w-5 h-5 text-bright-cyan mr-3" />
              <h4 className="font-oswald font-bold text-lg text-deep-blue uppercase tracking-wider">Contact</h4>
            </div>
            <div className="text-gray-500 text-sm font-open-sans pl-8 flex flex-col gap-2 w-full">
              <div>
                <a href="tel:3187094447" className="hover:text-bright-cyan transition-colors block font-semibold text-deep-blue uppercase tracking-wider">
                  (318) 709-4447
                </a>
                <span className="text-xs text-gray-400">Primary (Mon-Sun Anytime)</span>
              </div>
              <div>
                <a href="tel:3184428509" className="hover:text-bright-cyan transition-colors block font-semibold text-deep-blue mt-2 uppercase tracking-wider">
                  (318) 442-8509
                </a>
                <span className="text-xs text-gray-400">Office (Mon-Fri 8:00 AM - 5:00 PM)</span>
              </div>
              <a href="mailto:Jmorgan@eliteseamlessgutterllc.com" className="hover:text-bright-cyan transition-colors break-words mt-2 pt-2 border-t border-gray-200 block text-xs truncate max-w-[200px]" title="Jmorgan@eliteseamlessgutterllc.com">
                Jmorgan@eliteseamlessgutterllc.com
              </a>
            </div>
          </div>

          {/* Financing */}
          <div className="col-span-1 flex flex-col items-start">
            <div className="flex items-center mb-4">
              <CreditCard className="w-5 h-5 text-bright-cyan mr-3" />
              <h4 className="font-oswald font-bold text-lg text-deep-blue uppercase tracking-wider">Financing</h4>
            </div>
            <p className="text-bright-cyan text-sm font-oswald font-bold uppercase tracking-widest pl-8 italic">
              Call For Financing Options!
            </p>
            <p className="text-gray-500 text-xs font-open-sans pl-8 mt-2 leading-relaxed">
              We offer flexible payment plans to make your seamless gutter installation affordable. Contact us today.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs font-open-sans mb-4 md:mb-0">
            &copy; 2026 ELITE SEAMLESS GUTTER. ALL RIGHTS RESERVED. | <a href="#" className="hover:text-bright-cyan transition-colors">PRIVACY POLICY</a> | <a href="#" className="hover:text-bright-cyan transition-colors">TERMS OF SERVICE</a>.
          </p>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-bright-cyan" />
            <span className="text-gray-400 text-xs font-open-sans">(318) 709-4447</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
