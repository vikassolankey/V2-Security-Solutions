import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { PageTransition } from '../components/PageTransition';
import { FaSearchPlus, FaTimes } from 'react-icons/fa';

const galleryItems = Array.from({ length: 15}, (_, i) => ({
  url: `/gallery/g${i + 1}.jpeg`,
  title: `Gallery Image ${i + 1}`,
}));

export const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <PageTransition>
      <PageHero
        title="Our Work Gallery"
        subtitle="Security installations and projects completed by our team."
        image="https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=1920"
        breadcrumb={[{ name: 'Gallery', href: '/gallery' }]}
      />

      <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.url}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group aspect-[4/3] overflow-hidden rounded-3xl cursor-pointer"
                onClick={() => setSelectedImg(item.url)}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <FaSearchPlus className="text-4xl text-white mb-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300" />
                  <h4 className="text-white font-bold text-xl mb-1 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.title}
                  </h4>
                  
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-3xl text-white hover:text-accent transition-colors">
              <FaTimes />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImg}
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};
