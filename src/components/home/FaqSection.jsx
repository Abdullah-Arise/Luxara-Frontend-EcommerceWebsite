import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Will the jewelry turn black or tarnish?",
    answer: "Never. Luxara uses Stainless Steel 316L with PVD coating — it bonds permanently to the surface and doesn't react to water, sweat, or air. This is not regular plated jewelry."
  },
  {
    question: "Is it actually waterproof?",
    answer: "Yes. You can shower, swim, and sweat in it. Surgical steel 316L is completely waterproof. The color and finish will not change with water exposure."
  },
  {
    question: "How do I choose my size?",
    answer: "Our rings are adjustable and fit most finger sizes. For bracelets, standard size is 7 inches (fits most wrists). Need a custom size? Leave a note on your WhatsApp order."
  },
  {
    question: "Do you offer Cash on Delivery?",
    answer: "Yes, COD is available all over Pakistan. You pay when the package arrives at your door — no advance payment needed."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 7-day exchange for damaged or incorrect items. If the color changes within 6 months of normal wear, we replace it — no questions asked. That's our Shine Promise."
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08),transparent_25%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mb-14 text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300/90 backdrop-blur-md">
            Support
          </span>
          <h2 className="mt-5 font-serif text-3xl text-white md:text-5xl">You Ask, We Answer</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-neutral-400">
            Everything you need to know about our jewelry, shipping, and sizing.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-md"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -2 }}
              className="border-b border-white/10 last:border-b-0"
            >
              <button
                className="group flex w-full items-center justify-between px-6 py-6 text-left focus:outline-none md:px-8"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span
                  className={`pr-4 font-serif text-base transition-colors duration-300 md:text-lg ${
                    openIndex === index ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 rounded-full border p-2 transition-all duration-300 ${
                    openIndex === index
                      ? 'rotate-180 border-amber-400/40 bg-amber-400 text-black'
                      : 'border-white/10 bg-white/5 text-white group-hover:border-white/20 group-hover:bg-white/10'
                  }`}
                >
                  <ChevronDown size={16} />
                </span>
              </button>

              <div
                className={`overflow-hidden px-6 transition-all duration-500 ease-in-out md:px-8 ${
                  openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                }`}
              >
                <p className="pr-8 text-sm leading-relaxed text-neutral-400">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10 text-center">
          <motion.div whileHover={{ scale: 1.02, y: -3 }} transition={{ duration: 0.25 }} className="inline-block">
            <Link
              to="/faqs"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-md transition-colors duration-300 hover:border-white/20 hover:bg-white/10"
            >
              View All FAQs
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FaqSection;