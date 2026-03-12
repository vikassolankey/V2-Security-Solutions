import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
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
    <div ref={ref} className="flex flex-col items-center p-6 glass-card rounded-2xl">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl font-display font-black text-accent mb-2"
      >
        {count}{suffix}
      </motion.span>
      <span className="text-sm text-white/60 font-medium uppercase tracking-widest">{label}</span>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl group-hover:bg-accent/30 transition-all duration-500" />
          <img
            src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800"
            alt="Security Systems"
            className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-8 right-8 glass p-6 rounded-2xl border-accent/30">
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Established</p>
            <p className="text-2xl font-display font-black">2022</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
            Premier Provider of Safety & Security Equipment
          </h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed">
            V2 Security Solutions, established in 2022, is a premier provider of safety and security equipment located in Faridabad, Haryana. We specialize in advanced fire alarm systems and integrated security solutions for homes and businesses.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Counter value="50+" label="Projects" />
            <Counter value="10+" label="Clients" />
            <Counter value="3+" label="Years Exp" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
