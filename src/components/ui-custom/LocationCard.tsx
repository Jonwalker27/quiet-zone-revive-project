
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
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-100 h-full flex flex-col">
      <div 
        className="h-52 bg-primary-blue-100 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105" 
        style={{ backgroundImage: image ? `url(${image})` : 'none' }}
      >
        {!image && (
          <div className="flex items-center justify-center h-full">
            <MapPin className="h-10 w-10 text-primary-blue-300" />
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-4 text-primary-blue-800">{name}</h3>
        <div className="space-y-4 mb-6 flex-grow text-medium-gray">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 mr-3 mt-0.5 text-secondary flex-shrink-0" />
            <span>{address}</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-3 text-secondary flex-shrink-0" />
            <a href={`tel:${phone.replace(/\D/g,'')}`} className="text-medium-gray hover:text-primary transition-colors">
              {phone}
            </a>
          </div>
          <div className="flex items-start">
            <Clock className="h-5 w-5 mr-3 mt-0.5 text-secondary flex-shrink-0" />
            <span>{hours}</span>
          </div>
        </div>
        
        <Link 
          to={link} 
          className="bg-gradient-to-r from-primary-blue-800 to-primary-blue-600 text-white px-4 py-3 rounded-lg font-medium text-center flex items-center justify-center group-hover:shadow-lg transition-all duration-300 hover:from-primary-blue-700 hover:to-primary-blue-500 relative overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-white/10 group-hover:translate-x-0"></span>
          <span className="relative flex items-center">
            View Location <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;
