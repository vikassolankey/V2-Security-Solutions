import React from 'react';
import { motion } from 'framer-motion';

import { 
  FaVideo, FaFireExtinguisher, FaFingerprint, FaVolumeUp, 
  FaTint, FaWind, FaBiohazard, FaBug, FaLaptopCode, FaBuilding 
} from 'react-icons/fa';

const services = [
  {
    icon: <FaVideo />,
    title: 'CCTV Systems',
    desc: 'High-definition surveillance with remote monitoring and AI analytics.',
  },
  {
    icon: <FaFireExtinguisher />,
    title: 'Fire Alarm Panels',
    desc: 'Early detection and rapid response systems for fire emergencies.',
  },
  {
    icon: <FaFingerprint />,
    title: 'Access Control',
    desc: 'Biometric and smart card solutions for secure entry management.',
  },
  {
    icon: <FaVolumeUp />,
    title: 'PA Systems',
    desc: 'Public announcement systems for clear communication and alerts.',
  },
  {
    icon: <FaTint />,
    title: 'Water Leakage',
    desc: 'Advanced sensors to detect and alert water leaks in critical areas.',
  },
  {
    icon: <FaWind />,
    title: 'VESDA Systems',
    desc: 'Very Early Smoke Detection Apparatus for high-sensitivity areas.',
  },
  {
    icon: <FaBiohazard />,
    title: 'Gas Suppression',
    desc: 'Automated gas-based fire extinguishing for server rooms.',
  },
  {
    icon: <FaBug />,
    title: 'Rodent Systems',
    desc: 'Ultrasonic pest repellent systems for sensitive equipment.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'IT & Management',
    desc: 'Comprehensive IT infrastructure and security management.',
  },
  {
    icon: <FaBuilding />,
    title: 'BMS Systems',
    desc: 'Smart Building Management Systems for integrated control.',
  },
];

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
      whileTap={{ scale: 0.95 }}
      className="glass-card p-8 rounded-3xl group cursor-pointer relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-accent/20 transition-all" />
      
      <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-2xl text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
        {service.icon}
      </div>
      
      <h3 className="text-xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
        {service.title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">
        {service.desc}
      </p>
      
      <div className="mt-8 flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
        Learn More <span>→</span>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Comprehensive Security Solutions</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
