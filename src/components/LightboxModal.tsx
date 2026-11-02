import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '../types';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photos,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Top bar controls */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between text-[#E0DDD5]">
          <div className="text-xs uppercase tracking-widest font-mono text-[#C5A059] flex items-center gap-2">
            <span>{currentIndex + 1} / {photos.length}</span>
            <span>·</span>
            <span>{photo.categoryLabel}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#1A1A22] border border-[#2E2E3C] text-white hover:text-[#C5A059] transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('prev');
          }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#16161E]/80 border border-[#2D2D3C] text-white hover:text-[#C5A059] hover:bg-[#20202B] transition-all cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('next');
          }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#16161E]/80 border border-[#2D2D3C] text-white hover:text-[#C5A059] hover:bg-[#20202B] transition-all cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Central Image Content */}
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl max-h-[85vh] flex flex-col items-center z-10 select-none"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative max-h-[74vh] overflow-hidden rounded-lg shadow-2xl border border-[#262633] bg-black">
            <img
              src={photo.image}
              alt={photo.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain max-h-[74vh]"
            />
          </div>

          <div className="mt-4 text-center max-w-xl">
            <h3 className="font-serif text-lg sm:text-xl text-[#F3EFE6] font-medium tracking-wide">
              {photo.title}
            </h3>
            <p className="text-xs text-[#A8A49C] mt-1 font-light leading-relaxed">
              {photo.description}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
