import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroContentRotator from './HeroContentRotator';
import heroVideo from '../../assets/videos/hero1.mp4';

const Hero = () => {
  return (
    <section className="relative min-h-[520px] w-full overflow-hidden bg-neutral-950 min-[430px]:min-h-[560px] lg:min-h-[100svh]">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/banners/hero-main.webp"
          aria-label="Luxara collection hero video"
          className="h-full w-full object-cover object-center opacity-80 lg:opacity-70"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.08)_0%,rgba(5,5,5,0.16)_26%,rgba(5,5,5,0.76)_52%,rgba(10,10,10,0.98)_82%,rgba(10,10,10,1)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,5,5,0.96)_0%,rgba(5,5,5,0.82)_40%,rgba(5,5,5,0.28)_68%,rgba(5,5,5,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.68)_0%,rgba(5,5,5,0.36)_46%,rgba(5,5,5,0.08)_100%)] lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-neutral-950/90" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-start px-4 pb-4 pt-[6.65rem] min-[430px]:min-h-[560px] min-[430px]:pt-[7rem] sm:px-6 sm:pt-[20rem] md:pt-[22rem] lg:min-h-[100svh] lg:items-center lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-2xl lg:max-w-4xl"
        >
          <HeroContentRotator />

          <div className="mt-3 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18, mass: 0.9 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/shop"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-400/30 bg-[#d6b46a] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-black shadow-[0_10px_30px_rgba(214,180,106,0.25)] transition-all duration-300 hover:bg-[#e0c07a] sm:w-auto sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.28em]"
              >
                Shop Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18, mass: 0.9 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/about"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-black/35 px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-white/25 hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.28em]"
              >
                Our Story
              </Link>
            </motion.div>
          </div>

          <div className="mt-3.5 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-3 text-[10px] text-neutral-400 sm:mt-10 sm:gap-4 sm:pt-6 sm:text-sm">
            <div>
              <p className="text-lg font-light text-white sm:text-2xl">24/7</p>
              <p className="mt-1 uppercase tracking-[0.12em] sm:tracking-[0.22em]">Wearable luxury</p>
            </div>
            <div>
              <p className="text-lg font-light text-white sm:text-2xl">100%</p>
              <p className="mt-1 uppercase tracking-[0.12em] sm:tracking-[0.22em]">Skin-safe finish</p>
            </div>
            <div>
              <p className="text-lg font-light text-white sm:text-2xl">Modern</p>
              <p className="mt-1 uppercase tracking-[0.12em] sm:tracking-[0.22em]">Everyday statement</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
