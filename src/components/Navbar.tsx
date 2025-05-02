
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Buy', path: '/buy' },
    { name: 'Sell', path: '/sell' },
    { name: 'Rent', path: '/rent' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-derwent-blue">
              DERWENT<span className="font-normal text-derwent-dark">REAL ESTATE</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors',
                  isScrolled ? 'text-derwent-dark hover:text-derwent-blue' : 'text-white hover:text-gray-200'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-derwent-blue"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 text-derwent-dark hover:text-derwent-blue"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
