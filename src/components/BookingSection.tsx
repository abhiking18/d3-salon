import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Calendar, Clock, User, Phone, CheckCircle, AlertCircle, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO, SALON_SERVICES } from '../data/salonData';
import { BookingFormData } from '../types';

interface BookingSectionProps {
  initialServiceId?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialServiceId }) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    customerName: '',
    mobileNumber: '',
    serviceId: initialServiceId || SALON_SERVICES[0]?.id || 'haircut-styling',
    preferredDate: tomorrowStr,
    preferredTime: '11:00 AM',
    specialNotes: ''
  });

  const [error, setError] = useState<string | null>(null);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSelectTime = (slot: string) => {
    setFormData((prev) => ({ ...prev, preferredTime: slot }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.customerName.trim()) {
      setError('Please enter your full name.');
      return;
    }

    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!formData.preferredDate) {
      setError('Please select a preferred date for your appointment.');
      return;
    }

    const selectedService = SALON_SERVICES.find((s) => s.id === formData.serviceId);
    const serviceName = selectedService ? selectedService.name : 'Salon Service';

    // Construct WhatsApp message strictly formatted
    const message = [
      'Hello D3 Unisex Salon, I would like to book an appointment.',
      '',
      `Name: ${formData.customerName.trim()}`,
      `Phone: ${formData.mobileNumber.trim()}`,
      `Service: ${serviceName}`,
      `Preferred Date: ${formData.preferredDate}`,
      `Preferred Time: ${formData.preferredTime}`,
      formData.specialNotes ? `Notes: ${formData.specialNotes.trim()}` : ''
    ]
      .filter((line, i) => i < 7 || line !== '')
      .join('\n');

    const whatsappUrl = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;

    setIsSuccessMessageVisible(true);

    // Open WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  const selectedServiceName = SALON_SERVICES.find(s => s.id === formData.serviceId)?.name || 'Custom Styling';

  return (
    <section id="booking" className="py-24 sm:py-32 bg-[#0E0E13] border-t border-[#1C1C24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Guidelines */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
              <span>Fast Online Booking</span>
              <span aria-hidden="true" className="w-8 h-[1px] bg-[#C5A059]/50" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F3EFE6] font-normal tracking-tight leading-tight mb-6">
              Reserve Your Salon Experience.
            </h2>

            <p className="text-sm sm:text-base text-[#A8A49C] font-light leading-relaxed mb-8">
              Booking is direct, fast, and transparent. Fill in your details below, and your request will be delivered directly to the D3 Unisex Salon WhatsApp team for instant review and slot confirmation.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#20202B]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#F3EFE6]">Salon Location</h4>
                  <p className="text-xs text-[#9B978F]">FWF4+52, P N Road, Near Khemani Mill, Dibrugarh, Assam 786001</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#F3EFE6]">WhatsApp Assisted Confirmation</h4>
                  <p className="text-xs text-[#9B978F]">Direct communication ensures prompt answers to any hair questions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#F3EFE6]">No Advance Payment Needed</h4>
                  <p className="text-xs text-[#9B978F]">Consultations are free, and payment is settled at the salon after service.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-[#14141C] border border-[#272737] text-xs text-[#8E8A82]">
              <span className="font-semibold text-[#C5A059]">Need immediate assistance?</span> Call us directly at{' '}
              <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-white underline hover:text-[#C5A059]">
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-[#121218] border border-[#242433] rounded-2xl p-6 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Error Alert */}
              {error && (
                <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-800/60 text-xs text-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Success Notification */}
              {isSuccessMessageVisible && (
                <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-200 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Opening WhatsApp with your booking details for salon confirmation...</span>
                </div>
              )}

              {/* Customer Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="customerName" className="block text-xs font-medium uppercase tracking-wider text-[#C8C4BC] mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Customer Name *</span>
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    required
                    value={formData.customerName}
                    onChange={handleInputChange}
                    placeholder="e.g. Debashis Roy"
                    className="w-full px-4 py-3 bg-[#181822] border border-[#2E2E3E] rounded-md text-sm text-[#F3EFE6] placeholder-[#6A6660] focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="mobileNumber" className="block text-xs font-medium uppercase tracking-wider text-[#C8C4BC] mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Mobile Number *</span>
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    required
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 9876543210"
                    className="w-full px-4 py-3 bg-[#181822] border border-[#2E2E3E] rounded-md text-sm text-[#F3EFE6] placeholder-[#6A6660] focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="serviceId" className="block text-xs font-medium uppercase tracking-wider text-[#C8C4BC] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Select Service *</span>
                </label>
                <select
                  id="serviceId"
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#181822] border border-[#2E2E3E] rounded-md text-sm text-[#F3EFE6] focus:outline-none focus:border-[#C5A059] transition-colors"
                >
                  {SALON_SERVICES.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#14141C] text-white">
                      {s.name} ({s.category} · {s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-medium uppercase tracking-wider text-[#C8C4BC] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-[#181822] border border-[#2E2E3E] rounded-md text-sm text-[#F3EFE6] focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-medium uppercase tracking-wider text-[#C8C4BC] mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Preferred Time Slot *</span>
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    placeholder="e.g. 11:30 AM"
                    className="w-full px-4 py-3 bg-[#181822] border border-[#2E2E3E] rounded-md text-sm text-[#F3EFE6] focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>
              </div>

              {/* Popular time slots pills for quick tap */}
              <div>
                <span className="block text-[11px] text-[#8E8A82] mb-2">Quick Time Selection:</span>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => handleSelectTime(slot)}
                      className={`px-3 py-1.5 text-xs rounded-md border transition-all cursor-pointer ${
                        formData.preferredTime === slot
                          ? 'bg-[#C5A059] text-[#0C0C0E] border-[#C5A059] font-semibold'
                          : 'bg-[#181822] text-[#B5B1A8] border-[#2A2A38] hover:border-[#C5A059]/40'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Notes (Optional) */}
              <div>
                <label htmlFor="specialNotes" className="block text-xs font-medium uppercase tracking-wider text-[#C8C4BC] mb-2">
                  Special Requests or Styling Notes (Optional)
                </label>
                <textarea
                  id="specialNotes"
                  name="specialNotes"
                  rows={2}
                  value={formData.specialNotes}
                  onChange={handleInputChange}
                  placeholder="e.g. Inquiring about balayage with consultation, hair texture, etc."
                  className="w-full px-4 py-3 bg-[#181822] border border-[#2E2E3E] rounded-md text-sm text-[#F3EFE6] placeholder-[#6A6660] focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                />
              </div>

              {/* Large WhatsApp Booking Action Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 text-sm font-semibold tracking-wider uppercase text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] rounded-md transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/15 group cursor-pointer font-sans"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Book via WhatsApp ({selectedServiceName})</span>
              </button>

              {/* Transparency Disclaimer */}
              <p className="text-[11px] text-center text-[#7F7B74] leading-relaxed">
                Clicking this button opens WhatsApp with your pre-filled booking details to{' '}
                <strong className="text-[#C8C4BC]">+91 7905680124</strong>. Appointments are confirmed once D3 Unisex Salon replies.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
