import React, { useState } from 'react';
import { X, Star, ArrowRight, ShoppingBag, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const WHATSAPP_NUMBER = "923147253080";

const QuickView = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const orderOnWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Luxara! I want to order:\n\n🛍️ *${product.name}*\n💰 Price: Rs. ${product.price.toLocaleString()}\n✨ Finish: ${product.finish}\n\nPlease confirm availability. Thank you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    onClose();
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative bg-gradient-to-br from-neutral-950 via-black to-neutral-900 w-full max-w-4xl max-h-[90vh] overflow-hidden z-10 shadow-[0_40px_120px_rgba(0,0,0,0.9)] border border-white/5 rounded-3xl"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.08),transparent_50%)] pointer-events-none" />

            {/* Close */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/10 rounded-full w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white shadow-lg transition-colors"
            >
              <X size={18} />
            </motion.button>

            <div className="relative grid grid-cols-1 md:grid-cols-2 overflow-y-auto max-h-[90vh]">

              {/* Image */}
              <div className="relative aspect-square bg-black/40 overflow-hidden">
                <motion.img
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {discount && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-6 left-6 bg-gradient-to-br from-amber-400 to-amber-500 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.5)]"
                  >
                    -{discount}% OFF
                  </motion.span>
                )}

                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-xs uppercase tracking-[0.3em] font-semibold text-neutral-400 border border-white/20 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full">
                      Sold Out
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-10 flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex-1 space-y-6"
                >
                  {/* Category Badge */}
                  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-400/90 backdrop-blur-md">
                    {product.category}
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                    {product.name}
                  </h2>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                        >
                          <Star
                            size={14}
                            className={i < 4 ? 'fill-amber-400 text-amber-400' : 'text-neutral-700'}
                          />
                        </motion.div>
                      ))}
                    </div>
                    <span className="text-xs text-neutral-500">4.8 (127 reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-white">
                      Rs. {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-neutral-600 line-through">
                        Rs. {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-3 py-6 border-y border-white/5">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Finish</span>
                      <span className="text-neutral-300 font-medium">{product.finish}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Material</span>
                      <span className="text-neutral-300 font-medium">Anti-Tarnish Stainless Steel</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Waterproof</span>
                      <span className="text-emerald-400 font-medium flex items-center gap-1">
                        <Check size={14} /> Yes
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {['Anti-Tarnish', 'Hypoallergenic', 'Long-Lasting'].map((feature, idx) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.05 }}
                        className="px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs text-neutral-400"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="space-y-3 pt-6"
                >
                  {product.inStock ? (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleAddToCart}
                        disabled={added}
                        className="group w-full py-4 rounded-full bg-[#d6b46a] text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_20px_60px_rgba(214,180,106,0.3)] hover:shadow-[0_25px_70px_rgba(214,180,106,0.4)] transition-all disabled:opacity-50"
                      >
                        {added ? (
                          <>
                            <Check size={16} />
                            <span>Added to Cart</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag size={16} />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={orderOnWhatsApp}
                        className="group w-full py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_20px_60px_rgba(251,191,36,0.3)] hover:shadow-[0_25px_70px_rgba(251,191,36,0.4)] transition-shadow"
                      >
                        <span>Order on WhatsApp</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </>
                  ) : (
                    <button
                      disabled
                      className="w-full py-4 rounded-full bg-white/10 border border-white/10 text-neutral-500 font-semibold text-sm cursor-not-allowed"
                    >
                      Out of Stock
                    </button>
                  )}

                  <p className="text-xs text-center text-neutral-600 pt-2">
                    Free shipping on orders above Rs. 2,000
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuickView;
