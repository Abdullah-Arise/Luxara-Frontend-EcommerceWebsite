import React from 'react';
import founderPhoto from '../../assets/photos/founderpagephoto1.webp';

const FounderNote = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-neutral-900">
              <img
                src={founderPhoto}
                alt="Luxara Founder"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold border decoration */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-amber-400/30 -z-10 hidden md:block" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-amber-300 text-[10px] uppercase tracking-[0.3em] font-medium">
              A Note from the Founder
            </p>

            <h2 className="font-serif text-4xl text-white font-light leading-tight">
              We started with beads.<br />
              <span className="italic">We evolved with purpose.</span>
            </h2>

            <p className="text-neutral-400 leading-relaxed text-[15px]">
              Luxara started as a small handmade bead bracelet brand — made with love, sold with passion. Our customers loved the designs. But the metal turned. The shine faded. And that broke our hearts.
            </p>

            <p className="text-neutral-400 leading-relaxed text-[15px]">
              So we evolved with purpose. Our handmade bead bracelets still carry the craft that started Luxara, and our stainless steel cuff collection adds polished gold and silver options for everyday styling.
            </p>

            <p className="text-neutral-400 leading-relaxed text-[15px]">
              These are bracelets and cuffs made for Pakistani women who deserve thoughtful design, beautiful finishes, and accessible luxury.
            </p>

            <div className="pt-4 border-t border-white/10">
              <p className="font-serif text-2xl text-white italic">Abdullah</p>
              <p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Founder, Luxara</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderNote;
