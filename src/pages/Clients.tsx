import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { PageTransition } from '../components/PageTransition';
import { FaQuoteLeft } from 'react-icons/fa';

const clients = [
  { name: 'National Gallery of Modern Art', location: 'Delhi' },
  { name: 'Indus Valley Partners', location: 'Noida' },
  { name: 'Silver Arrow Automobile', location: 'Noida' },
  { name: 'Apollo Hospital', location: 'Delhi' },
  { name: 'Galgotias University', location: 'Greater Noida' },
  { name: 'W.M', location: 'Gurgaon' },
  { name: 'HDFC Bank', location: 'Gurgaon' },
  { name: 'Haldiram Cafe', location: 'Indore' },
  { name: 'Din Engineering Services', location: 'Noida' },
  { name: 'FBD One', location: 'Faridabad' },
];

const testimonials = [
  {
    text: "V2 Security Solutions provided excellent CCTV installation service for our office. Their team was professional and the quality is top-notch.",
    author: "Project Manager",
    company: "Corporate Client"
  },
  {
    text: "The fire alarm system installed by V2 is highly reliable. We feel much safer knowing we have their advanced technology protecting us.",
    author: "Facility Head",
    company: "Industrial Unit"
  },
  {
    text: "Excellent support and integrated security solutions. They understood our requirements perfectly and delivered on time.",
    author: "Director",
    company: "Educational Institution"
  }
];

export const Clients = () => {
  return (
    <PageTransition>
      <PageHero
        title="Our Valuable Clients"
        subtitle="Organizations that trust our security solutions."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
        breadcrumb={[{ name: 'Clients', href: '/clients' }]}
      />

      <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-24">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,0,0,0.5)' }}
              className="glass p-8 rounded-3xl flex flex-col items-center justify-center text-center h-40 border border-white/5 group"
            >
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors relative z-10">
                {client.name}
              </span>
              <span className="text-[10px] text-accent font-bold uppercase tracking-widest mt-2 relative z-10">
                {client.location}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
          <p className="text-white/60">Real feedback from organizations we've secured.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-3xl relative"
            >
              <FaQuoteLeft className="text-4xl text-accent/20 absolute top-8 left-8" />
              <p className="text-lg text-white/80 italic mb-8 relative z-10">"{t.text}"</p>
              <div>
                <p className="font-bold text-white">{t.author}</p>
                <p className="text-sm text-accent">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};
