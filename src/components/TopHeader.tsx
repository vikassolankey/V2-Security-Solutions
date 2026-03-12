import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaIdCard } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const TopHeader = () => {
  return (
    <div className="bg-primary border-b border-white/5 py-2 px-4 md:px-12 flex flex-wrap justify-between items-center text-[10px] md:text-xs text-white/70 font-medium">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <FaIdCard className="text-accent" />
          <span>GST No: 06CQSPS6481H1Z1</span>
        </div>
      </div>
       <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <FaIdCard className="text-accent" />
          <span>UDYAM-HR-03-0137751</span>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        <motion.a 
          whileTap={{ scale: 0.95 }}
          href="mailto:info@v2securitysolutions.com" 
          className="flex items-center gap-1.5 hover:text-accent transition-colors"
        >
          <FaEnvelope className="text-accent" />
          <span>V2securitysolutions@gmail.com</span>
        </motion.a>
        <motion.a 
          whileTap={{ scale: 0.95 }}
          href="tel:+919999999999" 
          className="flex items-center gap-1.5 hover:text-accent transition-colors"
        >
          <FaPhoneAlt className="text-accent" />
          <span>+91 8802580311</span>
        </motion.a>
      </div>
    </div>
  );
};
