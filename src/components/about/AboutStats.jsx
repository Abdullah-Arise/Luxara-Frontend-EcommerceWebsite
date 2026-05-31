import React from 'react';

const stats = [
  { number: "500+", label: "Happy Customers" },
  { number: "2", label: "Signature Product Lines" },
  { number: "3–5", label: "Days Nationwide Delivery" },
  { number: "7-Day", label: "Exchange Policy" },
];

const AboutStats = () => {
  return (
    <section className="bg-[#0f0d0b] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center py-8 px-6">
              <p className="font-serif text-4xl text-amber-300 font-light mb-2">
                {stat.number}
              </p>
              <p className="text-[11px] uppercase tracking-widest text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
