import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { PageTransition } from '../components/PageTransition';
import { 
  FaVideo, FaFireExtinguisher, FaFingerprint, FaVolumeUp, 
  FaTint, FaWind, FaBiohazard, FaBug, FaLaptopCode, FaBuilding 
} from 'react-icons/fa';

const services = [
  {
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800',
    title: 'CCTV Systems',
    desc: 'Closed Circuit Television systems used for surveillance and monitoring with IP and analog cameras.',
  },
  {
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800',
    title: 'Fire Alarm Panels',
    desc: 'Advanced fire detection systems that detect smoke and trigger alarms for early fire protection.',
  },
  {
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    title: 'Access Control Systems',
    desc: 'Systems that restrict and manage entry to buildings using authentication methods.',
  },
  {
    image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=800',
    title: 'Public Address System',
    desc: 'Microphones, amplifiers, and speakers used to broadcast announcements.',
  },
  {
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800',
    title: 'Water Leakage Detection',
    desc: 'Sensors used to detect water leaks and prevent property damage.',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.GyZjjTDMCCJlZRvG_Q1FjAHaHa?w=173&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3',
    title: 'VESDA System',
    desc: 'Very Early Smoke Detection Apparatus technology used in high-risk environments.',
  },
  {
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    title: 'Gas Suppression System',
    desc: 'Fire suppression systems using gases like FM200 and clean agents.',
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    title: 'Rodent Control System',
    desc: 'Ultrasonic technology systems used to prevent rodent damage.',
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    title: 'IT & Management Systems',
    desc: 'Server and IT infrastructure monitoring and management.',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    title: 'Building Management (BMS)',
    desc: 'Centralized monitoring of building operations like temperature, ventilation, and energy.',
  },
];

export const Services = () => {
  return (
    <PageTransition>
      <PageHero
        title="Our Security Solutions"
        subtitle="Comprehensive fire and security systems for modern infrastructure."
        image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1920"
        breadcrumb={[{ name: 'Services', href: '/services' }]}
      />

      <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-3xl group cursor-pointer overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};
