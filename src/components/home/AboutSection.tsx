
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Wrench } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Quality Guarantee',
    description: 'We stand behind our work with industry-leading warranties on parts and labor.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Family Owned',
    description: 'A local, family-owned business serving Connecticut communities since 1990.'
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Certified Technicians',
    description: 'Our ASE-certified technicians have the expertise to fix any problem.'
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: 'Advanced Equipment',
    description: 'We use state-of-the-art diagnostic and repair equipment for precise service.'
  }
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute -left-32 top-1/4 w-64 h-64 rounded-full bg-primary-blue-50 opacity-70"></div>
      <div className="absolute -right-48 bottom-0 w-96 h-96 rounded-full bg-yellow-50 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-primary-blue-50 text-primary-blue-800 rounded-full text-sm font-medium tracking-wide mb-4">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block pb-3">
              Why Choose Quiet Zone CT?
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-yellow-500 rounded-full"></span>
            </h2>
            <p className="text-medium-gray mb-6">
              For over 30 years, we've built our reputation on honest, reliable service and fair pricing. 
              As a family-owned business, we take pride in treating every customer like they're part of our family.
            </p>
            <p className="text-medium-gray mb-8">
              Our technicians are ASE-certified professionals who use the latest diagnostic equipment 
              and quality parts to keep your vehicle running at its best. We'll never recommend unnecessary 
              repairs or services.
            </p>
            <Link to="/about" className="group relative overflow-hidden bg-primary-blue-800 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center transition-all duration-300 shadow-md hover:shadow-lg hover:bg-primary-blue-700">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-white/10 group-hover:translate-x-0"></span>
              <span className="relative">Learn More About Us</span>
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 elevation-1 hover:elevation-3 transition-all duration-500 hover:-translate-y-1 border border-neutral-100">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary-blue-50 text-primary-blue-600 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-dark-text">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-blue-800">{feature.title}</h3>
                <p className="text-medium-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
