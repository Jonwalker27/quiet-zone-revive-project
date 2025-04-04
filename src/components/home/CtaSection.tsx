
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue-900 via-primary-blue-800 to-primary-blue-700"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
      }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg">
          Schedule your service appointment today or call us for immediate assistance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/schedule" className="group relative overflow-hidden bg-yellow-500 text-dark-text px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-yellow-600/20 transition-all duration-300">
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-white/20 group-hover:translate-x-0"></span>
            <span className="relative flex items-center">
              <Calendar className="mr-2 h-5 w-5" /> Schedule Service
            </span>
          </Link>
          <a href="tel:8606187007" className="group relative overflow-hidden bg-white text-primary-blue-800 px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300">
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-primary-blue-50/50 group-hover:translate-x-0"></span>
            <span className="relative flex items-center">
              <Phone className="mr-2 h-5 w-5" /> (860) 618-7007
            </span>
          </a>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CtaSection;
