import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageCircle, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBookingModal: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Real Photos', href: '#gallery' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location & Map', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0E]/95 backdrop-blur-md border-b border-[#22222D] py-3 shadow-2xl shadow-black/50'
            : 'bg-gradient-to-b from-[#0B0B0E]/90 via-[#0B0B0E]/50 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 sm:gap-8">
            
            {/* Zone 1: Brand Wordmark with Significantly Bigger Authentic Logo */}
            <a
              href="#"
              className="group flex items-center gap-3.5 whitespace-nowrap shrink-0 focus:outline-none"
              aria-label="D3 Unisex Salon Home"
            >
              {/* Bigger Circular Emblem with subtle gold bezel */}
              <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-white p-1 border-2 border-[#C5A059] shadow-lg shadow-black/60 overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={BUSINESS_INFO.logo}
                  alt="D3 Unisex Salon Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Handcrafted Editorial Wordmark - Non-AI Aesthetic */}
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#F3EFE6] leading-none group-hover:text-[#C5A059] transition-colors">
                    D3
                  </span>
                  <span className="font-serif text-sm sm:text-base tracking-[0.22em] text-[#E5E1D8] uppercase font-light leading-none">
                    UNISEX SALON
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-[#A6A29A] font-light tracking-wider">
                  <span className="text-[#C5A059] font-medium">ডি৩ ইউনিচেক্স চেলুন</span>
                  <span>·</span>
                  <span className="hidden sm:inline">P N Road, Dibrugarh</span>
                </div>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Clean editorial typography) */}
            <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#C8C4BC]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#C5A059] group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#C5A059] hover:text-[#E0DDD5] transition-colors py-2 px-3"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span className="font-mono">P N Road</span>
              </a>

              <button
                onClick={() => onOpenBookingModal()}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0C0C0E] bg-[#C5A059] rounded-md hover:bg-[#D4AF37] active:scale-[0.98] transition-all duration-200 whitespace-nowrap shadow-md shadow-[#C5A059]/15 cursor-pointer font-sans"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-md text-[#F3EFE6] hover:text-[#C5A059] hover:bg-[#1A1A22] transition-colors"
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-20 z-30 lg:hidden bg-[#111116]/98 backdrop-blur-xl border-b border-[#262631] px-6 py-6 shadow-2xl"
          >
            <div className="flex items-center gap-3.5 pb-4 mb-4 border-b border-[#1E1E26]">
              <div className="w-14 h-14 rounded-full bg-white p-1 border-2 border-[#C5A059] overflow-hidden shrink-0 shadow-md">
                <img
                  src={BUSINESS_INFO.logo}
                  alt="D3 Unisex Salon Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-base font-semibold tracking-wider text-[#F3EFE6] block">
                  D3 UNISEX SALON
                </span>
                <span className="text-xs text-[#C5A059] font-medium block">
                  ডি৩ ইউনিচেক্স চেলুন
                </span>
                <span className="text-[11px] text-[#A5A199] block mt-0.5">
                  Near Khemani Mill, P N Road, Dibrugarh
                </span>
              </div>
            </div>

            <nav className="flex flex-col gap-3.5 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-serif tracking-wider text-[#F3EFE6] hover:text-[#C5A059] py-1 border-b border-[#1E1E26]/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0C0C0E] bg-[#C5A059] rounded-md text-center hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-2 cursor-pointer font-sans"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-md bg-[#1A1A22] border border-[#2E2E3C] text-xs font-medium text-[#F3EFE6] hover:text-[#C5A059]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-md bg-[#1A1A22] border border-[#2E2E3C] text-xs font-medium text-[#25D366] hover:bg-[#20202B]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
