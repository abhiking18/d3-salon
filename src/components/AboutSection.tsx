import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, MessageSquare, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';
import { SalonImage } from './SalonImage';

interface AboutSectionProps {
  onOpenBookingModal: (serviceId?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0C0C0E] border-t border-[#1C1C24] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real Storefront & Interior Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Real D3 Unisex Salon Storefront */}
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-xl overflow-hidden border border-[#262633] shadow-2xl">
                <SalonImage
                  src={BUSINESS_INFO.storefrontImage}
                  alt="D3 Unisex Salon storefront and signboard in Dibrugarh, Assam"
                  className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
                  fallbackTitle="D3 Unisex Salon Storefront"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E]/85 via-transparent to-transparent" />
                
                {/* Storefront caption badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <div>
                    <span className="font-serif text-sm font-medium block">D3 Unisex Salon</span>
                    <span className="text-[11px] text-[#C5A059] font-light">ডি৩ ইউনিচেক্স চেলুন · P N Road, Dibrugarh</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] text-[#DDD] border border-white/10">
                    Real Storefront
                  </span>
                </div>
              </div>

              {/* Offset Accent Card: Real Salon Interior Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-[#14141B] border border-[#C5A059]/30 rounded-lg p-3 shadow-2xl max-w-[220px] hidden sm:block"
              >
                <div className="w-full h-24 rounded overflow-hidden mb-2">
                  <img
                    src={BUSINESS_INFO.interiorPanoramicImage}
                    alt="Interior styling stations"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-[#C5A059] mb-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase tracking-wider font-semibold">Interior Stations</span>
                </div>
                <p className="font-serif text-xs text-[#F3EFE6] leading-snug">
                  Gold hydraulic chairs & illuminated arch vanities.
                </p>
                <div className="mt-1.5 text-[11px] text-[#A5A199] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#C5A059]" />
                  <span>Near Khemani Mill</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Authentic Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
              <span>About D3 Unisex Salon</span>
              <span aria-hidden="true" className="w-8 h-[1px] bg-[#C5A059]/50" />
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F3EFE6] font-normal tracking-tight mb-6 leading-tight">
              Where Beauty Meets Confidence.
            </h2>

            {/* Introductory Body Copy with Real Facts */}
            <div className="space-y-4 text-sm sm:text-base text-[#BFBBB2] font-light leading-relaxed mb-8">
              <p>
                Conveniently situated on <strong className="text-white font-medium">P N Road near Khemani Mill</strong> in Dibrugarh, <strong className="font-medium text-[#F3EFE6]">D3 Unisex Salon</strong> offers residents a premier hair and styling salon thoughtfully designed for both men and women.
              </p>
              <p>
                From custom arched illuminated styling stations and ergonomic golden hydraulic chairs to spotless workstations and modern hospitality, every detail of our salon provides a welcoming, comfortable experience.
              </p>
              <p>
                Our experienced stylists provide personalized consultations, precision scissor and fade cuts, professional hair coloring, and transformative smoothening treatments using genuine professional salon products.
              </p>
            </div>

            {/* Highlights Grid with Exact Location Focus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 pt-4 border-t border-[#1F1F2B]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#F3EFE6]">Dedicated Unisex Bays</h4>
                  <p className="text-xs text-[#9E9A92] mt-0.5">Full-spectrum haircuts, coloring, and styling for women & men.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#F3EFE6]">Professional Formulations</h4>
                  <p className="text-xs text-[#9E9A92] mt-0.5">Top-tier salon-grade hair products, bond protectors, and serums.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#F3EFE6]">Personalized Consultation</h4>
                  <p className="text-xs text-[#9E9A92] mt-0.5">Every cut and color is customized to your unique hair profile.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#F3EFE6]">Exact Landmark Location</h4>
                  <p className="text-xs text-[#9E9A92] mt-0.5">FWF4+52, P N Road, Near Khemani Mill, Dibrugarh.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBookingModal()}
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0C0C0E] bg-[#C5A059] hover:bg-[#D4AF37] rounded-md transition-all duration-200 cursor-pointer font-sans"
              >
                Schedule an Appointment
              </button>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#F3EFE6] bg-[#16161F] hover:bg-[#1E1E2A] border border-[#2E2E3E] rounded-md transition-all duration-200"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
