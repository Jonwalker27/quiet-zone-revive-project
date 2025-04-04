
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui-custom/SectionHeading';
import LocationCard from '../ui-custom/LocationCard';

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
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Locations" 
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
          <Link to="/locations" className="btn-primary">
            View All Locations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocationsOverview;
