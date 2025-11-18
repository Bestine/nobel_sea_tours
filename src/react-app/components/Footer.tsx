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
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-ocean-500 rounded-full flex items-center justify-center">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-serif font-bold">Nobel Sea Tours</span>
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
                <span>+254 XXX XXX XXX</span>
              </li>
              <li className="flex items-start space-x-3 text-ocean-200">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@nobelseatours.com</span>
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
