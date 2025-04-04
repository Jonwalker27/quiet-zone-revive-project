
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h5 className="text-accent font-semibold mb-5">About Us</h5>
            <p className="mb-4 text-white/80">
              Family owned and operated since 1990, Quiet Zone CT provides quality automotive repair and maintenance services at affordable prices across Connecticut.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialLink href="https://facebook.com" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="https://instagram.com" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="https://twitter.com" icon={<Twitter className="h-5 w-5" />} />
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-accent font-semibold mb-5">Our Services</h5>
            <ul className="space-y-3">
              <FooterLink to="/services/oil-change">Oil Changes & Maintenance</FooterLink>
              <FooterLink to="/services/brake-repair">Brake Repair & Service</FooterLink>
              <FooterLink to="/services/engine-diagnostics">Engine Diagnostics</FooterLink>
              <FooterLink to="/services/emissions">Emissions Testing</FooterLink>
              <FooterLink to="/services/ac-heating">AC & Heating Service</FooterLink>
              <FooterLink to="/services">View All Services</FooterLink>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h5 className="text-accent font-semibold mb-5">Our Locations</h5>
            <ul className="space-y-3">
              <FooterLink to="/locations/torrington">Torrington</FooterLink>
              <FooterLink to="/locations/thomaston">Thomaston</FooterLink>
              <FooterLink to="/locations/bantam">Bantam</FooterLink>
              <FooterLink to="/locations/watertown">Watertown</FooterLink>
              <FooterLink to="/locations/naugatuck">Naugatuck</FooterLink>
              <FooterLink to="/locations/orange">Orange</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-accent font-semibold mb-5">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-accent" />
                <span className="text-white/80">1299 East Main Street<br />Torrington, CT 06790</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <a href="tel:8606187007" className="text-white/80 hover:text-accent transition-colors">(860) 618-7007</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <a href="mailto:info@quietzonect.com" className="text-white/80 hover:text-accent transition-colors">info@quietzonect.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-0.5 text-accent" />
                <span className="text-white/80">Mon-Fri: 7:30am-5:30pm<br />Sat-Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {currentYear} Quiet Zone CT. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-white/70 text-sm hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/70 text-sm hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-white/70 text-sm hover:text-accent transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <li>
    <Link to={to} className="text-white/80 hover:text-accent transition-colors">
      {children}
    </Link>
  </li>
);

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-white/10 hover:bg-accent hover:text-primary rounded-full w-10 h-10 flex items-center justify-center transition-colors"
  >
    {icon}
  </a>
);

export default Footer;
