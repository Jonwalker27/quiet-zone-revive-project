
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
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why Choose Quiet Zone CT?</h2>
            <div className="section-divider mx-0 mb-6"></div>
            <p className="text-medium-gray mb-6">
              For over 30 years, we've built our reputation on honest, reliable service and fair pricing. 
              As a family-owned business, we take pride in treating every customer like they're part of our family.
            </p>
            <p className="text-medium-gray mb-8">
              Our technicians are ASE-certified professionals who use the latest diagnostic equipment 
              and quality parts to keep your vehicle running at its best. We'll never recommend unnecessary 
              repairs or services.
            </p>
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card p-6">
                <div className="feature-icon mb-4 mx-0">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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
