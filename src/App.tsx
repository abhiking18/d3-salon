/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceBookingModal } from './components/ServiceBookingModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalServiceId, setModalServiceId] = useState<string | undefined>(undefined);

  const handleOpenBookingModal = (serviceId?: string) => {
    setModalServiceId(serviceId);
    setIsModalOpen(true);
  };

  const handleSelectServiceForBooking = (serviceId: string) => {
    setModalServiceId(serviceId);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0C0C0E] text-[#F3EFE6] selection:bg-[#C5A059] selection:text-[#0C0C0E] relative">
      {/* Initial Page Entrance Preloader */}
      <Preloader />

      {/* Top Navigation Bar */}
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBookingModal={handleOpenBookingModal} />

        {/* About the Salon */}
        <AboutSection onOpenBookingModal={handleOpenBookingModal} />

        {/* Our Services */}
        <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Why Choose D3 Section */}
        <WhyChooseSection />

        {/* Premium Real Photo Gallery & Lightbox */}
        <GallerySection />

        {/* Verified Google Reviews */}
        <ReviewsSection />

        {/* Online Appointment Booking */}
        <BookingSection initialServiceId={modalServiceId} />

        {/* Contact & Google Maps */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Quick Booking Modal */}
      <ServiceBookingModal
        isOpen={isModalOpen}
        selectedServiceId={modalServiceId}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
