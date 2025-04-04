
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui-custom/SectionHeading';
import LocationCard from '../components/ui-custom/LocationCard';

const locations = [
  {
    name: 'Torrington',
    address: '1299 East Main Street, Torrington, CT 06790',
    phone: '(860) 618-7007',
    hours: 'Mon-Fri: 7:30am-5:00pm, Sat-Sun: Closed',
    image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80&w=800&h=500',
    link: '/locations/torrington'
  },
  {
    name: 'Thomaston',
    address: '109 East Main Street, Thomaston, CT 06787',
    phone: '(860) 283-3005',
    hours: 'Mon-Fri: 7:30am-5:30pm, Sat-Sun: Closed',
    image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80&w=800&h=500',
    link: '/locations/thomaston'
  },
  {
    name: 'Bantam',
    address: '932 Bantam Road, Bantam, CT 06750',
    phone: '(860) 567-3380',
    hours: 'Mon-Fri: 7:30am-5:30pm, Sat-Sun: Closed',
    image: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170?auto=format&fit=crop&q=80&w=800&h=500',
    link: '/locations/bantam'
  },
  {
    name: 'Watertown',
    address: '789 Main Street, Watertown, CT 06795',
    phone: '(860) 945-6000',
    hours: 'Mon-Fri: 7:30am-5:30pm, Sat-Sun: Closed',
    image: 'https://images.unsplash.com/photo-1439837118197-43dda3b494ee?auto=format&fit=crop&q=80&w=800&h=500',
    link: '/locations/watertown'
  },
  {
    name: 'Naugatuck',
    address: '144 Rubber Avenue, Naugatuck, CT 06770',
    phone: '(203) 729-4145',
    hours: 'Mon-Fri: 7:30am-5:30pm, Sat-Sun: Closed',
    image: 'https://images.unsplash.com/photo-1452378374265-fdfc4a0a1ecb?auto=format&fit=crop&q=80&w=800&h=500',
    link: '/locations/naugatuck'
  },
  {
    name: 'Orange',
    address: '404 Boston Post Road, Orange, CT 06477',
    phone: '(203) 553-9950',
    hours: 'Mon-Fri: 7:30am-5:30pm, Sat-Sun: Closed',
    image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80&w=800&h=500',
    link: '/locations/orange'
  }
];

const Locations = () => {
  return (
    <Layout>
      <section className="relative py-32 hero-gradient bg-[url('https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-white mb-6">Our Locations</h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg">
            With six convenient locations across Connecticut, quality auto service is never far away.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Find a Location Near You" 
            subtitle="All of our locations offer the same quality service and competitive pricing."
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
        </div>
      </section>
    </Layout>
  );
};

export default Locations;
