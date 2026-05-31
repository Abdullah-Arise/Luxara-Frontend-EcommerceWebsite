import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ShieldCheck, Sparkles, Truck } from 'lucide-react';

const reasons = [
  {
    icon: <Crown size={22} />,
    title: 'Luxury Craftsmanship',
    desc: 'Each Luxara piece is thoughtfully designed with elegant detail and a refined finish.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Premium Materials',
    desc: 'Our handmade beads and stainless steel cuffs are selected to create pieces that feel special.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Trusted Quality',
    desc: 'From design to final polish, every piece is made to deliver beauty, comfort, and durability.',
  },
  {
    icon: <Truck size={22} />,
    title: 'Smooth Delivery',
    desc: 'Secure packaging and fast nationwide shipping make your Luxara experience effortless.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="bg-neutral-950 px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl"
      >
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-amber-300">
            Why choose us
          </p>

          <h2 className="text-3xl font-serif font-light leading-snug text-white md:text-4xl">
            Crafted for women who love
            <span className="italic text-neutral-200"> timeless elegance</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-neutral-400 md:text-base">
            At Luxara, we blend sophistication, quality, and care to create bracelets
            and cuffs that feel luxurious for every day and memorable for every moment.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.32)]"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-300 transition-all duration-300 group-hover:border-amber-300/30 group-hover:bg-amber-400/10 group-hover:text-amber-200">
                {reason.icon}
              </div>

              <h3 className="text-xl font-serif text-white">{reason.title}</h3>

              <p className="mt-3 text-sm leading-7 text-neutral-400">{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
