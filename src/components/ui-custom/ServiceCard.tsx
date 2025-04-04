
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-md hover:shadow-xl border border-neutral-100">
      {/* Top gradient bar that reveals on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      
      <div className="p-8 flex flex-col h-full">
        <div className="mb-6 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3">
          <div className="w-16 h-16 bg-primary-blue-50 text-primary-blue-600 group-hover:bg-yellow-500 group-hover:text-dark-text rounded-full flex items-center justify-center transition-all duration-500">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-primary-blue-800">{title}</h3>
        <p className="text-medium-gray mb-6 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <Link 
            to={link} 
            className="inline-flex items-center text-secondary font-medium hover:text-primary transition-colors group/link"
          >
            Learn More 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
