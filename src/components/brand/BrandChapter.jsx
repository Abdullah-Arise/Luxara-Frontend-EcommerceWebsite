// ============================================================
// BRAND CHAPTER — src/components/brand/BrandChapter.jsx
//
// YEH KYA HAI:
// BrandLegacy page mein Chapter 1 aur Chapter 2 ka layout.
// Dono chapters ka layout same hai sirf:
// - Text aur image ki position alag hoti hai
// - Content (heading, paragraphs) alag hota hai
// Isliye ek hi reusable component banaya jo dono ke liye kaam karta hai.
//
// KAHAN USE HOTA HAI:
// src/pages/BrandLegacy.jsx mein 2 baar use hoga:
//   <BrandChapter chapter="1" imageLeft={false} ... />
//   <BrandChapter chapter="2" imageLeft={true}  ... />
//
// PROPS (jo bahar se data aata hai):
// - chapter      → "1" ya "2" — label ke liye ("Chapter 1")
// - heading      → badi heading (string)
// - headingItalic → heading ka italic part (string)
// - paragraphs   → array of strings, har string ek paragraph
// - image        → image ka URL
// - imageAlt     → image ka alt text
// - imageLeft    → true: image left pe, false: image right pe
//                  (Chapter 1 mein image right, Chapter 2 mein left)
//
// CHANGE KARNA HO TO:
// - Content change → BrandLegacy.jsx mein props change karo, yahan nahi
// - Layout change → grid ya order classes yahan edit karo
// - Image border → "-bottom-4 -left-4 border" wali div edit karo
// ============================================================

import React from 'react';

const BrandChapter = ({
  chapter,
  heading,
  headingItalic,
  paragraphs = [],
  image,
  imageAlt,
  imageLeft = false,    // true = image left side pe hogi
}) => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ── TEXT BLOCK ──
              imageLeft=true  → text order-1 md:order-2 (right pe)
              imageLeft=false → normal order (left pe)
          */}
          <div className={`space-y-6 ${imageLeft ? 'order-1 md:order-2' : ''}`}>

            {/* "Chapter 1" ya "Chapter 2" label */}
            <p className="text-amber-400 text-[10px] uppercase tracking-[0.3em] font-medium">
              Chapter {chapter}
            </p>

            {/* Heading */}
            <h2 className="font-serif text-4xl text-white font-light leading-tight">
              {heading}<br />
              <span className="italic">{headingItalic}</span>
            </h2>

            {/* Paragraphs — array se map karta hai */}
            {paragraphs.map((para, i) => (
              <p key={i} className="text-neutral-400 leading-relaxed text-[15px]">
                {para}
              </p>
            ))}

          </div>

          {/* ── IMAGE BLOCK ──
              imageLeft=true  → image order-2 md:order-1 (left pe)
              imageLeft=false → normal order (right pe)
              Gold border decoration image ke neeche/side mein hoti hai
          */}
          <div className={`relative ${imageLeft ? 'order-2 md:order-1' : ''}`}>

            {/* Image container */}
            <div className="aspect-[4/5] overflow-hidden bg-neutral-900">
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gold border decoration
                imageLeft=true  → right side pe border
                imageLeft=false → left side pe border
            */}
            <div className={`absolute -bottom-4 ${imageLeft ? '-right-4' : '-left-4'} 
                             w-full h-full border border-amber-400/25 -z-10 hidden md:block`} />

          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandChapter;
