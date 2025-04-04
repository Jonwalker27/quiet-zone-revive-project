
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import ServiceOverview from '../components/home/ServiceOverview';
import AboutSection from '../components/home/AboutSection';
import LocationsOverview from '../components/home/LocationsOverview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServiceOverview />
      <AboutSection />
      <LocationsOverview />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
