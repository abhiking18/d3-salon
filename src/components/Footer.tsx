import React from 'react';
import { ArrowUpRight, Phone, MessageCircle, MapPin, Instagram, Landmark } from 'lucide-react';
import { BUSINESS_INFO, SALON_SERVICES } from '../data/salonData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08080A] border-t border-[#1C1C24] text-[#A5A199] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#181822]">
          
          {/* Column 1: Brand & Bio with Bigger Official Logo */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-1 border-2 border-[#C5A059] overflow-hidden shrink-0 shadow-lg shadow-black/60">
                <img
                  src={BUSINESS_INFO.logo}
                  alt="D3 Unisex Salon Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <a href="#" className="inline-block text-xl font-serif font-bold tracking-widest text-[#F3EFE6]">
                  <span className="text-[#C5A059]">D3</span> UNISEX SALON
                </a>
                <span className="block text-xs text-[#C5A059] font-light">ডি৩ ইউনিচেক্স চেলুন · Dibrugarh</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8E8A82] font-light leading-relaxed max-w-sm mb-6">
              A premier unisex salon in Dibrugarh offering personalized haircutting, blow dry styling, creative coloring, smoothening, and precision grooming for women and men.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#14141C] border border-[#272736] text-[#25D366] hover:bg-[#25D366] hover:text-black hover:border-[#25D366] transition-all flex items-center justify-center cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-10 h-10 rounded-full bg-[#14141C] border border-[#272736] text-[#C5A059] hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059] transition-all flex items-center justify-center cursor-pointer"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#14141C] border border-[#272736] text-[#F3EFE6] hover:bg-[#F3EFE6] hover:text-black hover:border-white transition-all flex items-center justify-center cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F3EFE6] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-[#C5A059] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A059] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C5A059] transition-colors">
                  Real Photo Gallery
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#C5A059] transition-colors">
                  Why Choose D3
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#C5A059] transition-colors">
                  Google Reviews (4.5★)
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#C5A059] transition-colors">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services (No Spa, No Waxing) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F3EFE6] mb-4">
              Salon Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SALON_SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#C5A059] transition-colors block truncate">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Salon Location (Exact Location Highlighted, No Times) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F3EFE6] mb-4">
              Exact Location
            </h4>
            <div className="space-y-3 text-xs text-[#8E8A82]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="text-[#DDD9D0]">FWF4+52, P N Road, Near Khemani Mill, Dibrugarh, Assam 786001</span>
              </div>
              <div className="flex items-start gap-2">
                <Landmark className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Landmark: Near Khemani Mill on main P N Road</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-[#DDD9D0] hover:text-[#C5A059]">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6A63]">
          <div>
            © {currentYear} D3 Unisex Salon (ডি৩ ইউনিচেক্স চেলুন), Dibrugarh. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#booking" className="hover:text-[#C5A059] transition-colors">
              Online Booking
            </a>
            <span aria-hidden="true">·</span>
            <a href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
              WhatsApp Support
            </a>
            <span aria-hidden="true">·</span>
            <a href={BUSINESS_INFO.googleMapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
              Directions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
