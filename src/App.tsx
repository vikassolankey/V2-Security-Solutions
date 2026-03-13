import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { TopHeader } from './components/TopHeader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { FloatingButtons } from './components/FloatingButtons';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Clients } from './pages/Clients';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Certificates } from './pages/Certificates';
import { QuoteModal } from './components/QuoteModal';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  const [isAutoPopupOpen, setIsAutoPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAutoPopupOpen(true);
    }, 2000); // Show popup after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen selection:bg-accent selection:text-white flex flex-col overflow-x-hidden">
        <ScrollProgress />
        <ScrollToTop />
        <TopHeader />
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <BackToTop />
        <FloatingButtons />
        <QuoteModal 
          isOpen={isAutoPopupOpen} 
          onClose={() => setIsAutoPopupOpen(false)} 
          title="Welcome! Get a Free Quote"
        />
      </div>
    </Router>
  );
}
