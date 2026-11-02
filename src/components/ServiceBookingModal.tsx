import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, Calendar, Clock, User, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SALON_SERVICES } from '../data/salonData';

interface ServiceBookingModalProps {
  isOpen: boolean;
  selectedServiceId?: string;
  onClose: () => void;
}

export const ServiceBookingModal: React.FC<ServiceBookingModalProps> = ({
  isOpen,
  selectedServiceId,
  onClose,
}) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [serviceId, setServiceId] = useState(selectedServiceId || SALON_SERVICES[0]?.id || 'haircut-styling');
  const [preferredDate, setPreferredDate] = useState(tomorrowStr);
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedServiceId) {
      setServiceId(selectedServiceId);
    }
  }, [selectedServiceId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setError('Please provide your name.');
      return;
    }

    const cleanPhone = mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }

    const serviceObj = SALON_SERVICES.find((s) => s.id === serviceId);
    const serviceName = serviceObj ? serviceObj.name : 'Salon Service';

    const message = [
      'Hello D3 Unisex Salon, I would like to book an appointment.',
      '',
      `Name: ${customerName.trim()}`,
      `Phone: ${mobileNumber.trim()}`,
      `Service: ${serviceName}`,
      `Preferred Date: ${preferredDate}`,
      `Preferred Time: ${preferredTime}`,
      notes ? `Notes: ${notes.trim()}` : ''
    ]
      .filter((line, i) => i < 7 || line !== '')
      .join('\n');

    const whatsappUrl = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      onClose();
    }, 400);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-[#121217] border border-[#2B2B3C] rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[#A5A199] hover:text-white hover:bg-[#1C1C26] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <span className="text-[11px] font-medium uppercase tracking-widest text-[#C5A059] block mb-1">
              D3 Unisex Salon · Dibrugarh
            </span>
            <h3 className="font-serif text-2xl text-[#F3EFE6] font-medium">
              Quick Appointment Request
            </h3>
            <p className="text-xs text-[#9E9A92] mt-1 font-light">
              Submit your preferred slot. Our team will promptly confirm via WhatsApp.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded bg-red-950/40 border border-red-800/60 text-xs text-red-200">
              {error}
            </div>
          )}

          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg text-white">Opening WhatsApp...</h4>
              <p className="text-xs text-[#A09C95] max-w-xs mx-auto">
                Your appointment details are ready to send directly to D3 Unisex Salon at +91 7905680124.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#C0BCB4] mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="e.g. Debashis Roy"
                  className="w-full px-3.5 py-2.5 bg-[#181822] border border-[#2E2E3E] rounded-md text-sm text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#C0BCB4] mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Mobile Number *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={mobileNumber}
                  onChange={(e) => {
                    setMobileNumber(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="e.g. 9876543210"
                  className="w-full px-3.5 py-2.5 bg-[#181822] border border-[#2E2E3E] rounded-md text-sm text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#C0BCB4] mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Service *</span>
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#181822] border border-[#2E2E3E] rounded-md text-sm text-white focus:outline-none focus:border-[#C5A059]"
                >
                  {SALON_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C0BCB4] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 bg-[#181822] border border-[#2E2E3E] rounded-md text-xs text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C0BCB4] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Time *</span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 bg-[#181822] border border-[#2E2E3E] rounded-md text-xs text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="02:30 PM">02:30 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:30 PM">05:30 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#C0BCB4] mb-1.5">
                  Notes (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Special requests or instructions"
                  className="w-full px-3.5 py-2 bg-[#181822] border border-[#2E2E3E] rounded-md text-xs text-white placeholder-[#605C55] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#25D366] hover:bg-[#20ba59] rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send via WhatsApp to Salon</span>
                </button>
                <p className="text-[10px] text-center text-[#7E7A72] mt-2">
                  Opens WhatsApp with pre-filled details to +91 7905680124.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
