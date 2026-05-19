import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const HERO_MESSAGES = [
  {
    eyebrow: 'New Collection 2025',
    title: 'Timeless',
    accent: 'Elegance.',
    copy: 'Anti-tarnish stainless steel jewelry. Waterproof. Skin-safe. Designed for everyday wear.',
  },
  {
    eyebrow: 'Waterproof Luxury',
    title: 'Everyday',
    accent: 'Shine.',
    copy: 'Pieces made to move with you, from morning plans to late-night dinners.',
  },
  {
    eyebrow: 'Skin-Safe Finish',
    title: 'Quiet',
    accent: 'Statement.',
    copy: 'Premium gold tones, clean silhouettes, and comfort that feels effortless.',
  },
];

const textMotion = {
  initial: { opacity: 0, y: 18, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -16, filter: 'blur(10px)' },
};

const HeroContentRotator = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMessage = HERO_MESSAGES[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % HERO_MESSAGES.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="inline-flex items-center gap-3 border-l border-amber-300/70 pl-4">
        <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.9)]" />
        <AnimatePresence mode="wait">
          <motion.p
            key={activeMessage.eyebrow}
            variants={textMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-200"
          >
            {activeMessage.eyebrow}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-8 min-h-[10.5rem] sm:min-h-[12.5rem] lg:min-h-[15.5rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeMessage.title}-${activeMessage.accent}`}
            variants={textMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl font-serif font-light leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {activeMessage.title} <br />
              <span className="italic font-normal text-neutral-100">{activeMessage.accent}</span>
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="min-h-[5rem] max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeMessage.copy}
            variants={textMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="text-base leading-8 text-neutral-300 sm:text-lg"
          >
            {activeMessage.copy}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroContentRotator;
