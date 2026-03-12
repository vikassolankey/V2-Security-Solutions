import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { PageTransition } from '../components/PageTransition';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { QuoteForm } from '../components/QuoteForm';

export const Contact = () => {
  return (
    <PageTransition>
      <PageHero
        title="Contact V2 Security Solutions"
        subtitle="Get in touch with our experts for security solutions."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1920"
        breadcrumb={[{ name: 'Contact', href: '/contact' }]}
      />

      <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Send Us a Message</h2>
            <QuoteForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Company Details</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-2xl text-accent shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">Our Location</h4>
                    <p className="text-white/60 leading-relaxed">
                                  <span> House No 116 Ground Floor V2 Security Solutions Nearby Kajal Tailor Or Jai Hind Public School Street Number 3 Surya Vihar Part III Sector 91 Faridabad Haryana 121013 India</span>

                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-2xl text-accent shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">Call Us</h4>
                    <p className="text-white/60">+91 8802580311</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-2xl text-accent shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">Email Us</h4>
                    <p className="text-white/60">V2securitysolutions@Ggmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-80 w-full rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl">
              <iframe
                src="https://www.google.com/maps?q=V2%20Security%20Solutions%20Surya%20Vihar%20Faridabad&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};
