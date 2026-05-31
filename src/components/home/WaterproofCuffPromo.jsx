import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, ShieldCheck, Sparkles } from 'lucide-react';
import cuffPromoVideo from '../../assets/videos/home page ad video water.mp4';

const details = [
  {
    icon: <Droplets size={17} />,
    label: 'Waterproof cuffs',
  },
  {
    icon: <ShieldCheck size={17} />,
    label: 'Stainless steel',
  },
];

const WaterproofCuffPromo = () => {
  const sectionRef = useRef(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || shouldLoadVideo) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-neutral-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(214,180,106,0.14),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(255,255,255,0.06),transparent_26%)]" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-amber-200/15 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.48)] backdrop-blur-md sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:p-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[330px] sm:max-w-[360px] lg:max-w-[390px]"
        >
          <div className="pointer-events-none absolute -inset-4 rounded-[2rem] border border-amber-300/10 bg-amber-300/5 blur-xl" />
          <div className="relative aspect-[9/16] overflow-hidden rounded-[1.7rem] border border-white/15 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.58)]">
            {shouldLoadVideo && (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                aria-label="Luxara stainless steel cuff emerging from water"
                className="h-full w-full object-cover"
              >
                <source src={cuffPromoVideo} type="video/mp4" />
              </video>
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-200 backdrop-blur-md">
              <Sparkles size={13} />
              Luxara Cuffs
            </div>

            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-200">
                Gold & Silver
              </p>
              <p className="mt-1 font-serif text-xl text-white">
                Everyday shine.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300/90 backdrop-blur-md">
            The Waterproof Edit
          </span>

          <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
            Shine that moves
            <span className="block italic text-amber-200">with you.</span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
            Luxara stainless steel cuffs are made for everyday wear. Discover
            polished gold and silver finishes with an adjustable fit and a
            refined look that stays effortless.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-neutral-200"
              >
                <span className="text-amber-300">{detail.icon}</span>
                {detail.label}
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <motion.div whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/gift-sets"
                className="group inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-[#d6b46a] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-black shadow-[0_12px_40px_rgba(214,180,106,0.25)] transition-all duration-300 hover:bg-[#e0c07a]"
              >
                Explore Cuffs
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
              Gold. Silver. Everyday.
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WaterproofCuffPromo;
