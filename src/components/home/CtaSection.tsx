
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Ready to Get Started?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
          Schedule your service appointment today or call us for immediate assistance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/schedule" className="btn-secondary btn-lg flex items-center justify-center">
            <Calendar className="mr-2 h-5 w-5" /> Schedule Service
          </Link>
          <a href="tel:8606187007" className="btn-primary btn-lg flex items-center justify-center bg-white text-primary hover:bg-accent hover:text-dark-text">
            <Phone className="mr-2 h-5 w-5" /> (860) 618-7007
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
