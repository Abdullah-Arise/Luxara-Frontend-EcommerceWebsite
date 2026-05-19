// =============================================
// PRODUCT CARD — src/components/shop/ProductCard.jsx
//
// Dark theme + framer-motion animations (BestSellers card jaisa)
// Used in: ShopAll, NewArrivals, RingsAndOthers
// =============================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
};

const ProductCard = ({ product, onQuickView, variant = "shop" }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    if (!product.inStock) return;
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group cursor-pointer"
    >
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">

        {/* ── IMAGE AREA ── */}
        <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 aspect-[3/4]">

          {/* ── TOP-LEFT BADGE ── */}
          {variant === 'new' ? (
            <span className="absolute left-3 top-3 z-10 rounded-full border border-white/10 bg-amber-500/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
              New
            </span>
          ) : (
            <span className="absolute left-3 top-3 z-10 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-300 backdrop-blur-md">
              {product.tag}
            </span>
          )}

          {/* ── DISCOUNT BADGE (top-right) ── */}
          {discount > 0 && (
            <span className="absolute top-3 right-3 z-10 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[10px] font-bold text-amber-300 backdrop-blur-md">
              -{discount}%
            </span>
          )}

          {/* ── SOLD OUT OVERLAY ── */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center backdrop-blur-sm">
              <span className="text-xs uppercase tracking-widest font-semibold text-neutral-300 border border-white/20 rounded-full px-4 py-2">
                Sold Out
              </span>
            </div>
          )}

          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-700 ease-in-out group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

          {/* ── HOVER BUTTONS ── */}
          {product.inStock && (
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-4">
              <button
                onClick={handleAdd}
                title={added ? 'Added!' : 'Add to Cart'}
                className={`flex items-center gap-2 rounded-full border px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] transition-all shadow-lg ${
                  added
                    ? 'border-emerald-400/30 bg-emerald-500 text-white'
                    : 'border-amber-400/30 bg-[#d6b46a] text-black hover:bg-[#e0c07a]'
                }`}
              >
                {added ? <Check size={16} /> : <ShoppingBag size={16} />}
                <span>{added ? 'Added' : 'Add'}</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onQuickView(product);
                }}
                title="Quick View"
                className="rounded-full border border-white/10 bg-black/50 p-3 text-white backdrop-blur-md transition-all hover:bg-amber-400 hover:text-black shadow-lg"
              >
                <Eye size={16} />
              </button>
            </div>
          )}
        </div>

        {/* ── PRODUCT INFO ── */}
        <div className="px-1 pb-1 text-center">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-amber-300/85">
            {product.category} · {product.finish}
          </p>
          <h3 className="text-base font-serif font-medium leading-snug text-white transition-colors group-hover:text-amber-200 md:text-lg">
            {product.name}
          </h3>
          {product.description && (
            <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-neutral-400">
              {product.description}
            </p>
          )}
          <div className="mt-3 flex items-center justify-center gap-2">
            <p className="text-sm font-semibold text-white">
              Rs. {product.price.toLocaleString()}
            </p>
            {product.originalPrice && (
              <p className="text-xs text-neutral-500 line-through">
                Rs. {product.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ProductCard;
