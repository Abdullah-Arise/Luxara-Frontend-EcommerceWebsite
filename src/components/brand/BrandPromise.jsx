// ============================================================
// BRAND PROMISE — src/components/brand/BrandPromise.jsx
//
// YEH KYA HAI:
// BrandLegacy page mein "Our Promise" / "Three things we'll never compromise on" section.
// 3 cards: Anti-Tarnish, Waterproof, Real Luxury Feel
//
// KAHAN USE HOTA HAI:
// src/pages/BrandLegacy.jsx mein Chapter 2 ke baad
//
// CHANGE KARNA HO TO:
// - Cards add/remove → 'promises' array mein object add ya remove karo
// - Card content change → array mein text edit karo
// - Heading change → h2 tag edit karo
// - Icon change → lucide-react se naya icon import karo
// ============================================================

import React from 'react';
import { Shield, Droplets, Sparkles } from 'lucide-react';

// ── Yahan se cards ka data aata hai ──
// Naya card add karna ho → yeh array mein object add karo
const promises = [
  {
    icon: <Shield size={28} />,
    title: "Polished Cuff Finishes.",
    desc: "Our stainless steel cuffs are chosen for a durable polished finish. Gentle care keeps gold and silver tones looking their best.",
  },
  {
    icon: <Droplets size={28} />,
    title: "Waterproof Cuffs.",
    desc: "Our stainless steel cuffs are waterproof and made for everyday wear. Handmade bead bracelets should be kept away from excess moisture.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Real Luxury Feel.",
    desc: "Handmade bead bracelets, gold cuffs, and silver cuffs. Distinct Luxara pieces with a refined look at accessible prices.",
  },
];

const BrandPromise = () => {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-amber-400 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
            Our Promise
          </p>
          <h2 className="font-serif text-4xl text-white font-light">
            Three things we'll never{' '}
            <span className="italic text-amber-300">compromise on.</span>
          </h2>
        </div>

        {/* 3 Cards Grid
            gap-1 + bg-white/10 -> cards ke beech thin divider dikhti hai (design trick)
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promises.map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">
              {/* Icon */}
              <div className="text-amber-300 mb-5">{item.icon}</div>
              {/* Title */}
              <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
              {/* Description */}
              <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandPromise;
