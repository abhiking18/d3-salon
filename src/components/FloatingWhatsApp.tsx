import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-36 sm:bottom-40 right-5 sm:right-8 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Floating Action - Lifted upward with ample space underneath for sale notices or bottom widgets */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with D3 Unisex Salon on WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:bg-[#20ba59] active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide">
          WhatsApp Us
        </span>
        {/* Subtle ping pulse */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white rounded-full opacity-75 animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white rounded-full" />
      </a>
    </div>
  );
};
