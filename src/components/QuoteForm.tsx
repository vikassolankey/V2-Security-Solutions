import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export const QuoteForm = () => {
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
    .then((result) => {
        setSubmissionStatus({ success: true, message: 'Message sent successfully! We will get back to you shortly.' });
        form.current?.reset();
    }, (error) => {
        setSubmissionStatus({ success: false, message: 'Failed to send message. Please try again later.' });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        required
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
      />
      <button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-red-700 text-white font-bold py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:bg-gray-500 disabled:cursor-not-allowed">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {submissionStatus && (
        <div className={`mt-4 p-4 rounded-2xl flex items-center gap-4 ${submissionStatus.success ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
          {submissionStatus.success ? <FaCheckCircle /> : <FaExclamationCircle />}
          <span>{submissionStatus.message}</span>
        </div>
      )}
    </form>
  );
};
