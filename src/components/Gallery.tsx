import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = Array.from({ length: 12 }, (_, i) => `/gallery/g${i + 1}.jpeg`);

const Marquee = ({ images, speed = 20000 }) => {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: ['-100%', '0%'],
          transition: {
            ease: 'linear',
            duration: speed / 1000,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedImages.map((src, index) => (
          <img key={index} src={src} alt={`Gallery image ${index + 1}`} className="h-64 w-auto mx-4 rounded-2xl shadow-lg" />
        ))}
      </motion.div>
    </div>
  );
};

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24">
      <div className="text-center mb-16 max-w-3xl mx-auto px-4">
        <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Showcase</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold">Our Recent Projects</h2>
        <p className="text-white/60 mt-4 text-lg">Here is a selection of our recently completed projects, showcasing our commitment to quality and excellence in security solutions.</p>
      </div>

      <div className="space-y-8">
        <Marquee images={galleryImages.slice(0, 6)} speed={25000} />
        <Marquee images={galleryImages.slice(6, 12)} speed={30000} />
      </div>
    </section>
  );
};
