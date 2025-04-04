
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-primary font-heading font-bold text-2xl tracking-tight">QUIET ZONE CT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <a href="tel:8606187007" className="flex items-center text-primary font-medium hover:text-secondary transition-colors">
              <Phone className="mr-2 h-4 w-4" />
              (860) 618-7007
            </a>
            <Link to="/schedule" className="btn-secondary">Schedule Service</Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <a href="tel:8606187007" className="mr-4 text-primary">
              <Phone className="h-6 w-6" />
            </a>
            <button 
              onClick={toggleMenu} 
              className="text-primary focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 border-t border-gray-100 shadow-md' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          <MobileNavLink to="/" exact>Home</MobileNavLink>
          <MobileNavLink to="/services">Services</MobileNavLink>
          <MobileNavLink to="/locations">Locations</MobileNavLink>
          <MobileNavLink to="/about">About Us</MobileNavLink>
          <MobileNavLink to="/contact">Contact</MobileNavLink>
          <Link to="/schedule" className="btn-secondary w-full text-center block">Schedule Service</Link>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  exact?: boolean;
}

const NavLink = ({ to, children, exact }: NavLinkProps) => {
  const location = useLocation();
  const isActive = exact ? location.pathname === to : location.pathname.startsWith(to);

  return (
    <Link 
      to={to} 
      className={`font-medium transition-colors ${
        isActive 
          ? 'text-primary font-semibold' 
          : 'text-dark-text hover:text-accent'
      }`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, exact }: NavLinkProps) => {
  const location = useLocation();
  const isActive = exact ? location.pathname === to : location.pathname.startsWith(to);

  return (
    <Link 
      to={to} 
      className={`block py-2 font-medium text-lg ${
        isActive 
          ? 'text-primary font-semibold' 
          : 'text-dark-text hover:text-accent'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
