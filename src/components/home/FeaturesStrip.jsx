import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Hammer, Truck, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Gem size={30} />,
    title: 'Handmade Beads',
    desc: 'Assembled individually with care.',
  },
  {
    icon: <Hammer size={30} />,
    title: 'Gold & Silver Cuffs',
    desc: 'Polished stainless steel finishes.',
  },
  {
    icon: <ShieldCheck size={30} />,
    title: 'Everyday Styling',
    desc: 'Distinct pieces made to layer.',
  },
  {
    icon: <Truck size={30} />,
    title: 'Fast Shipping',
    desc: 'Delivery all over Pakistan.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const FeaturesStrip = () => {
  return (
    <section className="bg-neutral-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-[0_20px_70px_rgba(0,0,0,0.4)] md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group rounded-[1.5rem] border border-white/10 bg-black/20 p-6 text-center transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.28)]"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-300 transition-all duration-300 group-hover:border-amber-300/30 group-hover:bg-amber-400/10 group-hover:text-amber-200">
                {feature.icon}
              </div>
              <h3 className="text-lg font-serif font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesStrip;
