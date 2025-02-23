import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Filter, Search } from 'lucide-react';

const categories = [
  "All",
  "Photography",
  "Videography",
  "Florists",
  "Catering",
  "Venues",
  "Music",
  "Decor"
];

const vendors = [
  {
    id: 1,
    name: "Floral Dreams",
    category: "Florists",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: 128,
    featured: true
  },
  {
    id: 2,
    name: "Sweet Delights",
    category: "Catering",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviews: 156,
    featured: true
  },
  {
    id: 3,
    name: "Elegant Events",
    category: "Venues",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviews: 98,
    featured: false
  },
  {
    id: 4,
    name: "Capture Moments",
    category: "Photography",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: 215,
    featured: true
  },
  {
    id: 5,
    name: "Wedding Films Co",
    category: "Videography",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviews: 167,
    featured: false
  },
  {
    id: 6,
    name: "Harmony Band",
    category: "Music",
    location: "Nashville, TN",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: 142,
    featured: true
  }
];

const Vendors = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVendors = vendors.filter(
    vendor =>
      (selectedCategory === "All" || vendor.category === selectedCategory) &&
      (vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       vendor.location.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search and Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="relative flex-1 max-w-lg">
              <input
                type="text"
                placeholder="Search vendors by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVendors.map((vendor) => (
            <Link key={vendor.id} to={`/vendor/${vendor.id}`}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-48 object-cover"
                  />
                  {vendor.featured && (
                    <div className="absolute top-2 right-2 bg-rose-500 text-white px-2 py-1 rounded text-sm">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{vendor.name}</h3>
                  <p className="text-rose-500 text-sm mb-2">{vendor.category}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {vendor.location}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-medium">{vendor.rating}</span>
                    <span className="text-gray-500 ml-1">({vendor.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vendors;