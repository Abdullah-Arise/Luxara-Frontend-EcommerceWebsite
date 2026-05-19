import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBgImage from '../../assets/gemini 2.png';
import HeroContentRotator from './HeroContentRotator';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <img
          src={heroBgImage}
          alt="Luxara Collection"
          fetchPriority="high"
          className="h-full w-full object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.78)_42%,rgba(5,5,5,0.34)_70%,rgba(5,5,5,0.62)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-neutral-950" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <HeroContentRotator />

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18, mass: 0.9 }}
            >
              <Link
                to="/shop"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-amber-400/30 bg-[#d6b46a] px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-black transition-all duration-300 hover:bg-[#e0c07a] shadow-[0_10px_30px_rgba(214,180,106,0.25)]"
              >
                Shop Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18, mass: 0.9 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/30 px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:border-white/25 hover:bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                Our Story
              </Link>
            </motion.div>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 border-t border-white/10 pt-6 text-sm text-neutral-400 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-light text-white">24/7</p>
              <p className="mt-1 uppercase tracking-[0.22em]">Wearable luxury</p>
            </div>
            <div>
              <p className="text-2xl font-light text-white">100%</p>
              <p className="mt-1 uppercase tracking-[0.22em]">Skin-safe finish</p>
            </div>
            <div>
              <p className="text-2xl font-light text-white">Modern</p>
              <p className="mt-1 uppercase tracking-[0.22em]">Everyday statement</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
