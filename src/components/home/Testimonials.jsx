import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Heart, Star, X, ZoomIn } from 'lucide-react';

const testimonialImage = (fileName) =>
  `/testimonials%20pics/${encodeURIComponent(fileName)}`;

const customerNotes = [
  { id: 1, name: 'Abdul Basit', location: 'Lahore', image: testimonialImage('abdul basit lahore.webp') },
  { id: 2, name: 'Alishba', location: 'Lahore', image: testimonialImage('alishba lahore.webp') },
  { id: 3, name: 'Amna', location: 'Lahore', image: testimonialImage('amna lahore.webp') },
  { id: 4, name: 'Areeba', location: 'Lahore', image: testimonialImage('areeba from lahore.webp') },
  { id: 5, name: 'Ayesha', location: 'Lahore', image: testimonialImage('ayesha from lahore.webp') },
  { id: 6, name: 'Fatima', location: 'Lahore', image: testimonialImage('fatima from lahore.webp') },
  { id: 7, name: 'Hafsa', location: 'Lahore', image: testimonialImage('hafsa lahore.webp') },
  { id: 8, name: 'Hamza Majeed', location: 'Lahore', image: testimonialImage('hamza majeed lahore.webp') },
  { id: 9, name: 'Khadija', location: 'Lahore', image: testimonialImage('khadija lahore.webp') },
  { id: 10, name: 'Laiba', location: 'Lahore', image: testimonialImage('laiba lahore.webp') },
  { id: 11, name: 'Sadia', location: 'Lahore', image: testimonialImage('sadia lahore.webp') },
  { id: 12, name: 'Scheeza', location: 'Lahore', image: testimonialImage('scheeza lahore.webp') }
];

const CustomerNoteCard = ({ note, onOpen, duplicate = false }) => (
  <motion.button
    type="button"
    onClick={() => onOpen(note)}
    tabIndex={duplicate ? -1 : 0}
    aria-hidden={duplicate || undefined}
    aria-label={`Open customer note from ${note.name}`}
    whileHover={{ y: -8, scale: 1.015 }}
    whileTap={{ scale: 0.985 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    className="group w-[270px] shrink-0 overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.055] p-2.5 text-left shadow-[0_20px_70px_rgba(0,0,0,0.38)] backdrop-blur-md transition-colors duration-300 hover:border-amber-300/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/80 sm:w-[300px]"
  >
    <div className="relative h-[360px] overflow-hidden rounded-[19px] bg-black/55 sm:h-[400px]">
      <img
        src={note.image}
        alt={`${note.name}'s Luxara customer note`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
      <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-colors duration-300 group-hover:border-amber-300/45 group-hover:text-amber-200">
        <ZoomIn size={16} />
      </span>
    </div>

    <div className="flex items-end justify-between gap-3 px-2 pb-1 pt-4">
      <div>
        <h3 className="font-serif text-xl tracking-wide text-white">{note.name}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300/85">
          <Heart size={12} fill="currentColor" />
          Happy Luxara Customer
        </p>
      </div>
      <span className="pb-0.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-neutral-500">
        {note.location}
      </span>
    </div>
  </motion.button>
);

const Testimonials = () => {
  const [activeNote, setActiveNote] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const carouselGroups = shouldReduceMotion ? [0] : [0, 1];

  useEffect(() => {
    if (!activeNote) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveNote(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [activeNote]);

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.11),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.045),transparent_28%)]" />
      <div className="absolute left-1/2 top-0 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-300/35 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.34em] text-amber-300/90 backdrop-blur-md">
            <Star size={13} fill="currentColor" />
            Customer Love
          </span>
          <h2 className="mt-5 font-serif text-4xl text-white md:text-5xl">
            Messages We <span className="italic text-amber-300">Treasure.</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-neutral-400 md:text-base">
            Real notes from happy Luxara customers. Tap any message to take a closer look.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="relative mt-12 sm:mt-14"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-neutral-950 to-transparent sm:w-24 lg:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-neutral-950 to-transparent sm:w-24 lg:w-36" />

        <div className={shouldReduceMotion ? 'overflow-x-auto pb-4' : 'overflow-hidden pb-4'}>
          <motion.div
            className="flex w-max"
            animate={shouldReduceMotion ? undefined : { x: ['0%', '-50%'] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 58, ease: 'linear', repeat: Infinity }
            }
          >
            {carouselGroups.map((group) => (
              <div
                key={group}
                className="flex shrink-0 gap-5 pr-5"
                aria-hidden={group === 1 || undefined}
              >
                {customerNotes.map((note) => (
                  <CustomerNoteCard
                    key={`${group}-${note.id}`}
                    note={note}
                    duplicate={group === 1}
                    onOpen={setActiveNote}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {activeNote && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Customer note from ${activeNote.name}`}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveNote(null)}
          >
            <motion.div
              className="relative max-h-[92vh] w-full max-w-lg overflow-hidden rounded-[28px] border border-white/15 bg-neutral-950 shadow-[0_30px_120px_rgba(0,0,0,0.72)]"
              initial={{ opacity: 0, y: 28, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur-md">
                <div>
                  <h3 className="font-serif text-xl tracking-wide text-white">{activeNote.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300/85">
                    <Heart size={12} fill="currentColor" />
                    Happy Luxara Customer
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveNote(null)}
                  aria-label="Close customer note"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 transition-colors duration-300 hover:border-amber-300/40 hover:text-amber-200"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="max-h-[78vh] overflow-y-auto bg-black/40 p-3">
                <img
                  src={activeNote.image}
                  alt={`${activeNote.name}'s Luxara customer note`}
                  className="mx-auto h-auto w-full rounded-[18px]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
