
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
}

const TestimonialCard = ({ name, location, text, rating, date }: TestimonialCardProps) => {
  return (
    <div className="card h-full">
      <div className="card-body flex flex-col">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? 'fill-accent text-accent' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <p className="text-medium-gray mb-4 italic">"{text}"</p>
        <div className="mt-auto">
          <p className="font-medium text-dark-text">{name}</p>
          <div className="flex justify-between items-center mt-1">
            <span className="text-sm text-medium-gray">{location}</span>
            <span className="text-sm text-medium-gray">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
