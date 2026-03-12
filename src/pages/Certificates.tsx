import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { FaFileContract, FaDownload, FaCertificate } from 'react-icons/fa';

const certificates = [
  {
    title: 'GST Registration',
    id: '06XXXXXXXXXXXXX',
    issuer: 'Government of India',
    date: '2023',
    icon: <FaFileContract />,
    description: 'Goods and Services Tax registration certificate for V2 Security Solutions.',
    file: '/gallery/gst.pdf'
  },
  {
    title: 'Udyam Registration',
    id: 'UDYAM-HR-XX-XXXXXXX',
    issuer: 'Ministry of MSME',
    date: '2023',
    icon: <FaCertificate />,
    description: 'MSME registration certificate confirming our status as a registered enterprise.',
    file: '/gallery/udyam.pdf'
  },
];

export const Certificates = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Compliance
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-bold mb-6"
          >
            Our Certificates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            V2 Security Solutions is a fully compliant and registered entity. We maintain all necessary certifications to ensure the highest standards of service.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-accent/10 transition-all" />
              
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-3xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {cert.icon}
                </div>
                <motion.a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-accent hover:bg-white/10 transition-all"
                  title="View/Download Certificate"
                >
                  <FaDownload />
                </motion.a>
              </div>

              <h3 className="text-2xl font-display font-bold mb-2">{cert.title}</h3>
              <p className="text-accent font-mono text-sm mb-6">{cert.id}</p>
              
              <p className="text-white/60 mb-8 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex items-center gap-8 pt-6 border-t border-white/5">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Issued By</p>
                  <p className="text-sm font-bold">{cert.issuer}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Year</p>
                  <p className="text-sm font-bold">{cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-accent/10 border border-accent/20 text-center"
        >
          <p className="text-white/80">
            Need more information or specific compliance documents? 
            <a href="/contact" className="text-accent font-bold hover:underline ml-2">Contact our compliance team →</a>
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};
