// =============================================
// TRACK HERO — src/components/track/TrackHero.jsx
//
// YEH KYA HAI:
// Track Order page ke upar wala hero section
// "Track Your Order" heading wala hissa
//
// KAHAN USE HOTA HAI:
// src/pages/TrackOrder.jsx mein import hoga
//
// CHANGE KARNA HO TO:
// - Heading change → h1 tag edit karo
// - Label change → pehli <p> tag edit karo
// =============================================

import React from 'react';

const TrackHero = () => {
  return (
    <div className="pt-32 pb-12 bg-neutral-950 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Chhota label — "Delivery" */}
        <p className="text-amber-400 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
          Delivery
        </p>

        {/* Main heading */}
        <h1 className="font-serif text-5xl text-white font-light">
          Track Your{' '}
          <span className="italic text-amber-300">Order</span>
        </h1>

      </div>
    </div>
  );
};

export default TrackHero;