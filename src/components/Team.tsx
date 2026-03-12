import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Manish', role: 'software programmer and project lead', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mayank', role: 'Technical engineer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Balinder', role: 'accountant', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Vinod', role: 'Technical engineer', img: 'https://www.bing.com/th/id/OIP.PVG_feoxG4TRD0NbnRNhygHaLH?w=110&h=128&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2' },
  { name: 'Arsh', role: 'Techinacal engineer ', img: 'https://www.bing.com/th/id/OIP.iWkNxBzjhECKxcuqs8Nh-wHaHa?w=117&h=128&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2' },
];

const TeamMarquee = ({ members, speed = 30000 }: { members: typeof teamMembers, speed?: number }) => {
  const duplicatedMembers = [...members, ...members];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-8"
        animate={{
          x: ['-100%', '0%'],
          transition: {
            ease: 'linear',
            duration: speed / 1000,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedMembers.map((member, index) => (
          <div key={index} className="flex-shrink-0 w-80 glass-card rounded-3xl overflow-hidden p-6 hover:border-accent transition-colors">
            <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            <div className="text-center">
              <h4 className="text-xl font-display font-bold text-white mb-2">{member.name}</h4>
              <p className="text-accent font-bold tracking-widest uppercase text-xs">{member.role}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const Team = () => {
  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="text-center mb-16 max-w-3xl mx-auto px-4">
        <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Team</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold">The Experts Behind V2 Security</h2>
        <p className="text-white/60 mt-4 text-lg">Our dedicated team works around the clock to ensure the highest standards of safety and security for our valued clients.</p>
      </div>

      <div className="space-y-12">
        <TeamMarquee members={teamMembers} speed={40000} />
      </div>
    </section>
  );
};
