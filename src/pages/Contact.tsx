import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { PageTransition } from '../components/PageTransition';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{ success: boolean; message: string } | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      (import.meta as any).env.VITE_EMAILJS_SERVICE_ID,
      (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID,
      form.current!,
      (import.meta as any).env.VITE_EMAILJS_USER_ID
    )
    .then(() => {
        setSubmissionStatus({ success: true, message: 'Message sent successfully! We will get back to you shortly.' });
        form.current?.reset();
    }, () => {
        setSubmissionStatus({ success: false, message: 'Failed to send message. Please try again later.' });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

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
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-accent hover:bg-red-700 text-white font-bold py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-accent/20 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submissionStatus && (
                <div className={`mt-4 p-4 rounded-2xl flex items-center gap-4 ${submissionStatus.success ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                  {submissionStatus.success ? <FaCheckCircle /> : <FaExclamationCircle />}
                  <span>{submissionStatus.message}</span>
                </div>
              )}
            </form>
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
                                  <span> House No 116 Ground Floor V2 Security Solutions Nearby Kajal Tailor Or Jai Hind Public School Street Number 3 Surya Vihar Part II Sector 91 Faridabad Haryana 121013 India</span>

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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112334.2353381617!2d77.23668102353148!3d28.37560018511746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a42427%3A0xec0669222471960!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1710200000000!5m2!1sen!2sin"
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
