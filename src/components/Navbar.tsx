import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Search, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isLoggedIn = location.pathname === '/dashboard';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-500" />
              <span className="text-2xl font-serif text-gray-800">WedTube</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-rose-500 transition-colors">
              Featured
            </Link>
            <Link to="/videos" className="text-gray-700 hover:text-rose-500 transition-colors">
              Wedding Films
            </Link>
            <Link to="/vendors" className="text-gray-700 hover:text-rose-500 transition-colors">
              Vendors
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-rose-500 transition-colors">
              Pricing
            </Link>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-rose-500"
            >
              <Search className="h-5 w-5" />
            </button>
            {isLoggedIn ? (
              <Link
                to="/dashboard"
                className="flex items-center text-gray-700 hover:text-rose-500"
              >
                <User className="h-5 w-5 mr-2" />
                My Account
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for weddings, vendors, or events..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50"
              >
                Featured
              </Link>
              <Link
                to="/videos"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50"
              >
                Wedding Films
              </Link>
              <Link
                to="/vendors"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50"
              >
                Vendors
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50"
              >
                Pricing
              </Link>
              {isLoggedIn ? (
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50"
                >
                  My Account
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-rose-500 hover:text-rose-600 hover:bg-gray-50"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;