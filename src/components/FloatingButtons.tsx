import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <motion.a
        href="tel:+918802580311"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-accent hover:bg-red-700 text-white flex items-center justify-center rounded-full shadow-lg shadow-accent/30"
      >
        <FaPhone className="text-2xl" />
      </motion.a>
      <motion.a
        href="https://wa.me/918802580311"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center rounded-full shadow-lg shadow-green-500/30"
      >
        <FaWhatsapp className="text-3xl" />
      </motion.a>
    </div>
  );
};