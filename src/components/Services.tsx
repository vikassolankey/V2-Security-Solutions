import React from 'react';
import { motion } from 'framer-motion';

import { 
  FaVideo, FaFireExtinguisher, FaFingerprint, FaVolumeUp, 
  FaTint, FaWind, FaBiohazard, FaBug, FaLaptopCode, FaBuilding 
} from 'react-icons/fa';

const services = [
  {
    image: 'https://tse1.mm.bing.net/th/id/OIP.tgk2NT5MSKxmwQNbYEbKjwHaFF?rs=1&pid=ImgDetMain&o=7&rm=3',
    title: 'CCTV Systems',
    desc: 'High-definition surveillance with remote monitoring and AI analytics.',
  },
  {
    image: 'https://wallpaperaccess.com/full/9227700.jpg',
    title: 'Fire Alarm Panels',
    desc: 'Early detection and rapid response systems for fire emergencies.',
  },
  {
    image: 'https://tse4.mm.bing.net/th/id/OIP.vjvMg0iXoTclZZzO60qxNAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    title: 'Access Control',
    desc: 'Biometric and smart card solutions for secure entry management.',
  },
  {
    image: 'https://tse1.mm.bing.net/th/id/OIP.R0S1dSnA_btePIcbsiibbQHaHa?w=720&h=720&rs=1&pid=ImgDetMain&o=7&rm=3',
    title: 'PA Systems',
    desc: 'Public announcement systems for clear communication and alerts.',
  },
  {
    image: 'https://tse4.mm.bing.net/th/id/OIP.iP8URGGonO-fsTP_3t2e7AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    title: 'Water Leakage',
    desc: 'Advanced sensors to detect and alert water leaks in critical areas.',
  },
  {
    image: 'https://5.imimg.com/data5/GLADMIN/Default/2023/2/UY/HF/NZ/7452620/vesda-faast-aspirating-smoke-detector-1000x1000.jpg',
    title: 'VESDA Systems',
    desc: 'Very Early Smoke Detection Apparatus for high-sensitivity areas.',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.pOwGF1HsKF81M3_aOJjRQAHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    title: 'Gas Suppression',
    desc: 'Automated gas-based fire extinguishing for server rooms.',
  },
  {
    image: 'https://tse3.mm.bing.net/th/id/OIP.n4S1-eSxQn4jxw-P25mrDwHaEO?w=1006&h=575&rs=1&pid=ImgDetMain&o=7&rm=3',
    title: 'Rodent Systems',
    desc: 'Ultrasonic pest repellent systems for sensitive equipment.',
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    title: 'IT & Management',
    desc: 'Comprehensive IT infrastructure and security management.',
  },
  {
    image: 'https://tse1.mm.bing.net/th/id/OIP.DCyvSzxvrb2AD4BiMzrqgQHaEK?w=768&h=431&rs=1&pid=ImgDetMain&o=7&rm=3',
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
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.95 }}
      className="glass-card rounded-3xl group cursor-pointer relative overflow-hidden flex flex-col h-full"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6">
          {service.desc}
        </p>
        
        <div className="mt-auto flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest">
          Learn More <span>→</span>
        </div>
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
