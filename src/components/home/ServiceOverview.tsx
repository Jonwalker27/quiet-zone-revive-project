
import React from 'react';
import { Wrench, Gauge, Thermometer, Car, Activity, TriangleAlert } from 'lucide-react';
import ServiceCard from '../ui-custom/ServiceCard';
import SectionHeading from '../ui-custom/SectionHeading';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Oil Changes & Maintenance',
    description: 'Regular oil changes and preventative maintenance to keep your vehicle running smoothly.',
    icon: <Wrench className="h-7 w-7" />,
    link: '/services/oil-change'
  },
  {
    title: 'Brake Repair & Service',
    description: 'Complete brake system inspection, repair, and replacement for your safety.',
    icon: <TriangleAlert className="h-7 w-7" />,
    link: '/services/brake-repair'
  },
  {
    title: 'Engine Diagnostics',
    description: 'Computer diagnostics to identify and fix engine problems and check engine lights.',
    icon: <Activity className="h-7 w-7" />,
    link: '/services/engine-diagnostics'
  },
  {
    title: 'AC & Heating Service',
    description: 'Keep your vehicle comfortable with professional AC and heating system repairs.',
    icon: <Thermometer className="h-7 w-7" />,
    link: '/services/ac-heating'
  },
  {
    title: 'Emissions Testing',
    description: 'Connecticut state emissions testing and repairs to keep you legal on the road.',
    icon: <Gauge className="h-7 w-7" />,
    link: '/services/emissions'
  },
  {
    title: 'Full Service Auto Repair',
    description: 'Complete automotive repair services for all makes and models of vehicles.',
    icon: <Car className="h-7 w-7" />,
    link: '/services'
  }
];

const ServiceOverview = () => {
  return (
    <section className="section-padding bg-neutral-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-primary-blue-50 rounded-bl-full opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-48 bg-yellow-100 rounded-tr-full opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <SectionHeading 
          title={<>Our <span className="text-gradient">Services</span></>}
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

        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="bg-gradient-to-r from-primary-blue-800 to-primary-blue-600 text-white px-7 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-primary-blue-800/20 group"
          >
            View All Services
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
