
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')] bg-cover bg-center py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-800/90 to-primary-blue-700/80"></div>
      
      {/* Subtle parallax overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 animate-subtle-parallax"></div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <span className="inline-block mb-4 px-4 py-1.5 bg-yellow-400/20 text-yellow-500 rounded-full text-sm font-semibold tracking-wide">Premium Automotive Service</span>
        <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Professional Auto Repair <br className="hidden md:block" />
          <span className="text-yellow-400">You Can Trust</span>
        </h1>
        <p className="text-white/90 max-w-3xl mx-auto mb-8 text-lg md:text-xl">
          Family owned and operated since 1990, Quiet Zone CT provides quality automotive repair
          and maintenance services at competitive prices across Connecticut.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link 
            to="/schedule" 
            className="btn-secondary btn-lg group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-white/20 group-hover:translate-x-0"></span>
            <span className="relative">Schedule Service</span>
          </Link>
          <a 
            href="tel:8606187007" 
            className="btn-primary btn-lg flex items-center justify-center group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-white/10 group-hover:translate-x-0"></span>
            <span className="relative flex items-center">
              <Phone className="mr-2 h-5 w-5" /> Call Us
            </span>
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default Hero;
