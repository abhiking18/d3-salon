import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Floating Action */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with D3 Unisex Salon on WhatsApp"
        className="group relative flex items-center gap-2 p-3.5 sm:px-4 sm:py-3 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 hover:bg-[#20ba59] active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
          Chat with Us
        </span>
        {/* Subtle ping pulse */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-75 animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" />
      </a>
    </div>
  );
};
