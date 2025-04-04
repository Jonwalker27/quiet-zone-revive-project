
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui-custom/SectionHeading';
import { Wrench, Gauge, Thermometer, Car, Activity, TriangleAlert, Battery, Zap } from 'lucide-react';
import ServiceCard from '../components/ui-custom/ServiceCard';
import CtaSection from '../components/home/CtaSection';

const services = [
  {
    title: 'Oil Changes & Maintenance',
    description: 'Regular oil changes and preventative maintenance to keep your vehicle running smoothly.',
    icon: <Wrench />,
    link: '/services/oil-change'
  },
  {
    title: 'Brake Repair & Service',
    description: 'Complete brake system inspection, repair, and replacement for your safety.',
    icon: <TriangleAlert />,
    link: '/services/brake-repair'
  },
  {
    title: 'Engine Diagnostics',
    description: 'Computer diagnostics to identify and fix engine problems and check engine lights.',
    icon: <Activity />,
    link: '/services/engine-diagnostics'
  },
  {
    title: 'AC & Heating Service',
    description: 'Keep your vehicle comfortable with professional AC and heating system repairs.',
    icon: <Thermometer />,
    link: '/services/ac-heating'
  },
  {
    title: 'Emissions Testing',
    description: 'Connecticut state emissions testing and repairs to keep you legal on the road.',
    icon: <Gauge />,
    link: '/services/emissions'
  },
  {
    title: 'Battery Service',
    description: 'Battery testing, replacement, and electrical system diagnosis to keep you starting.',
    icon: <Battery />,
    link: '/services/battery'
  },
  {
    title: 'Electrical System Diagnosis',
    description: 'Complete electrical system diagnosis and repair for all vehicle systems.',
    icon: <Zap />,
    link: '/services/electrical'
  },
  {
    title: 'Full Service Auto Repair',
    description: 'Complete automotive repair services for all makes and models of vehicles.',
    icon: <Car />,
    link: '/services/auto-repair'
  }
];

const Services = () => {
  return (
    <Layout>
      <section className="relative py-32 hero-gradient bg-[url('https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-white mb-6">Our Services</h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg">
            From routine maintenance to complex repairs, our certified technicians provide 
            comprehensive automotive services to keep your vehicle running at its best.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Comprehensive Auto Services" 
            subtitle="We offer a complete range of automotive repair and maintenance services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
};

export default Services;
