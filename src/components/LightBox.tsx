import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface LightBoxProps {
  isOpen: boolean;
  src: string | null;
  onClose: () => void;
}

export default function LightBox({ isOpen, src, onClose }: LightBoxProps) {
  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && src && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-blue/95 backdrop-blur-md p-4 sm:p-8"
          onClick={onClose}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-bright-cyan transition-colors z-[110]"
            onClick={onClose}
            title="Close image"
          >
            <X className="w-10 h-10" />
          </button>
          
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300, delay: 0.1 }}
            src={src} 
            alt="Expanded visual" 
            className="w-full max-w-6xl max-h-[90vh] object-contain drop-shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
