import React from 'react';
import { X, ShoppingBag, ArrowRight, Minus, Plus, Trash2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const WHATSAPP_NUMBER = "923147253080";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();

  const freeShippingLeft = Math.max(0, 2000 - cartTotal);

  const orderOnWhatsApp = () => {
    if (cartItems.length === 0) return;
    const itemsList = cartItems
      .map(item => `• ${item.name} x${item.quantity} — Rs. ${item.price.toLocaleString()}`)
      .join('\n');
    const msg = encodeURIComponent(
      `Hi Luxara! I want to place an order:\n\n${itemsList}\n\nSubtotal: Rs. ${cartTotal.toLocaleString()}\n\nPlease confirm & share delivery details. Thank you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[90]"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 right-0 h-full w-full max-w-[440px] bg-gradient-to-br from-neutral-950 via-black to-neutral-900 z-[95] flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.9)] border-l border-white/5"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.08),transparent_40%)] pointer-events-none" />

        {/* Header */}
        <div className="relative flex items-center justify-between px-6 py-5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
              <ShoppingBag size={18} className="text-amber-400" />
            </div>
            <h2 className="font-serif text-xl text-white">Your Cart</h2>
            <AnimatePresence>
              {cartItems.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="bg-gradient-to-br from-amber-400 to-amber-500 text-black text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                >
                  {cartItems.reduce((s, i) => s + i.quantity, 0)}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="text-neutral-500 hover:text-white transition-colors p-1"
          >
            <X size={22} />
          </motion.button>
        </div>

        {/* Free Shipping Progress */}
        <AnimatePresence>
          {cartItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="relative px-6 py-4 bg-white/5 backdrop-blur-md border-b border-white/5"
            >
              {freeShippingLeft > 0 ? (
                <p className="text-xs text-neutral-400">
                  Add <span className="text-amber-400 font-semibold">Rs. {freeShippingLeft.toLocaleString()}</span> more for free shipping
                </p>
              ) : (
                <p className="text-xs text-emerald-400 font-medium flex items-center gap-2">
                  <Sparkles size={14} /> You've unlocked free shipping!
                </p>
              )}
              <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (cartTotal / 2000) * 100)}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-300 rounded-full"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cart Items */}
        <div className="relative flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center h-full text-center px-8"
            >
              <div className="mb-6 p-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                <ShoppingBag size={48} className="text-neutral-700" />
              </div>
              <p className="font-serif text-2xl text-neutral-300 mb-2">Your cart is empty</p>
              <p className="text-sm text-neutral-500 mb-8">Add some beautiful pieces to get started.</p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-[#d6b46a] text-black border border-amber-400/30 text-sm font-semibold shadow-[0_20px_60px_rgba(214,180,106,0.3)]"
              >
                Continue Shopping
              </motion.button>
            </motion.div>
          ) : (
            <div className="px-6 py-4 space-y-4">
              <AnimatePresence mode="popLayout">
                {cartItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="group relative flex gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/20 transition-all duration-300"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/10 bg-white/5 flex-shrink-0">
                      <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white text-sm font-medium truncate">{item.name}</h3>
                      <p className="text-neutral-500 text-xs mt-0.5">{item.finish}</p>
                      <p className="text-amber-400 text-sm font-semibold mt-2">Rs. {item.price.toLocaleString()}</p>
                      
                      <div className="flex items-center gap-2 mt-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-amber-400/20 transition-colors"
                        >
                          <Minus size={12} />
                        </motion.button>
                        <span className="text-white text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-amber-400/20 transition-colors"
                        >
                          <Plus size={12} />
                        </motion.button>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-3 right-3 text-neutral-600 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={14} />
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>

              {cartItems.length > 1 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={clearCart}
                  className="w-full py-2 text-xs text-neutral-500 hover:text-red-400 transition-colors"
                >
                  Clear All Items
                </motion.button>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <AnimatePresence>
          {cartItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative px-6 py-5 border-t border-white/5 bg-black/40 backdrop-blur-xl space-y-4"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-400">Subtotal</span>
                <span className="text-xl font-bold text-white">Rs. {cartTotal.toLocaleString()}</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={orderOnWhatsApp}
                className="group w-full py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_20px_60px_rgba(251,191,36,0.3)] hover:shadow-[0_25px_70px_rgba(251,191,36,0.4)] transition-shadow"
              >
                <span>Order on WhatsApp</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <p className="text-xs text-center text-neutral-600">
                Cash on Delivery • Free shipping above Rs. 2,000
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default CartSidebar;
