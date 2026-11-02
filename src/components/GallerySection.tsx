import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2, Camera, ShieldCheck } from 'lucide-react';
import { SALON_GALLERY } from '../data/salonData';
import { GalleryPhoto } from '../types';
import { LightboxModal } from './LightboxModal';
import { SalonImage } from './SalonImage';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'styling', label: 'Client Haircuts & Styling' },
    { id: 'interior', label: 'Salon Interior' },
    { id: 'storefront', label: 'Exterior Storefront' }
  ];

  const filteredPhotos = activeCategory === 'all'
    ? SALON_GALLERY
    : SALON_GALLERY.filter((p) => {
        if (activeCategory === 'interior') {
          return p.category === 'interior';
        }
        if (activeCategory === 'styling') {
          return p.category === 'styling' || p.category === 'color';
        }
        return p.category === activeCategory;
      });

  const handleNavigateLightbox = (direction: 'next' | 'prev') => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[prevIndex]);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0C0C0E] border-t border-[#1C1C24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
              <span>Authentic Salon Photography</span>
              <span aria-hidden="true" className="w-8 h-[1px] bg-[#C5A059]/50" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F3EFE6] font-normal tracking-tight leading-tight">
              Real Work. Real Salon.
            </h2>
            <p className="text-xs sm:text-sm text-[#A09C94] font-light mt-2 max-w-xl">
              100% genuine photographs captured at D3 Unisex Salon on P N Road near Khemani Mill, Dibrugarh.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#14141B] border border-[#242430] rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#C5A059] text-[#0C0C0E] font-semibold'
                    : 'text-[#9E9A92] hover:text-[#F3EFE6] hover:bg-[#1C1C26]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry/Grid of Real Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => {
            const isStorefront = photo.category === 'storefront';
            const isTaller = photo.aspect === 'portrait';

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedPhoto(photo)}
                className={`group relative rounded-xl overflow-hidden border border-[#22222E] bg-[#14141B] cursor-pointer ${
                  isTaller ? 'aspect-[3/4]' : isStorefront ? 'aspect-[16/11]' : 'aspect-[4/3]'
                }`}
              >
                <SalonImage
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-[0.92] group-hover:brightness-100"
                  fallbackTitle={photo.title}
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-[#0C0C0E]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[10px] text-[#C5A059] border border-[#C5A059]/30">
                    <ShieldCheck className="w-3 h-3 text-[#C5A059]" />
                    <span>Real Salon Photo</span>
                  </div>
                </div>

                {/* Hover Caption Card */}
                <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-widest text-[#C5A059] block mb-1">
                      {photo.categoryLabel}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-[#F3EFE6] font-medium leading-snug">
                      {photo.title}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#C5A059] text-[#0C0C0E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0 transform scale-75 group-hover:scale-100 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Real Location & Media Attribution */}
        <div className="mt-12 text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-[#9E9A92] font-light">
          <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>
            Captured on site at D3 Unisex Salon, FWF4+52, P N Road, Near Khemani Mill, Dibrugarh, Assam.
          </span>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        photos={filteredPhotos}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={handleNavigateLightbox}
      />
    </section>
  );
};
