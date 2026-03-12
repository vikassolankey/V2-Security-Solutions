import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FaShieldAlt, FaBars, FaTimes, FaInstagram, FaFacebook, FaPinterest, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Clients', href: '/clients' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={isHidden && !isMobileMenuOpen ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        'sticky top-0 z-50 transition-all duration-300 px-4 md:px-12 flex justify-between items-center',
        isScrolled ? 'bg-primary/80 backdrop-blur-xl border-b border-white/5 py-1' : 'bg-transparent py-2'
      )}
    >
      <motion.div whileTap={{ scale: 0.95 }}>
        <Link to="/" className="flex items-center group cursor-pointer">
          <img src="/gallery/logo.png" alt="V2 Security Solutions Logo" className="h-20 w-auto object-contain" />
        </Link>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) => cn(
              "relative text-sm font-medium transition-colors group",
              isActive ? "text-accent" : "text-white/80 hover:text-white"
            )}
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </NavLink>
        ))}
        <div className="flex items-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors"><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors"><FaFacebook /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors"><FaPinterest /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors"><FaYoutube /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors"><FaTwitter /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors"><FaLinkedin /></a>
        </div>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden md:hidden"
          >
            <div className="p-8 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => cn(
                      "text-2xl font-display font-bold transition-colors block py-2",
                      isActive ? "text-accent" : "text-white/80 hover:text-accent"
                    )}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4"
              >
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="bg-accent text-white px-6 py-4 rounded-2xl font-bold text-center block text-lg shadow-xl shadow-accent/20 active:scale-95 transition-transform"
                >
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
