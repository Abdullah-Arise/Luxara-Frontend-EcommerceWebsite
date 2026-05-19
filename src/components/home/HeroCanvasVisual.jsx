import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

const LuxuryCanvas = lazy(() => import('../three/LuxuryCanvas'));

const CanvasPlaceholder = () => (
  <div className="flex h-full min-h-[280px] w-full items-center justify-center">
    <div className="relative h-32 w-64 rounded-full border border-amber-300/25 bg-amber-300/5 shadow-[0_0_90px_rgba(214,180,106,0.22)]">
      <div className="absolute left-1/2 top-1/2 h-16 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/30" />
      <div className="absolute left-1/2 top-1/2 h-8 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
    </div>
  </div>
);

const HeroCanvasVisual = () => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    className="relative mx-auto h-[320px] w-full max-w-[620px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30 shadow-[0_34px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:h-[380px] lg:ml-auto lg:h-[520px]"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,180,106,0.16),transparent_58%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),transparent_28%,rgba(214,180,106,0.08)_72%,transparent)]" />
    <div className="relative h-full w-full">
      <Suspense fallback={<CanvasPlaceholder />}>
        <LuxuryCanvas />
      </Suspense>
    </div>
    <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-white/10" />
  </motion.div>
);

export default HeroCanvasVisual;
