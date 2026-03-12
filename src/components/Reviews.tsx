import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const reviews = [
  { name: 'Ravi Kumar', company: 'ABC Corp', review: 'V2 Security provided an excellent CCTV setup for our office. Professional and efficient service!', rating: 5 },
  { name: 'Sunita Sharma', company: 'XYZ Solutions', review: 'The fire alarm system they installed is top-notch. Their team was knowledgeable and helpful.', rating: 5 },
  { name: 'Amit Patel', company: 'Delhi Textiles', review: 'Access control is now seamless thanks to V2. I highly recommend their services.', rating: 4 },
  { name: 'Priya Singh', company: 'Gurgaon Logistics', review: 'The PA system is crystal clear. Great for our large warehouse.', rating: 5 },
  { name: 'Sanjay Gupta', company: 'Faridabad Industries', review: 'Their BMS solution has streamlined our building management. A truly integrated system.', rating: 5 },
  { name: 'Anjali Mehta', company: 'Noida IT Park', review: 'The rodent system has been surprisingly effective. No more chewed cables!', rating: 4 },
];

const ReviewMarquee = ({ reviews, speed = 40000 }: { reviews: { name: string; company: string; review: string; rating: number }[], speed?: number }) => {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-8"
        animate={{
          x: ['-100%', '0%'],
          transition: {
            ease: 'linear',
            duration: speed / 1000,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedReviews.map((review, index) => (
          <div key={index} className="flex-shrink-0 w-96 glass-card rounded-3xl p-8 border-t-4 border-accent">
            <FaQuoteLeft className="text-accent text-4xl mb-6" />
            <p className="text-white/80 mb-8 leading-relaxed italic">{review.review}</p>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-display font-bold text-white">{review.name}</h4>
                <p className="text-sm text-white/50">{review.company}</p>
              </div>
              <div className="flex gap-1 text-yellow-400">
                {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                {[...Array(5 - review.rating)].map((_, i) => <FaStar key={i} className="text-white/20" />)}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const Reviews = () => {
  return (
    <section className="py-24 bg-white/5">
      <div className="text-center mb-16 max-w-3xl mx-auto px-4">
        <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold">What Our Clients Say</h2>
        <p className="text-white/60 mt-4 text-lg">We take pride in delivering exceptional service. Here's what our clients have to say about their experience with V2 Security Solutions.</p>
      </div>

      <div className="space-y-12">
        <ReviewMarquee reviews={reviews} />
      </div>
    </section>
  );
};
