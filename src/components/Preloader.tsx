import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data/salonData';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('d3_preloaded');
    const delay = hasLoaded ? 350 : 1000;

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('d3_preloaded', 'true');
      if (onComplete) onComplete();
    }, delay);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0C0C0E] pointer-events-none select-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Prominent Official Logo reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#C5A059] p-1.5 bg-white flex items-center justify-center shadow-2xl shadow-black/80 overflow-hidden">
                <img
                  src={BUSINESS_INFO.logo}
                  alt="D3 Unisex Salon Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.55 }}
              className="text-center"
            >
              <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.2em] uppercase text-[#F3EFE6] font-medium">
                D3 Unisex Salon
              </h1>
              <p className="text-xs tracking-[0.25em] text-[#C5A059] font-light mt-1">
                ডি৩ ইউনিচেক্স চেলুন · Dibrugarh
              </p>
            </motion.div>

            {/* Subtle progress hairline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ delay: 0.25, duration: 0.65, ease: 'easeInOut' }}
              className="h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mt-6"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
