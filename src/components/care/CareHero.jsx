import React from 'react';

const CareHero = () => {
  return (
    <div className="pt-32 pb-16 bg-neutral-950 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-amber-400 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
          Bracelet & Cuff Care
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-white font-light mb-6">
          Keep it <span className="italic text-amber-300">Shining.</span>
        </h1>
        <p className="text-neutral-400 text-base max-w-lg leading-relaxed font-light">
          A little care keeps your Luxara bracelets and cuffs looking their best. Here's what you need to know.
        </p>
      </div>
    </div>
  );
};

export default CareHero;
