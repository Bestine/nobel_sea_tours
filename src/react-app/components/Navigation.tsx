import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/experiences', label: 'Experiences' },
    { path: '/retreats', label: 'Retreats' },
    { path: '/marketplace', label: 'Marketplace' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand: Logo image + "Nobel Sea Tours" text */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="https://raw.githubusercontent.com/Bestine/nobel_sea_tours/refs/heads/main/public/assets/images/logos/nobel_sea_logo_1.png"
              alt="Nobel Sea Tours Logo"
              className="h-9 md:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-2xl font-serif font-bold bg-gradient-to-r from-ocean-700 to-ocean-500 bg-clip-text text-transparent">
              Nobel Sea Tours
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === link.path
                    ? 'text-ocean-600'
                    : 'text-gray-700 hover:text-ocean-500'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-ocean-500 transform origin-left transition-transform ${
                  location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-ocean-50 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-ocean-700" />
            ) : (
              <Menu className="w-6 h-6 text-ocean-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation – unchanged */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-ocean-50 text-ocean-600'
                    : 'text-gray-700 hover:bg-ocean-50 hover:text-ocean-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}