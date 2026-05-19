import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Droplets, Wind, Sparkles, AlertTriangle } from 'lucide-react';

const doList = [
  "Wear it in the shower — stainless steel loves water",
  "Clean with a soft dry cloth after heavy use",
  "Store in the Luxara box or a small zip pouch",
  "Wear it to the gym, pool, or beach — no problem",
  "Layer multiple pieces together freely",
];

const dontList = [
  "Don't use harsh chemicals or bleach to clean",
  "Don't store in direct sunlight for long periods",
  "Don't use abrasive cloths that can scratch the surface",
  "Don't expose to perfume or hairspray directly on the piece",
];

const tips = [
  {
    icon: <Droplets size={24} />,
    title: "Water? No Problem.",
    desc: "Stainless Steel 316L is fully waterproof. Shower, swim, rain — none of it will affect the finish or color. This is not regular plated jewelry.",
  },
  {
    icon: <Wind size={24} />,
    title: "Daily Storage",
    desc: "Keep your jewelry in the Luxara gift box when not wearing. This prevents minor scratches and keeps the shine intact longer.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Cleaning",
    desc: "Simply wipe with a soft microfiber cloth. For stubborn residue, use a damp cloth — that's it. No special jewelry cleaner needed.",
  },
  {
    icon: <AlertTriangle size={24} />,
    title: "Avoid Chemicals",
    desc: "Perfumes, hairsprays, and lotions contain chemicals that can dull the surface over time. Put your jewelry on AFTER applying these.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const CareTips = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Tips Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {tips.map((tip, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-300">
                {tip.icon}
              </div>
              <h3 className="font-serif text-lg text-white mb-3">{tip.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{tip.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Do / Don't */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* Do */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          >
            <h3 className="font-serif text-2xl text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle size={20} className="text-emerald-400" />
              </div>
              You Can
            </h3>
            <ul className="space-y-4">
              {doList.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 text-sm text-neutral-300"
                >
                  <span className="text-emerald-400 mt-0.5 shrink-0 text-lg">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Don't */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          >
            <h3 className="font-serif text-2xl text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <XCircle size={20} className="text-red-400" />
              </div>
              Avoid This
            </h3>
            <ul className="space-y-4">
              {dontList.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 text-sm text-neutral-300"
                >
                  <span className="text-red-400 mt-0.5 shrink-0 text-lg">✗</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-500/10 to-amber-600/5 p-10 text-center backdrop-blur-md shadow-[0_20px_60px_rgba(212,175,55,0.15)]"
        >
          <p className="text-amber-300/90 text-[11px] uppercase tracking-[0.35em] mb-4 font-semibold">Our Guarantee</p>
          <p className="font-serif text-2xl md:text-3xl text-white font-light leading-relaxed">
            If the color changes within 6 months of normal wear — we replace it.{' '}
            <span className="text-amber-300 italic">No questions asked.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CareTips;
