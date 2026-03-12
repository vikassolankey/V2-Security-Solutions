import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const clients = [
  'National Gallery of Modern Art',
  'Indus Valley Partners',
  'Silver Arrow Automobile',
  'Apollo Hospital',
  'Galgotias University',
  'W.M Gurgaon',
  'HDFC Bank',
  'Haldiram Cafe',
  'Din Engineering Services',
  'FBD One',
];

export const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-accent uppercase tracking-[0.4em]">Valuable Clients</p>
        </div>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="client-swiper"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="glass px-6 py-8 rounded-2xl flex items-center justify-center text-center h-24 group">
                <span className="text-sm font-bold text-white/40 group-hover:text-white transition-colors">
                  {client}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
