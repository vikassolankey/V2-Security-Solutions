import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { QuoteForm } from './QuoteForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, title = "Get a Free Quote" }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-secondary border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 blur-3xl" />
            
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors text-2xl"
            >
              <FaTimes />
            </button>

            <div className="relative z-10">
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Request Quote</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">{title}</h2>
              <QuoteForm />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
