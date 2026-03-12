import React from 'react';
import { Hero } from '../components/Hero';
import { About as AboutSection } from '../components/About';
import { Services as ServicesSection } from '../components/Services';
import { Products } from '../components/Products';
import { Owner } from '../components/Owner';
import { Team } from '../components/Team';
import { Clients as ClientsSection } from '../components/Clients';
import { Reviews } from '../components/Reviews';
import { Gallery as GallerySection } from '../components/Gallery';
import { Contact as ContactSection } from '../components/Contact';
import { PageTransition } from '../components/PageTransition';

export const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Products />
      <Owner />
      <Team />
      <ClientsSection />
      <Reviews />
      <GallerySection />
      <ContactSection />
    </PageTransition>
  );
};
