import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const HERO_JEWELRY_IMAGE = '/canvas/hero-jewelry.png';

const JewelryFallback = () => (
  <div className="flex aspect-[2/1] w-full items-center justify-center">
    <div className="relative h-28 w-56 rounded-full border border-amber-300/30 bg-amber-300/5 shadow-[0_0_80px_rgba(214,180,106,0.2)]">
      <div className="absolute left-1/2 top-1/2 h-16 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/35" />
      <div className="absolute left-1/2 top-1/2 h-8 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
    </div>
  </div>
);

const HeroJewelryShowcase = () => {
  const [imageFailed, setImageFailed] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 24, mass: 0.9 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 24, mass: 0.9 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);

  const handlePointerMove = (event) => {
    if (window.matchMedia('(max-width: 767px)').matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section className="relative overflow-hidden bg-neutral-950 px-4 pb-7 pt-0 sm:px-6 sm:py-16 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,180,106,0.10),transparent_44%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/35 p-3 shadow-[0_34px_120px_rgba(0,0,0,0.48)] backdrop-blur-xl sm:rounded-[1.75rem] sm:p-6"
        >
          <motion.div
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
            style={{ rotateX, rotateY, transformPerspective: 1200 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative mx-auto flex aspect-[2/1] w-full max-w-4xl items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#050505] sm:rounded-[1.25rem]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,180,106,0.24),transparent_56%)]" />
            <div className="absolute left-1/2 top-1/2 h-[72%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/12 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_32%,rgba(214,180,106,0.08)_76%,transparent)]" />

            <div className="relative z-10 flex h-full w-full items-center justify-center p-4 sm:p-7 md:p-9">
              {imageFailed ? (
                <JewelryFallback />
              ) : (
                <motion.img
                  src={HERO_JEWELRY_IMAGE}
                  alt="Luxara jewellery showcase"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  onError={() => setImageFailed(true)}
                  animate={{ scale: [1, 1.018, 1] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-full w-full object-contain opacity-100 drop-shadow-[0_28px_72px_rgba(214,180,106,0.28)]"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroJewelryShowcase;
