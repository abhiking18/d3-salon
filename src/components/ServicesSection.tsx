import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, ArrowRight, Sparkles, Check, Edit3, MessageCircle, ShieldCheck } from 'lucide-react';
import { SALON_SERVICES, BUSINESS_INFO } from '../data/salonData';
import { ServiceItem } from '../types';
import { SalonImage } from './SalonImage';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [services, setServices] = useState<ServiceItem[]>(SALON_SERVICES);
  const [isEditingPrice, setIsEditingPrice] = useState<string | null>(null);
  const [customPriceInput, setCustomPriceInput] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'Hair', label: 'Haircuts & Blow Dry' },
    { id: 'Chemical & Color', label: 'Color & Smoothening' }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  const handleSaveCustomPrice = (serviceId: string) => {
    if (customPriceInput.trim()) {
      setServices(prev =>
        prev.map(s => s.id === serviceId ? { ...s, priceNote: customPriceInput.trim() } : s)
      );
    }
    setIsEditingPrice(null);
    setCustomPriceInput('');
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0E0E12] border-t border-[#1C1C24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
            <span>Our Service Portfolio</span>
            <span aria-hidden="true" className="w-8 h-[1px] bg-[#C5A059]/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F3EFE6] font-normal tracking-tight mb-4 leading-tight">
            Tailored Haircuts, Color & Texture.
          </h2>
          <p className="text-sm sm:text-base text-[#A5A199] font-light leading-relaxed">
            Every service at D3 Unisex Salon is tailored to your unique hair texture, lifestyle, and aesthetic.
            Explore our curated menu with real photos from our salon in Dibrugarh.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-8 p-1.5 bg-[#14141B] border border-[#262633] rounded-lg max-w-fit">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wide rounded-md transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#C5A059] text-[#0C0C0E] font-semibold shadow-sm'
                    : 'text-[#A09C94] hover:text-[#F3EFE6] hover:bg-[#1C1C26]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Layout of Services with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const isFeatured = index === 0 || index === 3;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`group flex flex-col justify-between bg-[#131318] border transition-all duration-300 rounded-xl overflow-hidden ${
                  isFeatured
                    ? 'border-[#C5A059]/40 shadow-lg shadow-[#C5A059]/5 hover:border-[#C5A059]/70'
                    : 'border-[#22222E] hover:border-[#38384A]'
                }`}
              >
                {/* Real Salon Image Showcase with Hover Zoom */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#181822]">
                  <SalonImage
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.92] group-hover:brightness-100"
                    fallbackTitle={service.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131318] via-transparent to-transparent opacity-90" />

                  {/* Clean unboxed duration indicator */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0C0C0E]/85 backdrop-blur-md text-[11px] text-[#D8D4CC] border border-[#2A2A38]">
                    <Clock className="w-3 h-3 text-[#C5A059]" />
                    <span>{service.duration}</span>
                  </div>

                  {/* Authentic Real Photo Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[10px] text-[#C5A059] border border-[#C5A059]/30">
                    <ShieldCheck className="w-3 h-3 text-[#C5A059]" />
                    <span>D3 Real Result</span>
                  </div>

                  {/* Category text kicker */}
                  <div className="absolute bottom-3 left-4 text-[11px] font-medium uppercase tracking-widest text-[#C5A059]">
                    {service.category}
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif text-[#F3EFE6] font-medium tracking-tight mb-2 group-hover:text-[#C5A059] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A09C94] leading-relaxed font-light mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Feature bullets */}
                    <ul className="space-y-1.5 mb-6 pt-3 border-t border-[#1C1C26]">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="text-xs text-[#B8B4AA] flex items-center gap-2">
                          <Check className="w-3 h-3 text-[#C5A059] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price Tag & Booking Action */}
                  <div className="pt-4 border-t border-[#1F1F2B] mt-auto">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#8E8A82]">Pricing:</span>
                        {isEditingPrice === service.id ? (
                          <div className="flex items-center gap-1.5">
                            <input
                              type="text"
                              value={customPriceInput}
                              onChange={(e) => setCustomPriceInput(e.target.value)}
                              placeholder="e.g. ₹499 Onwards"
                              className="px-2 py-1 text-xs bg-[#1C1C26] border border-[#C5A059] rounded text-white focus:outline-none w-28"
                            />
                            <button
                              onClick={() => handleSaveCustomPrice(service.id)}
                              className="px-2 py-1 text-[11px] bg-[#C5A059] text-black font-semibold rounded cursor-pointer"
                            >
                              Save
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-xs font-serif text-[#E0DDD5]">
                            <span>{service.priceNote}</span>
                            <button
                              onClick={() => {
                                setIsEditingPrice(service.id);
                                setCustomPriceInput(service.priceNote);
                              }}
                              title="Edit price note (for salon owner)"
                              className="p-1 text-[#666] hover:text-[#C5A059] transition-colors cursor-pointer"
                            >
                              <Edit3 className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectServiceForBooking(service.id)}
                        className="w-full py-2.5 px-3 text-xs font-semibold tracking-wider uppercase text-[#0C0C0E] bg-[#C5A059] hover:bg-[#D4AF37] rounded-md transition-all duration-200 text-center flex items-center justify-center gap-1.5 cursor-pointer font-sans"
                      >
                        <span>Book Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                          `Hello D3 Unisex Salon, I would like to enquire about your "${service.name}" service.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-2 text-xs font-medium tracking-wide text-[#E0DDD5] hover:text-white bg-[#1A1A24] hover:bg-[#222230] border border-[#2B2B3B] rounded-md transition-all duration-200 text-center flex items-center justify-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Consultation Callout Footer */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#14141B] via-[#161622] to-[#14141B] border border-[#242433] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#F3EFE6] font-medium">Looking for customized styling or wedding packages?</h4>
              <p className="text-xs sm:text-sm text-[#A09C94] mt-0.5">
                Speak directly with our senior stylists for personal hair styling, groom, or festive packages.
              </p>
            </div>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#F3EFE6] bg-[#222230] hover:bg-[#2C2C3D] border border-[#3A3A4E] rounded-md transition-all whitespace-nowrap"
          >
            Call {BUSINESS_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
};
