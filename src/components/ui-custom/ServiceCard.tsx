
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
    <div className="card h-full flex flex-col">
      <div className="card-body flex-grow">
        <div className="feature-icon mx-auto">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-primary text-center">{title}</h3>
        <p className="text-medium-gray mb-4 text-center">{description}</p>
        <div className="mt-auto text-center">
          <Link 
            to={link} 
            className="inline-flex items-center text-secondary font-medium hover:text-primary transition-colors"
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
