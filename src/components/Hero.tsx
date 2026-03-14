import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Security3D } from './Security3D';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1920',
    title: 'Advanced CCTV Monitoring',
    subtitle: '24/7 Surveillance with AI-powered threat detection for maximum safety.',
  },
  {
    image: 'https://wallpaperaccess.com/full/9227651.jpg',
    title: 'Fire Safety Systems',
    subtitle: 'State-of-the-art fire detection and suppression for your peace of mind.',
  },
  {
    image: 'https://technoeyenet.com/wp-content/uploads/2020/02/access-control-pic.jpg',
    title: 'Integrated Access Control',
    subtitle: 'Manage and monitor entry points with biometric and smart card solutions.',
  },
  {
    image: 'https://img.freepik.com/premium-photo/mouse-christmas-tree_865091-1078.jpg',
    title: 'Rodent Systems',
    subtitle: 'Ultrasonic pest repellent systems for sensitive equipment.',
  },
    {
    image: 'https://t3.ftcdn.net/jpg/07/72/84/88/360_F_772848831_iCrKrMZpJjsZfzanbRDl16Byf5rxTFHg.jpg',
    title: 'Gas Suppression',
    subtitle: 'Automated gas-based fire extinguishing for server rooms.',
  },


];

export const Hero = () => {
  return (
    <section id="home" className="relative h-[calc(100vh-100px)] min-h-[600px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
              
              <div className="relative h-full flex items-center px-4 md:px-12 max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-2xl"
                >
                  <div className="text-5xl md:text-7xl font-display font-extrabold leading-tight mb-6 min-h-[120px] md:min-h-[160px]">
                    <Typewriter
                      options={{
                        strings: [slide.title],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 50,
                        wrapperClassName: "text-white",
                        cursorClassName: "text-accent"
                      }}
                    />
                  </div>
                  <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-accent hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-accent/20"
                    >
                      Our Services
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all"
                    >
                      Contact Us
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Security3D />
    </section>
  );
};
