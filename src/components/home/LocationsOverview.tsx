
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui-custom/SectionHeading';
import LocationCard from '../ui-custom/LocationCard';
import { MapPin } from 'lucide-react';

const locations = [
  {
    name: 'Torrington',
    address: '1299 East Main Street, Torrington, CT 06790',
    phone: '(860) 618-7007',
    hours: 'Mon-Fri: 7:30am-5:00pm',
    image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80&w=800&h=500',
    link: '/locations/torrington'
  },
  {
    name: 'Thomaston',
    address: '109 East Main Street, Thomaston, CT 06787',
    phone: '(860) 283-3005',
    hours: 'Mon-Fri: 7:30am-5:30pm',
    image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80&w=800&h=500',
    link: '/locations/thomaston'
  },
  {
    name: 'Bantam',
    address: '932 Bantam Road, Bantam, CT 06750',
    phone: '(860) 567-3380',
    hours: 'Mon-Fri: 7:30am-5:30pm',
    image: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170?auto=format&fit=crop&q=80&w=800&h=500',
    link: '/locations/bantam'
  }
];

const LocationsOverview = () => {
  return (
    <section className="section-padding bg-white relative">
      {/* Decorative elements */}
      <div className="absolute right-0 top-20 w-32 h-64 bg-primary-blue-50 rounded-l-full opacity-30"></div>
      <div className="absolute left-0 bottom-20 w-48 h-48 bg-yellow-50 rounded-r-full opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title={<>Our <span className="text-gradient">Locations</span></>}
          subtitle="Visit one of our six convenient locations across Connecticut."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <LocationCard 
              key={index}
              name={location.name}
              address={location.address}
              phone={location.phone}
              hours={location.hours}
              image={location.image}
              link={location.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/locations" 
            className="group bg-transparent border-2 border-primary-blue-800 text-primary-blue-800 hover:bg-primary-blue-800 hover:text-white px-7 py-3 rounded-lg font-medium inline-flex items-center transition-all duration-300"
          >
            <MapPin className="mr-2 h-5 w-5" />
            View All Locations
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocationsOverview;
