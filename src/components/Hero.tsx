import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, MapPin, ShieldCheck, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';
import { SalonImage } from './SalonImage';

interface HeroProps {
  onOpenBookingModal: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:py-0">
      {/* Real Interior Background of D3 Unisex Salon */}
      <div className="absolute inset-0 z-0">
        <SalonImage
          src={BUSINESS_INFO.interiorImage}
          alt="D3 Unisex Salon interior styling stations in Dibrugarh"
          className="w-full h-full scale-105 filter brightness-[0.25] contrast-[1.15] transition-transform duration-[12s] ease-out hover:scale-100"
          fallbackTitle="D3 Unisex Salon Dibrugarh"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-[#0C0C0E]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0E]/95 via-[#0C0C0E]/65 to-transparent" />
      </div>

      {/* Ambient golden radial glow */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Trust indicator in quiet clean typography with separators */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs tracking-wider uppercase text-[#C8C4BC] mb-6"
          >
            <div className="flex items-center gap-1.5 text-[#C5A059]">
              <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
              <span className="font-semibold text-white">4.5 ★</span>
              <span>Google Rating</span>
            </div>
            <span aria-hidden="true" className="text-[#C5A059]/60">·</span>
            <span className="text-[#E0DDD5]">24 Reviews</span>
            <span aria-hidden="true" className="text-[#C5A059]/60">·</span>
            <span className="text-[#C5A059]">Unisex Salon</span>
            <span aria-hidden="true" className="text-[#C5A059]/60">·</span>
            <span className="text-[#A5A199]">Dibrugarh</span>
          </motion.div>

          {/* Main Cinematic Heading with Staggered Entrance */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-[#F3EFE6] leading-[1.08] tracking-tight mb-6"
            style={{ textWrap: 'balance' }}
          >
            Your Style.{' '}
            <span className="italic font-normal text-[#C5A059]">Your Confidence.</span>{' '}
            Your Signature.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#CDC9C0] font-normal leading-relaxed max-w-2xl mb-10"
          >
            Discover professional hair care, beauty and styling services at D3 Unisex Salon, Dibrugarh.
            Tailored precision cuts, restorative hair treatments, and transformative color crafted for men and women.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14"
          >
            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase text-[#0C0C0E] bg-[#C5A059] rounded-md hover:bg-[#D4AF37] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#C5A059]/20 group cursor-pointer font-sans"
            >
              <span>Book Your Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold tracking-widest uppercase text-[#F3EFE6] bg-[#16161D]/80 hover:bg-[#1F1F28] border border-[#2A2A38] hover:border-[#C5A059]/50 rounded-md transition-all duration-200"
            >
              <span>Explore Services</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-4 text-xs font-medium tracking-wide text-[#C5A059] bg-[#16161D]/50 hover:bg-[#1F1F28] border border-[#C5A059]/30 rounded-md transition-all"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Exact Location</span>
            </a>
          </motion.div>

          {/* Quick Information Bar: Exact Location Focused (No Times) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="pt-6 border-t border-[#262631]/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#A8A49C]"
          >
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span className="truncate">Near Khemani Mill, P N Road</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>100% Real Salon & Results</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#C5A059] font-medium font-serif">ডি৩</span>
              <span className="truncate">Dibrugarh, Assam 786001</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
