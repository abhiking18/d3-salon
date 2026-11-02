import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Navigation, MapPin, Compass, Landmark } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0C0C0E] border-t border-[#1C1C24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
            <span>Find & Visit Us</span>
            <span aria-hidden="true" className="w-8 h-[1px] bg-[#C5A059]/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F3EFE6] font-normal tracking-tight leading-tight mb-4">
            Exact Salon Location in Dibrugarh.
          </h2>
          <p className="text-sm sm:text-base text-[#A8A49C] font-light leading-relaxed">
            Situated directly on P N Road near Khemani Mill. Look for our illuminated red D3 UNISEX SALON (ডি৩ ইউনিচেক্স চেলুন) storefront entrance.
          </p>
        </div>

        {/* 3 Prominent Quick Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {/* Action 1: Call Now */}
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="group p-6 rounded-xl bg-[#13131A] border border-[#232330] hover:border-[#C5A059]/50 hover:bg-[#181822] transition-all duration-200 flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-4 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#9A968E] block mb-1">
                Direct Line
              </span>
              <h3 className="font-serif text-lg text-[#F3EFE6] font-medium mb-1">Call Now</h3>
              <p className="text-xs text-[#C5A059] font-mono">{BUSINESS_INFO.phone}</p>
            </div>
          </a>

          {/* Action 2: WhatsApp Us */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl bg-[#13131A] border border-[#232330] hover:border-[#25D366]/50 hover:bg-[#181822] transition-all duration-200 flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] mb-4 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#9A968E] block mb-1">
                Instant Chat
              </span>
              <h3 className="font-serif text-lg text-[#F3EFE6] font-medium mb-1">WhatsApp Us</h3>
              <p className="text-xs text-[#25D366] font-mono">+91 7905680124</p>
            </div>
          </a>

          {/* Action 3: Get Directions */}
          <a
            href={BUSINESS_INFO.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl bg-[#13131A] border border-[#232330] hover:border-[#4285F4]/50 hover:bg-[#181822] transition-all duration-200 flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-lg bg-[#4285F4]/10 border border-[#4285F4]/30 flex items-center justify-center text-[#4285F4] mb-4 group-hover:scale-105 transition-transform">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#9A968E] block mb-1">
                Google Navigation
              </span>
              <h3 className="font-serif text-lg text-[#F3EFE6] font-medium mb-1">Get Directions</h3>
              <p className="text-xs text-[#8BB4F7]">P N Road, Near Khemani Mill</p>
            </div>
          </a>
        </div>

        {/* Real Storefront Recognition + Exact Google Maps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#121217] border border-[#232330] rounded-2xl overflow-hidden p-6 sm:p-8">
          
          {/* Details & Storefront recognition */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-14 h-14 rounded-full bg-white p-1 border-2 border-[#C5A059] overflow-hidden shrink-0 shadow-md">
                  <img
                    src={BUSINESS_INFO.logo}
                    alt="D3 Unisex Salon Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-serif text-xl font-bold text-[#F3EFE6] block">D3 Unisex Salon</span>
                  <span className="text-xs text-[#C5A059] font-medium">ডি৩ ইউনিচেক্স চেলুন · Dibrugarh</span>
                </div>
              </div>

              {/* Storefront Visual Thumbnail for Easy Recognition */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-[#2A2A3A] mb-5">
                <img
                  src={BUSINESS_INFO.storefrontImage}
                  alt="D3 Unisex Salon Storefront Signboard on P N Road"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-xs text-white font-medium bg-black/70 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                  Storefront Signboard on P N Road
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#BFBBB2]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium mb-0.5">Exact Address:</strong>
                    <span>FWF4+52, P N Road, Near Khemani Mill</span>
                    <span className="block text-[#C5A059]">Dibrugarh, Assam 786001</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Landmark className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium mb-0.5">Prominent Landmark:</strong>
                    <span>Near Khemani Mill on main P N Road</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium mb-0.5">Salon Phone / Inquiries:</strong>
                    <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-[#F3EFE6] hover:text-[#C5A059] font-mono">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1F1F2B]">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold tracking-wider uppercase text-[#0C0C0E] bg-[#C5A059] hover:bg-[#D4AF37] rounded-md transition-all text-center cursor-pointer font-sans"
              >
                <Navigation className="w-4 h-4" />
                <span>Navigate via Google Maps App</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Maps Frame */}
          <div className="lg:col-span-7 h-[380px] sm:h-[450px] rounded-xl overflow-hidden border border-[#2A2A38] relative bg-[#181822]">
            <iframe
              title="D3 Unisex Salon Exact Location Map"
              src={BUSINESS_INFO.mapsEmbedSrc}
              className="w-full h-full border-0 filter invert-[0.92] hue-rotate-[180deg] contrast-[1.1] opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
              allowFullScreen
            />
            <div className="absolute bottom-3 left-3 bg-[#0C0C0E]/90 backdrop-blur-md px-3 py-1.5 rounded border border-[#2E2E3E] text-[11px] text-[#D8D4CC] pointer-events-none flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>FWF4+52, P N Road, Near Khemani Mill, Dibrugarh</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
