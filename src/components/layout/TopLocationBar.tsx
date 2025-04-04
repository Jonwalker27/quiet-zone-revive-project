
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
    <div className="top-locations-bar">
      <div className="container">
        <ul className="locations-list">
          {locations.map((location) => (
            <li key={location.name}>
              <Link to={location.path}>{location.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopLocationBar;
