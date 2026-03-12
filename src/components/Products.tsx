import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'CCTV Systems',
    types: ['IP Based CCTV', 'Analog CCTV'],
    brands: ['Samsung', 'Hikvision', 'CP Plus', 'Dahua', 'Honeywell', 'W-box'],
  },
  {
    title: 'Access Control Systems',
    types: ['Biometric', 'RFID', 'Smart Card'],
    brands: ['Time Watch', 'Essl', 'Honeywell', 'Spectra', 'HID'],
  },
  {
    title: 'Fire Alarm Panels',
    types: ['Addressable', 'Conventional'],
    brands: ['Honeywell', 'EST', 'Apollo', 'Agni', 'Ravel'],
  },
];

export const Products = () => {
  return (
    <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Technology</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold">World-Class Brands & Tech</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {techCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-card p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-accent">{cat.title}</h3>
            
            <div className="mb-8">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Categories</p>
              <div className="flex flex-wrap gap-2">
                {cat.types.map((type, i) => (
                  <span key={i} className="bg-white/5 px-3 py-1 rounded-full text-xs border border-white/10">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Trusted Brands</p>
              <div className="grid grid-cols-2 gap-4">
                {cat.brands.map((brand, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
