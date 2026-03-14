import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';

export const ProtectingFuture = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.QqncahTcySrtwhy-cJ5m3QHaIm?w=2204&h=2558&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Fire Protection"
                className="rounded-2xl shadow-xl h-80 object-cover"
              />
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.vIExn_EXIq2CiSQ9ez7fHAHaO5?w=715&h=1438&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Security Services"
                className="rounded-2xl shadow-xl h-80 object-cover mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-2xl shadow-2xl border border-accent/20">
              <p className="text-4xl font-display font-black text-accent mb-1">14+</p>
              <p className="text-sm font-bold text-white/60 uppercase tracking-widest leading-tight">Years<br />Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">  V2 Security Solutions</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight uppercase">
              Protecting Your Future Today
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Our business is saving yours from the destruction of fire and security intrusions. Keeping you people, your building, and your assets safe. Making sure that your business is compliant with state and industry regulations. Keeping an inconvenience from becoming a calamity.
            </p>
            
            <div className="space-y-6 mb-10">
              <h4 className="text-xl font-display font-bold text-white uppercase tracking-wider">Trust the Experts</h4>
              <p className="text-white/60 leading-relaxed">
                We've been protecting life and property since 2006—with the intensity, thoroughness, and dedication you'd expect from a company with a critical mission.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-accent p-4 rounded-2xl flex items-center gap-4 group cursor-pointer hover:bg-red-700 transition-colors">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-white/70 uppercase font-bold">Contact us to know more</p>
                  <p className="text-lg font-bold text-white">+91 8802580311</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const InnovativeSolutions = () => {
  const features = [
    "Effective & Consistent Quality",
    "Dedicated services",
    "Industry Leading Services",
    "Innovative Solutions"
  ];

  return (
    <section className="py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">  V2 Security Solutions</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight uppercase">
              We Provide Innovative Fire Protection and Life Safety Solutions
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
               V2 Security Solutions is known through Maharashtra for our efficiency and reliability backed by cutting-edge technology and expert professionals. We ensure extensive, effective & consistent quality standards of systems, products and services to the customers. We have been able to gain client's goodwill and confidence through our dedicated services.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <FaCheckCircle className="text-accent text-xl shrink-0" />
                  <span className="text-white/80 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />
            <img
              src="https://images.squarespace-cdn.com/content/v1/66daf2232ee994031a9a31e1/497adca1-a9bf-4c3e-b377-f298472b9ffd/AdobeStock_244644850.jpeg"
              alt="Innovative Fire Protection"
              className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const VFSSPLSection = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">V2</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
             V2 Security Solutions
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.vomGGKG3I7obpRMzMBq_FwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="VFSSPL Solutions"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative">
              <h3 className="text-6xl md:text-8xl font-display font-black text-white/5 absolute -top-10 -left-4 select-none">DELIVER</h3>
              <h3 className="text-5xl md:text-6xl font-display font-bold text-accent relative z-10 italic">We Deliver</h3>
              <p className="text-xl font-display font-bold text-white/80 mt-2 tracking-wide uppercase">Total Safety, Total Security</p>
            </div>

            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
               V2 Security Solutions is a trusted partner in the fire and security sector, offering end-to-end solutions designed to protect individuals, assets, and properties. As an award-winning fire integrator, VFSSPL has earned recognition for its exceptional expertise and innovation in designing and implementing advanced fire protection systems.
              </p>
              <p>
                With an unwavering commitment to quality and safety, VFSSPL provides a complete suite of electronic security systems, including fire detection, surveillance, and access control, catering to the diverse needs of residential, commercial, and industrial clients.
              </p>
              <p>
                Whether it's safeguarding a home, securing a business, or protecting large industrial facilities, VFSSPL stands at the forefront of the industry, delivering cutting-edge technology and customized solutions to ensure total safety and security.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const WhyCCTV = () => {
  const points = [
    {
      title: "Crime Prevention",
      description: "CCTV cameras act as a powerful deterrent, significantly reducing the likelihood of criminal activity and unauthorized access to your premises.",
      image: "https://wallpaperaccess.com/full/1995848.jpg",
      reverse: false
    },
    {
      title: "24/7 Monitoring",
      description: "Constant surveillance ensures your property is protected around the clock, providing peace of mind even when you are away from your home or business.",
      image: "https://racam.co.uk/wp-content/uploads/2024/09/1d35f57ethumbnail.jpeg",
      reverse: true
    },
    {
      title: "Evidence Collection",
      description: "In the event of an incident, high-quality footage serves as crucial evidence for investigations, helping authorities identify and apprehend suspects effectively.",
      image: "https://wallpaperaccess.com/full/14919146.jpg",
      reverse: false
    },
    {
      title: "Remote Monitoring",
      description: "Access your camera feeds from anywhere in the world via your smartphone or computer, allowing you to stay connected to your security at all times.",
      image: "https://img.freepik.com/premium-photo/man-control-room-with-many-monitors-logo-airline_501705-8867.jpg",
      reverse: true
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Security Importance</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Why CCTV is Important Today</h2>
          <div className="h-1.5 w-32 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-24">
          {points.map((point, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${point.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: point.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`${point.reverse ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
                  <img
                    src={point.image}
                    alt={point.title}
                    className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: point.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`${point.reverse ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <h3 className="text-3xl font-display font-bold mb-6 text-white">{point.title}</h3>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  {point.description}
                </p>
                <div className="flex items-center gap-4 text-accent font-bold uppercase tracking-widest text-sm">
                  <div className="w-12 h-0.5 bg-accent" />
                  Enhanced Security
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
