import React from 'react';
import { motion } from 'framer-motion';

export const Owner = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/gallery/owner.png"
                alt="Our Owner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-display font-bold text-white mb-1">Mr. Harshpal Rawat</h3>
                <p className="text-accent font-bold tracking-widest uppercase text-sm">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Meet Our Leadership</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Visionary Behind V2 Security</h2>
              <p className="text-lg text-white/70 leading-relaxed">
                "Our mission at V2 Security Solutions is to bring peace of mind to every doorstep. We started with a simple goal: to make advanced security technology accessible and reliable for everyone in Faridabad and beyond. Today, we are proud to be a trusted name in the industry, driven by innovation and a commitment to excellence."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-2xl border-l-4 border-accent">
                <h4 className="text-xl font-display font-bold mb-2">10+ Years</h4>
                <p className="text-sm text-white/50">Industry Experience</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border-l-4 border-accent">
                <h4 className="text-xl font-display font-bold mb-2">500+</h4>
                <p className="text-sm text-white/50">Projects Delivered</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-accent/20"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
