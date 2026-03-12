import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { PageTransition } from '../components/PageTransition';
import { Owner } from '../components/Owner';
import { Team } from '../components/Team';
import { useInView } from 'react-intersection-observer';

const Counter = ({ value, label }: { value: string, label: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (inView) {
      const controls = animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [inView, target]);
  
  return (
    <div ref={ref} className="flex flex-col items-center p-8 glass-card rounded-3xl">
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        className="text-5xl font-display font-black text-accent mb-2"
      >
        {count}{suffix}
      </motion.span>
      <span className="text-sm text-white/60 font-bold uppercase tracking-widest text-center">{label}</span>
    </div>
  );
};

export const About = () => {
  return (
    <PageTransition>
      <PageHero
        title="About V2 Security Solutions"
        subtitle="Delivering reliable fire and security systems since 2022."
        image="https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=1920"
        breadcrumb={[{ name: 'About', href: '/about' }]}
      />

      <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Company Overview</h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                V2 Security Solutions, established in 2022, is a premier provider of essential safety and security equipment in Faridabad, Haryana. The company specializes in supplying advanced fire alarm systems, CCTV surveillance solutions, access control systems, and integrated building safety technologies.
              </p>
              <p>
                Our goal is to provide reliable security solutions that protect homes, businesses, and institutions with modern technology and professional service.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800"
              alt="Security Control Room"
              className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-accent">Our Mission</h3>
            <p className="text-lg text-white/70 leading-relaxed">
              Provide reliable, innovative, and high-quality fire and security solutions to ensure the safety of people and infrastructure.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-accent">Our Vision</h3>
            <p className="text-lg text-white/70 leading-relaxed">
              To become one of the most trusted security solution providers across India by delivering advanced technology and excellent customer support.
            </p>
          </motion.div>
        </div>

        <Owner />
        <Team />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter value="50+" label="Installations" />
          <Counter value="10+" label="Clients" />
          <Counter value="3+" label="Years Experience" />
          <Counter value="100%" label="Satisfaction" />
        </div>
      </section>
    </PageTransition>
  );
};
