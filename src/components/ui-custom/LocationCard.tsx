
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

interface LocationCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  link: string;
  image?: string;
}

const LocationCard = ({ name, address, phone, hours, link, image }: LocationCardProps) => {
  return (
    <div className="card h-full flex flex-col">
      <div className={`h-48 bg-gray-200 bg-cover bg-center`} 
        style={{ backgroundImage: image ? `url(${image})` : 'none' }}>
      </div>
      <div className="card-body flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-3 text-primary">{name}</h3>
        <div className="space-y-3 mb-4 flex-grow">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 mr-2 mt-0.5 text-secondary" />
            <span className="text-medium-gray">{address}</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-2 text-secondary" />
            <a href={`tel:${phone.replace(/\D/g,'')}`} className="text-medium-gray hover:text-primary transition-colors">
              {phone}
            </a>
          </div>
          <div className="flex items-start">
            <Clock className="h-5 w-5 mr-2 mt-0.5 text-secondary" />
            <span className="text-medium-gray">{hours}</span>
          </div>
        </div>
        <Link 
          to={link} 
          className="btn-primary text-center w-full inline-flex items-center justify-center"
        >
          View Location <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;
