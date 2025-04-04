
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative hero-gradient bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')] bg-cover bg-center py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Professional Auto Repair <br className="hidden md:block" />You Can Trust
        </h1>
        <p className="text-white/90 max-w-3xl mx-auto mb-8 text-lg md:text-xl">
          Family owned and operated since 1990, Quiet Zone CT provides quality automotive repair
          and maintenance services at competitive prices across Connecticut.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link to="/schedule" className="btn-secondary btn-lg">
            Schedule Service
          </Link>
          <a href="tel:8606187007" className="btn-primary btn-lg flex items-center justify-center">
            <Phone className="mr-2 h-5 w-5" /> Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
