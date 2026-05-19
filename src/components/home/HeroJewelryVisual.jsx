import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const HERO_JEWELRY_IMAGE = '/canvas/hero-jewelry.png';

const HeroVisualFallback = () => (
  <div className="flex h-full min-h-[220px] w-full items-center justify-center">
    <div className="relative h-28 w-56 rounded-full border border-amber-300/30 bg-amber-300/5 shadow-[0_0_80px_rgba(214,180,106,0.18)]">
      <div className="absolute left-1/2 top-1/2 h-16 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/35" />
      <div className="absolute left-1/2 top-1/2 h-8 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
    </div>
  </div>
);

const HeroJewelryVisual = () => {
  const [imageFailed, setImageFailed] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24, mass: 0.8 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24, mass: 0.8 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);

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
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="relative mx-auto w-full max-w-[620px] lg:ml-auto"
    >
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="group relative aspect-[2/1] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30 shadow-[0_34px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,180,106,0.22),transparent_58%)]" />
        <div className="absolute left-1/2 top-1/2 h-[80%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_28%,rgba(214,180,106,0.08)_72%,transparent)]" />

        <div className="relative flex h-full w-full items-center justify-center p-5 sm:p-7 md:p-8">
          {imageFailed ? (
            <HeroVisualFallback />
          ) : (
            <motion.img
              src={HERO_JEWELRY_IMAGE}
              alt="Luxara jewelry hero visual"
              loading="eager"
              decoding="async"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-contain drop-shadow-[0_30px_70px_rgba(214,180,106,0.22)]"
              draggable="false"
              animate={{ scale: [1, 1.018, 1] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-white/10" />
      </motion.div>
    </motion.div>
  );
};

export default HeroJewelryVisual;
