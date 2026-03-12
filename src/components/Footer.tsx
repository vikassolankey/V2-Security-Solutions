import React from 'react';
import { FaShieldAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { VisitorCounter } from './VisitorCounter';
import { GoogleTranslate } from './GoogleTranslate';

export const Footer = () => {
  return (
    <footer className="bg-primary pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <img src="/gallery/logo.png" alt="V2 Security Solutions Logo" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Established in 2022, we are dedicated to providing cutting-edge security and fire safety solutions for residential and commercial spaces.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ scale: 1.1, backgroundColor: '#ff0000' }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
            <div className="mt-8">
              <VisitorCounter />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/50">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Clients', href: '/clients' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Certificates', href: '/certificates' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <GoogleTranslate />
            </div>
          </div>



          <div>
            <h4 className="text-lg font-display font-bold mb-8">Our Services</h4>
            <ul className="space-y-4 text-sm text-white/50">
              {['CCTV Systems', 'Fire Alarms', 'Access Control', 'PA Systems', 'BMS Systems'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="hover:text-accent transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-8">Contact Info</h4>
            <ul className="space-y-6 text-sm text-white/50">
              <li className="flex gap-4">
                <span className="text-accent">Add:</span>
                <span> House No 116 Ground Floor V2 Security Solutions Nearby Kajal Tailor Or Jai Hind Public School Street Number 3 Surya Vihar Part II Sector 91 Faridabad Haryana 121013 India</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent">Mail:</span>
                <span>info@v2securitysolutions.com</span>
                
                
              </li>
              <li className="flex gap-4">
                      <span className="text-accent">Mail:</span>
                <span>V2securitysolutions@gmail.com</span></li>
              <li className="flex gap-4">
                <span className="text-accent">Call:</span>
                <span>+91 8802580311</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-medium">
          <p>© 2026 V2 Security Solutions. All Rights Reserved.</p>
          <p><a href="https://webworldhub.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Designed by Web World Hub</a></p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
