import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  breadcrumb: { name: string; href: string }[];
}

export const PageHero = ({ title, subtitle, image, breadcrumb }: PageHeroProps) => {
  return (
    <section className="relative h-[400px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <nav className="flex mb-6 text-sm font-medium text-white/60">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <span className="mx-2">/</span>
                <Link to={item.href} className="hover:text-accent transition-colors">
                  {item.name}
                </Link>
              </React.Fragment>
            ))}
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
};
