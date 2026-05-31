// =============================================
// CUFF CARD - src/components/shop/GiftCard.jsx
//
// YEH KYA HAI:
// Cuff Collection page mein har stainless steel cuff ka card.
// ProductCard se alag hai kyunki:
// - "Steel Cuff" badge hai (kala background, yellow text)
// - "You save Rs. X" dikhata hai
// - Savings calculate karta hai
//
// KAHAN USE HOTA HAI:
// src/pages/GiftSets.jsx mein
//
// PROPS:
// - product    → product object (naam, price, image etc.)
// - onQuickView → QuickView modal kholne ka function
//
// CHANGE KARNA HO TO:
// - Badge text -> "Steel Cuff" wali span tag edit karo
// - Savings text → "You save" wali span edit karo
// - Colors → className mein tailwind classes change karo
// =============================================

import React, { useState } from 'react';
import { ShoppingBag, Eye, Check, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getProductCoverImage } from '../../data/products';

const GiftCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  // Cart mein add karna
  const handleAdd = (event) => {
    event.stopPropagation();
    if (!product.inStock) return;
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Discount % nikalna
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const openQuickView = () => onQuickView?.(product);

  const handleCardKeyDown = (event) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openQuickView();
    }
  };

  return (
    <div
      className="group cursor-pointer"
      onClick={openQuickView}
      onKeyDown={handleCardKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View ${product.name}`}
    >

      {/* ── IMAGE AREA ── */}
      <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-neutral-900">

        {/* STEEL CUFF BADGE (top-left)
            Kala background, yellow "Steel Cuff" text + sparkle icon
        */}
        <span className="absolute top-3 left-3 z-10 bg-[#0f0d0b] text-yellow-400 px-2.5 py-1
                         text-[9px] uppercase tracking-widest font-semibold flex items-center gap-1">
          <Sparkles size={9} /> Steel Cuff
        </span>

        {/* ── SAVE BADGE (top-right) ──
            Sirf tab dikhega jab discount ho
        */}
        {discount > 0 && (
          <span className="absolute top-3 right-3 z-10 bg-yellow-600 text-white px-2 py-1 text-[9px] font-bold">
            Save {discount}%
          </span>
        )}

        {/* Product Image */}
        <img
          src={getProductCoverImage(product)}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
        />

        {/* ── HOVER BUTTONS ── */}
        <div className="absolute inset-0 flex items-end justify-center gap-3 bg-black/10 pb-5 opacity-100
                        transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">

          {/* Add to Cart */}
          <button
            onClick={handleAdd}
            className={`px-4 py-2.5 text-[10px] uppercase tracking-widest font-semibold
                       transition-all duration-200 flex items-center gap-1.5
                       translate-y-0 transform [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:group-hover:translate-y-0
                       ${added
                         ? 'bg-green-500 text-white'
                         : 'bg-[#d6b46a] text-black hover:bg-[#e0c07a]'
                       }`}
          >
            {added
              ? <><Check size={13} /> Added!</>
              : <><ShoppingBag size={13} /> Add to Cart</>
            }
          </button>

          {/* Quick View */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              openQuickView();
            }}
            className="bg-black/70 text-neutral-200 p-2.5 hover:bg-amber-400 hover:text-black
                       translate-y-0 transform transition-all duration-200 delay-75 [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:group-hover:translate-y-0"
          >
            <Eye size={16} />
          </button>

        </div>
      </div>

      {/* ── PRODUCT INFO ── */}
      <div>

        {/* Finish (Gold / Silver) */}
        <p className="text-[10px] uppercase tracking-widest text-amber-300 font-medium mb-1">
          {product.finish} Finish
        </p>

        {/* Product Name */}
        <h3 className="font-serif text-lg font-medium text-white group-hover:text-amber-300 transition-colors mb-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-neutral-400 mb-3 leading-relaxed">
          {product.description}
        </p>

        {/* Price, Original Price, aur Savings */}
        <div className="flex items-center gap-3 flex-wrap">

          <span className="font-semibold text-white">
            Rs. {product.price.toLocaleString()}
          </span>

          {product.originalPrice && (
            <span className="text-neutral-500 text-xs line-through">
              Rs. {product.originalPrice.toLocaleString()}
            </span>
          )}

          {/* ← Yeh sirf GiftCard mein hai — savings dikhata hai */}
          {discount > 0 && (
            <span className="text-green-600 text-xs font-medium">
              You save Rs. {(product.originalPrice - product.price).toLocaleString()}
            </span>
          )}

        </div>
      </div>
    </div>
  );
};

export default GiftCard;
