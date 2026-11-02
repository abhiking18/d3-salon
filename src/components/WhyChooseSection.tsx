import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, Scissors, MapPin, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_PILLARS } from '../data/salonData';

export const WhyChooseSection: React.FC = () => {
  const iconList = [
    Users,
    Scissors,
    Sparkles,
    MapPin,
    HeartHandshake
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#0C0C0E] border-t border-[#1C1C24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
            <span>The D3 Standard</span>
            <span aria-hidden="true" className="w-8 h-[1px] bg-[#C5A059]/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F3EFE6] font-normal tracking-tight leading-tight mb-4">
            Why Choose D3 Unisex Salon.
          </h2>
          <p className="text-sm sm:text-base text-[#A5A199] font-light leading-relaxed">
            Crafting confidence through personalized consultations, skilled artistry, and an environment where everyone feels at ease.
          </p>
        </div>

        {/* 5 Pillars with Natural Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_PILLARS.map((pillar, index) => {
            const Icon = iconList[index % iconList.length];
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#121217] border border-[#21212C] rounded-xl p-8 hover:border-[#C5A059]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-light text-[#C5A059]/80 group-hover:text-[#C5A059] transition-colors">
                      {pillar.number}.
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#1A1A24] border border-[#2B2B3A] flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059]/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-[#F3EFE6] font-medium tracking-tight mb-3 group-hover:text-[#F8F5EE]">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A09C94] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
