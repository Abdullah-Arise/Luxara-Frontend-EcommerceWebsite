import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Check, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import QuickView from '../QuickView-Premium';
import { BEST_SELLERS, getProductCoverImage } from '../../data/products';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

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

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    if (!product.inStock) return;
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const openQuickView = () => onQuickView?.(product);

  const handleCardKeyDown = (event) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openQuickView();
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group cursor-pointer"
      onClick={openQuickView}
      onKeyDown={handleCardKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View ${product.name}`}
    >
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 aspect-[3/4]">
          <span className="absolute left-2 top-2 z-10 rounded-full border border-white/10 bg-black/45 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-amber-300 backdrop-blur-md sm:left-3 sm:top-3 sm:px-3 sm:text-[10px] sm:tracking-[0.28em]">
            {product.tag}
          </span>

          <img
            src={getProductCoverImage(product)}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-700 ease-in-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute inset-x-2 bottom-2 flex translate-y-0 items-center justify-center gap-2 opacity-100 transition-all duration-300 sm:inset-x-3 sm:bottom-3 md:inset-x-4 md:bottom-4 md:gap-3 [@media(hover:hover)]:translate-y-4 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100">
            <button
              onClick={handleAdd}
              title={added ? 'Added!' : 'Add to Cart'}
              className={`flex items-center gap-1 rounded-full border px-2.5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] shadow-lg transition-all sm:px-3 sm:py-2.5 sm:text-[10px] md:gap-2 md:px-4 md:py-3 md:text-[11px] md:tracking-[0.22em] ${
                added
                  ? 'border-emerald-400/30 bg-emerald-500 text-white'
                    : 'border-amber-400/30 bg-[#d6b46a] text-black hover:bg-[#e0c07a]'
              }`}
            >
              {added ? <Check className="h-3.5 w-3.5 md:h-4 md:w-4" /> : <ShoppingBag className="h-3.5 w-3.5 md:h-4 md:w-4" />}
              <span>{added ? 'Added' : 'Add'}</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                openQuickView();
              }}
              title="Quick View"
              className="rounded-full border border-white/10 bg-black/50 p-2 text-white shadow-lg backdrop-blur-md transition-all hover:bg-amber-400 hover:text-black sm:p-2.5 md:p-3"
            >
              <Eye className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </button>
          </div>
        </div>

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

const BestSellers = () => {
  const [quickProduct, setQuickProduct] = useState(null);

  return (
    <>
      <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.10),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300/90 backdrop-blur-md">
                Shop The Look
              </p>
              <h2 className="text-4xl font-serif text-white md:text-5xl">
                Seasonal Favorites
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-400 md:text-base">
                Discover pieces our collectors return to again and again, selected for everyday elegance and elevated gifting.
              </p>
            </div>

            <a
              href="/shop"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:border-amber-300/30 hover:bg-amber-400 hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.16)] backdrop-blur-md md:self-auto"
            >
              View All
              <ArrowRight size={15} />
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
          >
            {BEST_SELLERS.map((product) => (
              <ProductCard key={product.id} product={product} onQuickView={setQuickProduct} />
            ))}
          </motion.div>
        </div>
      </section>

      <QuickView product={quickProduct} onClose={() => setQuickProduct(null)} />
    </>
  );
};

export default BestSellers;
