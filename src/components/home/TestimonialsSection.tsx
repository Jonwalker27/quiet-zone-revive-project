
import React, { useState, useEffect } from 'react';
import SectionHeading from '../ui-custom/SectionHeading';
import TestimonialCard from '../ui-custom/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'John Smith',
    location: 'Torrington',
    text: 'I've been going to Quiet Zone for all my automotive needs for over 5 years. They're always honest, fair with pricing, and do excellent work. Wouldn't trust my car with anyone else!',
    rating: 5,
    date: 'June 15, 2023'
  },
  {
    name: 'Sarah Johnson',
    location: 'Thomaston',
    text: 'After being overcharged at the dealership for years, I started going to Quiet Zone and couldn't be happier. They explained exactly what my car needed and what it didn't. Saved me hundreds!',
    rating: 5,
    date: 'August 3, 2023'
  },
  {
    name: 'Michael Brown',
    location: 'Watertown',
    text: 'Quick service, fair prices, and friendly staff. They fixed my AC system when two other shops couldn't figure out the problem. These guys know what they're doing.',
    rating: 5,
    date: 'July 22, 2023'
  },
  {
    name: 'Jennifer Wilson',
    location: 'Bantam',
    text: 'As a woman, I've often felt taken advantage of at auto shops. Not at Quiet Zone! They treated me with respect, explained everything clearly, and didn't try to upsell unnecessary services.',
    rating: 5,
    date: 'May 9, 2023'
  },
  {
    name: 'Robert Garcia',
    location: 'Naugatuck',
    text: 'My check engine light came on during a road trip. Quiet Zone got me in right away, diagnosed the problem quickly, and had me back on the road the same day. Excellent service!',
    rating: 4,
    date: 'September 11, 2023'
  },
  {
    name: 'Elizabeth Taylor',
    location: 'Orange',
    text: 'I've been bringing my family's vehicles to Quiet Zone for over a decade. They're always professional, thorough, and stand behind their work. Highly recommend!',
    rating: 5,
    date: 'April 18, 2023'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const pageCount = Math.ceil(testimonials.length / itemsPerPage);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : pageCount - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < pageCount - 1 ? prevIndex + 1 : 0));
  };
  
  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage, 
    (currentIndex * itemsPerPage) + itemsPerPage
  );

  return (
    <section className="section-padding bg-light-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What Our Customers Say" 
          subtitle="Don't just take our word for it. Hear from our satisfied customers."
        />
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                text={testimonial.text}
                rating={testimonial.rating}
                date={testimonial.date}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-md text-primary hover:text-secondary transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex space-x-2 items-center">
              {[...Array(pageCount)].map((_, index) => (
                <span 
                  key={index}
                  className={`block w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md text-primary hover:text-secondary transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
