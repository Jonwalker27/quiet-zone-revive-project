
import React from 'react';
import { Wrench, Gauge, Thermometer, Car, Activity, TriangleAlert } from 'lucide-react';
import ServiceCard from '../ui-custom/ServiceCard';
import SectionHeading from '../ui-custom/SectionHeading';

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
    title: 'Full Service Auto Repair',
    description: 'Complete automotive repair services for all makes and models of vehicles.',
    icon: <Car />,
    link: '/services'
  }
];

const ServiceOverview = () => {
  return (
    <section className="section-padding bg-light-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Services" 
          subtitle="We offer a complete range of services to keep your vehicle running at its best."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
};

export default ServiceOverview;
