
import React from 'react';
import { Link } from 'react-router-dom';

const locations = [
  { name: 'Torrington', path: '/locations/torrington' },
  { name: 'Thomaston', path: '/locations/thomaston' },
  { name: 'Bantam', path: '/locations/bantam' },
  { name: 'Watertown', path: '/locations/watertown' },
  { name: 'Naugatuck', path: '/locations/naugatuck' },
  { name: 'Orange', path: '/locations/orange' },
];

const TopLocationBar = () => {
  return (
    <div className="bg-gradient-to-r from-primary-blue-800 to-primary-blue-900 py-2">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center flex-wrap m-0 p-0">
          {locations.map((location, index) => (
            <li 
              key={location.name} 
              className={`mx-4 relative ${
                index !== locations.length - 1 ? "after:content-['•'] after:absolute after:right-[-12px] after:top-1/2 after:transform after:-translate-y-1/2 after:text-white/30" : ""
              }`}
            >
              <Link 
                to={location.path} 
                className="text-white text-sm no-underline transition-colors duration-300 hover:text-accent font-medium tracking-wide"
              >
                {location.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopLocationBar;
