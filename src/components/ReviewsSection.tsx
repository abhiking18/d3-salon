import React from 'react';
import { motion } from 'motion/react';
import { Star, ExternalLink, ShieldCheck, Quote } from 'lucide-react';
import { BUSINESS_INFO, GOOGLE_REVIEWS_HIGHLIGHTS } from '../data/salonData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#0E0E13] border-t border-[#1C1C24] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Rating Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
              <span>Verified Patron Feedback</span>
              <span aria-hidden="true" className="w-8 h-[1px] bg-[#C5A059]/50" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F3EFE6] font-normal tracking-tight leading-tight">
              Trusted by Dibrugarh Residents.
            </h2>
          </div>

          {/* Google Verified Card */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-start lg:justify-end gap-6 bg-[#14141C] border border-[#272736] p-5 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-[#C5A059]/30 flex flex-col items-center justify-center shrink-0">
                <span className="font-serif text-2xl font-bold text-[#F3EFE6] leading-none">4.5</span>
                <span className="text-[10px] text-[#C5A059] uppercase tracking-wider font-semibold">/ 5.0</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#C5A059] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? 'fill-[#C5A059]' : 'fill-[#C5A059]/40'}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#A8A49C]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#4285F4]" />
                  <span className="text-white font-medium">Google Rating</span>
                  <span>· 24 Reviews</span>
                </div>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#0C0C0E] bg-[#C5A059] hover:bg-[#D4AF37] rounded-md transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>Read All Reviews</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Customer Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOOGLE_REVIEWS_HIGHLIGHTS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#13131A] border border-[#22222E] rounded-xl p-7 flex flex-col justify-between hover:border-[#333344] transition-all relative group"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#7A7770] font-mono">{review.date}</span>
                </div>

                <Quote className="w-8 h-8 text-[#C5A059]/20 mb-2" />
                <p className="text-sm text-[#DDD9D0] font-light leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1C1C26] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-[#F3EFE6]">{review.author}</h4>
                  {review.serviceMentioned && (
                    <span className="text-xs text-[#9B978F]">{review.serviceMentioned}</span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#4285F4]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Google Review</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust summary note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#8E8A82]">
            Reviews shown reflect real visitor ratings on Google Maps for D3 Unisex Salon, Dibrugarh.
          </p>
        </div>

      </div>
    </section>
  );
};
