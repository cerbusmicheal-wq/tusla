import React from 'react';
import { Heart, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-serif text-gray-800">Eternal Moments</span>
          </div>
          <div className="flex space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Eternal Moments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;