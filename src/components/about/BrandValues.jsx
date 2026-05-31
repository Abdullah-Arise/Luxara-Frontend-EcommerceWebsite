import React from 'react';
import { Droplets, Shield, Sparkles, Heart } from 'lucide-react';

const values = [
  {
    icon: <Droplets size={28} />,
    title: "Steel Cuff Finish",
    desc: "Our stainless steel cuffs are made for confident everyday wear, with polished gold and silver finishes that are easy to style.",
  },
  {
    icon: <Shield size={28} />,
    title: "Two Product Lines",
    desc: "Luxara cuffs are selected for a durable finish, while our bead bracelets are individually assembled with care.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Premium Finish",
    desc: "Choose warm gold cuffs, clean silver cuffs, or expressive handmade bead bracelets. Every line carries a distinct Luxara character.",
  },
  {
    icon: <Heart size={28} />,
    title: "Made for Real Life",
    desc: "We make bracelets and cuffs to be worn often, layered freely, and styled in a way that feels personal.",
  },
];

const BrandValues = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-amber-400 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
            What We Stand For
          </p>
          <h2 className="font-serif text-4xl text-white font-light">
            The Luxara <span className="italic text-amber-300">Promise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-10 group transition-colors duration-300 backdrop-blur-md hover:border-amber-400/20 hover:bg-white/10">
              <div className="text-amber-300 mb-6 group-hover:text-amber-200 transition-colors">
                {val.icon}
              </div>
              <h3 className="font-serif text-xl text-white mb-3 transition-colors">
                {val.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed transition-colors">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandValues;
