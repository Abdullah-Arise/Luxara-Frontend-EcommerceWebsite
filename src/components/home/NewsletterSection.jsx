import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

// ==========================================
// NEWSLETTER SECTION
// Home.jsx mein Footer ke UPAR add karo
// ==========================================

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      // TODO: Yahan apna email service connect karo (Mailchimp / EmailJS etc.)
      // Abhi ke liye sirf UI show karta hai
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="relative overflow-hidden bg-neutral-950 px-4 py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.1),transparent_28%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mx-auto max-w-4xl"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-12 text-center shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-md sm:px-10 md:px-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
            className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-amber-300/90"
          >
            Stay in the loop
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="mb-4 font-serif text-3xl font-light leading-snug text-white md:text-5xl"
          >
            New drops. Exclusive offers.<br />
            <span className="text-amber-300 italic">You first.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="mb-10 text-sm font-light leading-relaxed text-neutral-400"
          >
            Join the Luxara inner circle. Be the first to know about new collections,<br className="hidden md:block" />
            limited editions, and subscriber-only discounts.
          </motion.p>

          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="Enter your email address"
                className="flex-1 rounded-full border border-white/10 bg-black/30 px-5 py-4 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <motion.button
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.99 }}
                onClick={handleSubmit}
                className="flex items-center justify-center gap-2 rounded-full border border-amber-400/30 bg-[#d6b46a] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-black shadow-[0_12px_40px_rgba(214,180,106,0.25)] transition-all duration-300 hover:bg-[#e0c07a] whitespace-nowrap"
              >
                Subscribe <ArrowRight size={14} />
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-5 py-4 text-emerald-300 backdrop-blur-md"
            >
              <CheckCircle size={20} />
              <span className="text-sm tracking-wide">You're in! Welcome to Luxara. ✨</span>
            </motion.div>
          )}

          <p className="mt-5 text-xs tracking-[0.2em] text-neutral-500">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;