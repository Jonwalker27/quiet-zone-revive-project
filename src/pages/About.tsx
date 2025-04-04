
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui-custom/SectionHeading';
import { Shield, Users, Award, Wrench, Star, Clock, DollarSign } from 'lucide-react';
import CtaSection from '../components/home/CtaSection';

const values = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Integrity',
    description: 'We believe in honest communication and transparent pricing. No surprises, no hidden fees.'
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: 'Quality',
    description: 'We use only quality parts and the latest diagnostic equipment for reliable repairs.'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Reliability',
    description: 'We complete repairs on time and stand behind our work with industry-leading warranties.'
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: 'Value',
    description: 'We provide quality service at fair prices, helping you maintain your vehicle for less.'
  }
];

const About = () => {
  return (
    <Layout>
      <section className="relative py-32 hero-gradient bg-[url('https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-white mb-6">About Us</h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg">
            Family owned and operated since 1990, providing quality automotive service across Connecticut.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&q=80&w=600" 
                alt="Quiet Zone CT auto shop" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Story</h2>
              <div className="section-divider mx-0 mb-6"></div>
              <p className="text-medium-gray mb-6">
                Quiet Zone CT was founded in 1990 with a simple mission: provide honest, reliable automotive 
                service at fair prices. Over the past 30+ years, we've grown from a single location to six 
                locations across Connecticut, but our commitment to quality and customer service has never changed.
              </p>
              <p className="text-medium-gray mb-6">
                As a family-owned and operated business, we understand the importance of trust when it comes 
                to your vehicle. That's why we take the time to explain our diagnostic findings and repair 
                recommendations in plain language, helping you make informed decisions about your vehicle.
              </p>
              <p className="text-medium-gray">
                Today, we continue to invest in the latest diagnostic equipment and ongoing training for our 
                technicians to ensure we can service the increasingly complex vehicles on the road today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Values" 
            subtitle="These core principles guide everything we do at Quiet Zone CT."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-6 h-full">
                <div className="feature-icon mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{value.title}</h3>
                <p className="text-medium-gray text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Team" 
            subtitle="Meet the skilled professionals who keep your vehicles running smoothly."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <div className="h-64 bg-gray-200 bg-[url('https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">John Johnson</h3>
                <p className="text-secondary mb-3">Founder & Owner</p>
                <p className="text-medium-gray">
                  With over 40 years of experience in automotive repair, John founded Quiet Zone CT in 1990 
                  and continues to oversee all locations.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="h-64 bg-gray-200 bg-[url('https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Mike Williams</h3>
                <p className="text-secondary mb-3">Master Technician</p>
                <p className="text-medium-gray">
                  ASE-certified master technician with specialized training in computer diagnostics and 
                  engine performance.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="h-64 bg-gray-200 bg-[url('https://images.unsplash.com/photo-1580677703781-59e93fab8a4a?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-secondary mb-3">Service Manager</p>
                <p className="text-medium-gray">
                  With a background in customer service and automotive knowledge, Sarah ensures every 
                  customer receives the best possible experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
};

export default About;
