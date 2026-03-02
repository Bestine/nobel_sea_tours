import { Link } from 'react-router';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Waves } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
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
            </div>
            <p className="text-ocean-200 text-sm leading-relaxed">
              Sustainable eco-tourism experiences along the beautiful East African Coast.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-ocean-700/50 hover:bg-ocean-600 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-ocean-700/50 hover:bg-ocean-600 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-ocean-700/50 hover:bg-ocean-600 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/experiences" className="text-ocean-200 hover:text-white transition-colors text-sm">Experiences</Link></li>
              <li><Link to="/marketplace" className="text-ocean-200 hover:text-white transition-colors text-sm">Marketplace</Link></li>
              <li><Link to="/blog" className="text-ocean-200 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link to="/about" className="text-ocean-200 hover:text-white transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Popular Tours</h3>
            <ul className="space-y-2 text-sm text-ocean-200">
              <li className="hover:text-white transition-colors cursor-pointer">Dolphin Experience</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sunset Dhow Cruise</li>
              <li className="hover:text-white transition-colors cursor-pointer">Mambrui Sand Dunes</li>
              <li className="hover:text-white transition-colors cursor-pointer">Floating Restaurant</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 text-ocean-200">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+254 119 101 566</span>
              </li>
              <li className="flex items-start space-x-3 text-ocean-200">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>nobelseatours@yahoo.com</span>
              </li>
              <li className="flex items-start space-x-3 text-ocean-200">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Mombasa, Kenya<br />East African Coast</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ocean-700 mt-12 pt-8 text-center text-ocean-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Nobel Sea Tours. All rights reserved. Building sustainable futures, one journey at a time.</p>
        </div>
      </div>
    </footer>
  );
}
